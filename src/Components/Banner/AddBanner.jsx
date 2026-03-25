import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  AddBannerApi,
  UpdateBannerApi,
} from "../../adminHttpServices/dashHttpService";
import Swal from "sweetalert2";

const AddBanner = () => {
  const { state } = useLocation();
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { key } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (state) {
      setValue("name", state?.name);
      if (state?.image) {
        setImagePreview(state.image);
      }
    }
  }, [state?._id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setValue("image", null);
  };

  const onSubmit = async (info) => {
    try {
      const formData = new FormData();
      formData.append("name", info.name);
      formData.append("image", info.image[0]);
      setLoading(true);
      let action =
        key === "Add"
          ? AddBannerApi(formData)
          : UpdateBannerApi(formData, state?._id);
      let { data } = await action;
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout activeSlide={"Banner"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">{state?.title}</h6>
                </div>
                <form
                  className="profile-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="card-body">
                    <div className="row">
                      {/* Banner Name */}
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Banner Name<sup className="mandatesign">*</sup>
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
                              value: 15,
                              message: "Maximum 15 characters",
                            },
                          })}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>

                      {/* Banner Image */}
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Banner Image<sup className="mandatesign">*</sup>
                        </label>

                        {/* Preview */}
                        {imagePreview ? (
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "160px",
                              borderRadius: "8px",
                              overflow: "hidden",
                              border: "1px solid #dee2e6",
                              marginBottom: "8px",
                            }}
                          >
                            <img
                              src={imagePreview}
                              alt="Banner Preview"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                            {/* Remove button */}
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
                          // Upload area shown only when no preview
                          <label
                            htmlFor="bannerImageInput"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              height: "160px",
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
                          id="bannerImageInput"
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

                        {/* Change image button when preview is shown */}
                        {imagePreview && (
                          <label
                            htmlFor="bannerImageInput"
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

                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading
                        ? "Submitting..."
                        : key === "Add"
                          ? "Add Banner"
                          : "Update Banner"}
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

export default AddBanner;
