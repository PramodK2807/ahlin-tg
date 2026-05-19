import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Layout from "../Layout/Layout";
import { AddCity, UpdateCity } from "../../adminHttpServices/dashHttpService";

const AddEditCity = () => {
  const { state } = useLocation();
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { key } = useParams();
  const isEdit = key === "Edit";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  console.log(state?.data);
  useEffect(() => {
    if (state?.data && isEdit) {
      setValue("name", state?.data?.cityName);
      setValue("name_ar", state?.data?.cityName_ar);
      setValue("description", state?.data?.description);
      setValue("description_ar", state?.data?.description_ar);
      if (state?.data?.image) {
        setImagePreview(state?.data?.image);
      }
    }
  }, [state?._id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setValue("image", null);
  };

  const onSubmit = async (info) => {
    try {
      const formData = new FormData();
      formData.append("cityName", info.name);
      formData.append("cityName_ar", info.name_ar);
      formData.append("description", info.description);
      formData.append("description_ar", info.description_ar);
      if (info.image?.[0]) {
        formData.append("image", info.image[0]);
      }

      setLoading(true);
      const action = isEdit
        ? UpdateCity(formData, state?.data?._id)
        : AddCity(formData);
      const { data } = await action;

      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: data.message,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
      }
      navigate(-1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const pageTitle = isEdit ? "Edit City" : "Add City";
  const submitLabel = loading
    ? "Submitting..."
    : isEdit
      ? "Update City"
      : "Add City";

  return (
    <Layout activeSlide={"Cities"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">{state?.title || pageTitle}</h6>
                </div>

                <form
                  className="profile-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="card-body">
                    <div className="row">
                      {/* ── City Name (EN) ── */}
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          City Name (En)<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          {...register("name", {
                            required: "* Name is required",
                            minLength: {
                              value: 2,
                              message: "Minimum 2 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "Maximum 50 characters",
                            },
                          })}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>

                      {/* ── City Name (AR) ── */}
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          City Name (Ar)<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          className={`form-control ${errors.name_ar ? "is-invalid" : ""}`}
                          {...register("name_ar", {
                            required: "* Arabic Name is required",
                            minLength: {
                              value: 2,
                              message: "Minimum 2 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "Maximum 50 characters",
                            },
                          })}
                        />
                        {errors.name_ar && (
                          <div className="invalid-feedback">
                            {errors.name_ar.message}
                          </div>
                        )}
                      </div>

                      {/* ── Description (EN) ── */}
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Description (En)<sup className="mandatesign">*</sup>
                        </label>
                        <textarea
                          rows={3}
                          className={`form-control ${errors.description ? "is-invalid" : ""}`}
                          {...register("description", {
                            required: "* Description is required",
                            minLength: {
                              value: 5,
                              message: "Minimum 5 characters",
                            },
                            maxLength: {
                              value: 300,
                              message: "Maximum 300 characters",
                            },
                          })}
                        />
                        {errors.description && (
                          <div className="invalid-feedback">
                            {errors.description.message}
                          </div>
                        )}
                      </div>

                      {/* ── Description (AR) ── */}
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Description (Ar)<sup className="mandatesign">*</sup>
                        </label>
                        <textarea
                          dir="rtl"
                          rows={3}
                          className={`form-control ${errors.description_ar ? "is-invalid" : ""}`}
                          {...register("description_ar", {
                            required: "* Arabic Description is required",
                            minLength: {
                              value: 5,
                              message: "Minimum 5 characters",
                            },
                            maxLength: {
                              value: 300,
                              message: "Maximum 300 characters",
                            },
                          })}
                        />
                        {errors.description_ar && (
                          <div className="invalid-feedback">
                            {errors.description_ar.message}
                          </div>
                        )}
                      </div>

                      {/* ── City Image ── */}
                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          City Image<sup className="mandatesign">*</sup>
                        </label>

                        {imagePreview ? (
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              maxWidth: "420px",
                              height: "200px",
                              borderRadius: "8px",
                              overflow: "hidden",
                              border: "1px solid #dee2e6",
                              marginBottom: "8px",
                            }}
                          >
                            <img
                              src={imagePreview}
                              alt="City Preview"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              style={{
                                position: "absolute",
                                top: "6px",
                                right: "6px",
                                background: "rgba(0,0,0,0.55)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "50%",
                                width: "26px",
                                height: "26px",
                                cursor: "pointer",
                                fontSize: "14px",
                                lineHeight: "1",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              title="Remove image"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor="cityImageInput"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              maxWidth: "420px",
                              height: "200px",
                              border: `2px dashed ${errors.image ? "#dc3545" : "#ced4da"}`,
                              borderRadius: "8px",
                              cursor: "pointer",
                              background: "#f8f9fa",
                              marginBottom: "8px",
                              transition: "border-color 0.2s",
                            }}
                          >
                            <span style={{ fontSize: "28px" }}>🖼️</span>
                            <span
                              style={{
                                fontSize: "13px",
                                color: "#6c757d",
                                marginTop: "6px",
                              }}
                            >
                              Click to upload image
                            </span>
                            <span
                              style={{ fontSize: "11px", color: "#adb5bd" }}
                            >
                              PNG, JPG, WEBP supported
                            </span>
                          </label>
                        )}

                        {/* Hidden file input — always registered */}
                        <input
                          id="cityImageInput"
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          {...register("image", {
                            required: !imagePreview
                              ? "* Image is required"
                              : false,
                            onChange: handleImageChange,
                          })}
                        />

                        {imagePreview && (
                          <label
                            htmlFor="cityImageInput"
                            style={{
                              display: "inline-block",
                              fontSize: "12px",
                              color: "#0d6efd",
                              cursor: "pointer",
                              marginTop: "4px",
                            }}
                          >
                            Change image
                          </label>
                        )}

                        {errors.image && (
                          <div className="invalid-feedback d-block">
                            {errors.image.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="card-footer d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {submitLabel}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary ms-2"
                      onClick={() => navigate(-1)}
                      disabled={loading}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddEditCity;
