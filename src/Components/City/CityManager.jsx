import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Layout/Layout";
import {
  CityStatusCity,
  DeleteCity,
  GetCities,
} from "../../adminHttpServices/dashHttpService";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const CityManager = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetCities = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await GetCities();
      if (data && !data.error) {
        setCities(data.results?.popularCities);
      } else {
        setCities([]);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetCities();
  }, [handleGetCities]);

  const handleDelete = async (id) => {
    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (confirm.isConfirmed) {
        const { data } = await DeleteCity(id);
        if (data && !data?.error) {
          Swal.fire("Deleted!", "City has been deleted.", "success");
          handleGetCities();
        } else {
          Swal.fire(
            "Error",
            data?.message || "Failed to delete city.",
            "error",
          );
        }
      }
    } catch (error) {
      console.error("Delete error:", error);
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to delete city.",
        "error",
      );
    }
  };

  const handleToggleStatus = async (id, event) => {
    event.stopPropagation();
    try {
      const { data } = await CityStatusCity(id);
      if (data && !data?.error) {
        Swal.fire("Updated!", "City status has been updated.", "success");
        handleGetCities();
      } else {
        Swal.fire(
          "Error",
          data?.message || "Failed to update status.",
          "error",
        );
      }
    } catch (error) {
      console.error("Status toggle error:", error);
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to update status.",
        "error",
      );
    }
  };

  return (
    <Layout activeSlide={"Cities"}>
      <div className="content-body">
        <div className="container-fluid">
          {loading && (
            <div className="text-center mb-3">
              <div className="spinner-border text-primary" />
            </div>
          )}

          {!loading && (
            <Link to="/Cities/Add" className="btn btn-primary mb-3">
              Add New City
            </Link>
          )}

          <div className="row">
            {cities.map((city) => (
              <div
                onClick={() =>
                  navigate("/Cities/Edit", {
                    state: { data: city },
                  })
                }
                className="col-md-3 mb-4"
                key={city.id}
                title={city?.description}
              >
                <div className="card shadow-sm">
                  <div className="position-relative">
                    {/* Status toggle */}
                    <div className="city-controls">
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id={`status-${city?._id}`}
                          checked={city?.status === true}
                          onChange={(e) => handleToggleStatus(city?._id, e)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>

                    <div className="delete_city">
                      <i
                        className="fa-solid fa-trash-can delete_image"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleDelete(city?._id);
                        }}
                      />
                    </div>

                    <img
                      src={city?.image || "/images/placeholder.png"}
                      alt={city?.cityName || "City"}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">
                      {city.cityName || "Unnamed City"}
                    </h5>
                  </div>
                </div>
              </div>
            ))}

            {!loading && cities.length === 0 && (
              <div className="col-12 text-center text-muted py-5">
                No cities found.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CityManager;
