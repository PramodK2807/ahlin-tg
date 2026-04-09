import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout/Layout";
import {
  AddCity,
  GetCities,
  UpdateCity,
} from "./adminHttpServices/dashHttpService";

// Default Country List
const COUNTRY_LIST = [
  "India",
  "Saudi Arabia",
  "United Arab Emirates",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Singapore",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
];

const CityManager = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingCityId, setEditingCityId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    country: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [saveLoading, setSaveLoading] = useState(false);

  // Fetch Cities
  const handleGetCities = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await GetCities();
      if (data && !data.error) {
        const formattedCities = data.results?.popularCities?.map((city) => ({
          id: city._id,
          name: city.cityName || city.name,
          country: city.countryName || city.country,
          image: city.image,
          createdAt: city.createdAt,
          updatedAt: city.updatedAt,
        }));
        setCities(formattedCities || []);
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

  // Toggle Edit Mode
  const handleEditToggle = (city) => {
    setEditingCityId(city.id);
    setEditFormData({
      name: city.name,
      country: city.country,
      image: null,
    });
    setImagePreview(null);
  };

  // Handle Input Changes
  const handleNameChange = (value) => {
    setEditFormData((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleCountryChange = (value) => {
    setEditFormData((prev) => ({
      ...prev,
      country: value,
    }));
  };

  // Handle Image Change
  const handleImageChange = (file) => {
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    setEditFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  // Add New City Card
  const handleAddCityCard = () => {
    const newId = `temp-${Date.now()}`;
    setEditingCityId(newId);
    setEditFormData({
      name: "",
      country: "",
      image: null,
    });
    setImagePreview(null);

    // Add temporary city to list
    const newCity = {
      id: newId,
      name: "",
      country: "",
      image: "https://via.placeholder.com/300x200?text=Upload+Image",
      isNew: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setCities((prev) => [newCity, ...prev]);
  };

  // Save City (Add or Update)
  const handleSaveCity = async (city) => {
    if (!editFormData.name?.trim()) {
      alert("City name is required.");
      return;
    }

    if (!editFormData.country) {
      alert("Country is required.");
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("cityName", editFormData.name.trim());
    formDataObj.append("countryName", editFormData.country);

    if (editFormData.image && editFormData.image instanceof File) {
      formDataObj.append("image", editFormData.image);
    }

    setSaveLoading(true);
    try {
      if (city.isNew) {
        await AddCity(formDataObj);
      } else {
        await UpdateCity(formDataObj, city.id);
      }

      // Clear editing state
      setEditingCityId(null);
      setEditFormData({ name: "", country: "", image: null });
      setImagePreview(null);

      // Refresh the list
      await handleGetCities();
    } catch (error) {
      console.error("Error saving city:", error);
      alert("Failed to save city. Please try again.");
    } finally {
      setSaveLoading(false);
    }
  };

  // Cancel Edit
  const handleCancel = () => {
    setEditingCityId(null);
    setEditFormData({ name: "", country: "", image: null });
    setImagePreview(null);
    // Remove temp city if it exists
    setCities((prev) =>
      prev.filter((city) => !city.id.toString().startsWith("temp-")),
    );
    handleGetCities();
  };

  // Format Date
  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString();
  };

  // Get current city display data for editing
  const getCurrentDisplayData = (city) => {
    if (editingCityId === city.id) {
      return {
        name: editFormData.name,
        country: editFormData.country,
        image: imagePreview || editFormData.image || city.image,
      };
    }
    return city;
  };

  const isEditing = (cityId) => editingCityId === cityId;

  return (
    <Layout activeSlide={"Cities"}>
      <div className="content-body">
        <div className="container-fluid">
          {loading && (
            <div className="text-center mb-3">
              <div className="spinner-border text-primary" />
            </div>
          )}

          <div className="row">
            {cities.map((city) => {
              const displayData = getCurrentDisplayData(city);
              const cityIsEditing = isEditing(city.id);

              return (
                <div className="col-md-3 mb-4" key={city.id}>
                  <div className="d-flex flex-column h-100">
                    {/* Card */}
                    <div className="card shadow-sm">
                      {/* Image Section */}
                      <div className="position-relative">
                        <img
                          src={
                            displayData.image ||
                            "https://via.placeholder.com/300x200?text=No+Image"
                          }
                          alt={displayData.name || "City"}
                          className="card-img-top"
                          style={{
                            height: "180px",
                            objectFit: "cover",
                          }}
                        />
                        {cityIsEditing && (
                          <label className="position-absolute bottom-0 end-0 m-2">
                            <input
                              type="file"
                              accept="image/*"
                              className="d-none"
                              onChange={(e) =>
                                handleImageChange(e.target.files[0])
                              }
                            />
                            <span
                              className="btn btn-sm btn-primary rounded-circle"
                              style={{ cursor: "pointer" }}
                            >
                              📷
                            </span>
                          </label>
                        )}
                      </div>

                      <div className="card-body text-center">
                        {cityIsEditing ? (
                          <>
                            <input
                              type="text"
                              value={displayData.name || ""}
                              className="form-control mb-2 text-center"
                              placeholder="Enter City Name"
                              onChange={(e) => handleNameChange(e.target.value)}
                              autoFocus
                            />

                            <select
                              className="form-select mb-2"
                              value={displayData.country || ""}
                              onChange={(e) =>
                                handleCountryChange(e.target.value)
                              }
                            >
                              <option value="">Select Country</option>
                              {COUNTRY_LIST.map((country, index) => (
                                <option key={index} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                          </>
                        ) : (
                          <>
                            <h5
                              className="card-title"
                              style={{ cursor: "pointer", color: "#007bff" }}
                              onClick={() => handleEditToggle(city)}
                            >
                              {displayData.name || "Unnamed City"}
                            </h5>
                            <p className="text-muted small mb-1">
                              {displayData.country || "No country selected"}
                            </p>
                          </>
                        )}

                        {/* Last Updated */}
                        {/* <p className="text-muted small mb-0">
                          Last Updated:{" "}
                          {formatDate(city.updatedAt || city.createdAt)}
                        </p> */}
                      </div>
                    </div>

                    {/* Save/Cancel Buttons - Below the Card */}
                    {cityIsEditing && (
                      <div className="mt-3" style={{ minHeight: "42px" }}>
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-success btn-sm px-4"
                            onClick={() => handleSaveCity(city)}
                            disabled={saveLoading}
                          >
                            {saveLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-1" />
                                Saving...
                              </>
                            ) : (
                              "Save"
                            )}
                          </button>
                          <button
                            className="btn btn-secondary btn-sm px-4"
                            onClick={handleCancel}
                            disabled={saveLoading}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Add City Card */}
            <div className="col-md-3 mb-4">
              <div
                className="card h-100 d-flex justify-content-center align-items-center"
                style={{
                  cursor: "pointer",
                  border: "2px dashed #dee2e6",
                  minHeight: "250px",
                  transition: "all 0.3s ease",
                  backgroundColor: "#f8f9fa",
                }}
                onClick={handleAddCityCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#007bff";
                  e.currentTarget.style.backgroundColor = "#e7f1ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#dee2e6";
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                }}
              >
                <div className="text-center">
                  <div
                    className="rounded-circle bg-primary bg-opacity-10 d-inline-flex p-3 mb-2"
                    style={{
                      width: "60px",
                      height: "60px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h1
                      className="text-primary mb-0"
                      style={{ fontSize: "2rem" }}
                    >
                      +
                    </h1>
                  </div>
                  <p className="mb-0 text-muted">Add New City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CityManager;
