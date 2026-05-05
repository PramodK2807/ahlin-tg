import React, { useEffect, useState, useCallback, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout/Layout";
import {
  AddCity,
  CityStatusCity,
  DeleteCity,
  GetCities,
  UpdateCity,
} from "./adminHttpServices/dashHttpService";
import Swal from "sweetalert2";

const CityManager = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [editingCityId, setEditingCityId] = useState(null);
  const [editDraft, setEditDraft] = useState({
    name: "",
    country: "",
    imageFile: null,
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const objectUrlRef = useRef(null);

  // Fetch cities
  const handleGetCities = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await GetCities();
      if (data && !data.error) {
        const formattedCities = (data.results?.popularCities || []).map(
          (city) => ({
            id: city._id,
            _id: city._id,
            name: city.cityName || city.name,
            country: city.countryName || city.country,
            image: city.image,
            status: city.status,
            createdAt: city.createdAt,
            updatedAt: city.updatedAt,
          }),
        );
        setCities(formattedCities);
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

  // Cleanup object URL on unmount
  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, []);

  const clearEditingState = () => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setEditingCityId(null);
    setEditDraft({ name: "", country: "", imageFile: null });
    setImagePreviewUrl(null);
  };

  const removeTempCities = () => {
    setCities((prev) =>
      prev.filter((city) => !city.id.toString().startsWith("temp-")),
    );
  };

  const handleEditToggle = (city) => {
    if (editingCityId === city.id) return;
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setEditingCityId(city.id);
    setEditDraft({
      name: city.name || "",
      country: city.country || "",
      imageFile: null,
    });
    setImagePreviewUrl(null);
  };

  const handleAddCityCard = () => {
    if (editingCityId) {
      handleCancel();
    }
    const tempId = `temp-${Date.now()}`;
    const newCity = {
      id: tempId,
      name: "",
      country: "",
      image: "/images/placeholder.png",
      isNew: true,
      status: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setCities((prev) => [newCity, ...prev]);
    setEditingCityId(tempId);
    setEditDraft({
      name: "",
      country: "",
      imageFile: null,
    });
    setImagePreviewUrl(null);
  };

  const handleNameChange = (value) => {
    setEditDraft((prev) => ({ ...prev, name: value }));
  };

  const handleCountryChange = (value) => {
    setEditDraft((prev) => ({ ...prev, country: value }));
  };

  const handleImageChange = (file) => {
    if (!file) return;
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }
    const previewUrl = URL.createObjectURL(file);
    objectUrlRef.current = previewUrl;
    setImagePreviewUrl(previewUrl);
    setEditDraft((prev) => ({ ...prev, imageFile: file }));
  };

  const handleSaveCity = async (city) => {
    const trimmedName = editDraft.name.trim();
    if (!trimmedName) {
      Swal.fire("Error", "City name is required.", "error");
      return;
    }

    let finalCountry = editDraft.country;
    if (city.isNew && !finalCountry) {
      finalCountry = "India";
    }
    if (!finalCountry) {
      Swal.fire("Error", "Country is required.", "error");
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("cityName", trimmedName);
    formDataObj.append("countryName", finalCountry);
    if (editDraft.imageFile) {
      formDataObj.append("image", editDraft.imageFile);
    }

    setSaveLoading(true);
    try {
      if (city.isNew) {
        await AddCity(formDataObj);
      } else {
        await UpdateCity(formDataObj, city.id);
      }
      clearEditingState();
      removeTempCities();
      await handleGetCities();
      Swal.fire(
        "Success",
        `City ${city.isNew ? "added" : "updated"} successfully.`,
        "success",
      );
    } catch (error) {
      console.error("Error saving city:", error);
      Swal.fire(
        "Error",
        error?.response?.data?.message ||
          "Failed to save city. Please try again.",
        "error",
      );
    } finally {
      setSaveLoading(false);
    }
  };

  const handleCancel = () => {
    clearEditingState();
    removeTempCities();
    handleGetCities();
  };

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

  const getDisplayData = (city) => {
    if (editingCityId === city.id) {
      return {
        name: editDraft.name,
        country: editDraft.country,
        image: imagePreviewUrl || city.image,
      };
    }
    return {
      name: city.name,
      country: city.country,
      image: city.image,
    };
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
              const displayData = getDisplayData(city);
              const cityIsEditing = isEditing(city.id);
              const isExistingCity = !!city._id;

              return (
                <div className="col-md-3 mb-4" key={city.id}>
                  <div className="d-flex flex-column h-100">
                    <div className="card shadow-sm">
                      <div
                        onClick={() => !cityIsEditing && handleEditToggle(city)}
                        className="position-relative"
                        style={{
                          cursor: !cityIsEditing ? "pointer" : "default",
                        }}
                      >
                        {isExistingCity && !cityIsEditing && (
                          <>
                            <div className="city-controls">
                              <div className="form-check form-switch m-0">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id={`status-${city.id}`}
                                  checked={city.status === true}
                                  onChange={(e) =>
                                    handleToggleStatus(city.id, e)
                                  }
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
                                  handleDelete(city.id);
                                }}
                              ></i>
                            </div>
                          </>
                        )}
                        <img
                          src={displayData.image || "/images/placeholder.png"}
                          alt={displayData.name || "City"}
                          className="card-img-top"
                          style={{ height: "180px", objectFit: "cover" }}
                        />
                        {cityIsEditing && (
                          <label className="position-absolute bottom-0 end-0 m-2">
                            <input
                              type="file"
                              accept="image/*"
                              className="d-none"
                              onChange={(e) =>
                                handleImageChange(e.target.files?.[0] || null)
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
                              value={displayData.name}
                              className="form-control mb-2 text-center"
                              placeholder="Enter City Name"
                              onChange={(e) => handleNameChange(e.target.value)}
                              autoFocus
                            />
                            {/* Country select intentionally omitted (as in original UI) */}
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
                          </>
                        )}
                      </div>
                    </div>

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

            {!editingCityId && (
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
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CityManager;
