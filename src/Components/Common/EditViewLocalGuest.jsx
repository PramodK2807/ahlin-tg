import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import TripBooking from "../TripBooking/TripBooking";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Commission,
  GuideDetails,
  UpdateDetails,
  UserDetails,
} from "../../adminHttpServices/dashHttpService";
import Swal from "sweetalert2";
import moment from "moment";

const EditViewLocalGuest = () => {
  const [details, setDetails] = useState();
  const [galleryIndexUrl, setGalleryIndexUrl] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [commission, setCommission] = useState(0);
  const [file, setFile] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (state?.type === "Guide") {
      getGUideDetails();
      // getCommision();
    }
    if (state?.type === "User") {
      getUserDetails();
    }
  }, []);

  const getGUideDetails = async () => {
    try {
      let { data } = await GuideDetails(id);
      if (data && !data?.error) {
        setDetails(data?.results?.guide);
        let values = data?.results?.guide;
        setValue("name", values?.fullName || "NA");
        setValue("number", values?.mobileNumber || "NA");
        setValue("email", values?.email || "NA");
        setValue("dob", moment(values?.dob).format("YYYY-MM-DD") || "NA");
        setValue("image", values?.profile_image || "NA");
        setValue("country", values?.countryName || "NA");
        setCommission(values?.commission);
        setImageUrl(values?.profileImage[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getUserDetails = async () => {
    try {
      let { data } = await UserDetails(id);
      if (data && !data?.error) {
        console.log(data);
        setDetails(data?.results?.user);
        let values = data?.results?.user;
        setValue("name", `${values?.fullName}` || "NA");
        setValue("email", values?.email || "NA");
        setValue("number", values?.mobileNumber || "NA");
        setValue("dob", moment(values?.dob).format("YYYY-MM-DD") || "NA");
        setValue("image", values?.profile_image || "NA");
        setImageUrl(values?.profileImage[0]);
        setValue("country", values?.countryName || "NA");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCommision = async (e) => {
    e.preventDefault();
    try {
      if (commission > 100 || !commission || commission < 1) {
        Swal.fire({
          toast: true,
          icon: "warning",
          position: "top-end",
          title: "Please enter a valid commission percentage",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        return false;
      }
      let formData = { guideId: id, commission };
      let { data } = await Commission(formData);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Commission updated successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
      }
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (info) => {
    console.log(info);
    try {
      let formData = new FormData();
      formData.append("fullName", info?.name || "NA");
      formData.append("mobileNumber", info?.number || "NA");
      formData.append("email", info?.email || "NA");
      formData.append("Dob", info?.dob || "2024-12-04");
      if (state?.type === "User") {
        formData.append("userImage", file);
      }
      if (state?.type === "Guide") {
        formData.append("guideImage", file);
      }
      let { data } = await UpdateDetails(state?.api, id, formData);
      if (data && !data?.error) {
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout activeSlide={"Guest"}>
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
                  // onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled
                          type="text"
                          name="name"
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          {...register("name", {
                            required: "* Name is required",
                            minLength: {
                              value: 2,
                              message: "Minimum 2 characters",
                            },
                            pattern: {
                              value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                              message:
                                "Spaces at the start & numbers are not allowed",
                            },
                          })}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Contact Number<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled
                          type="number"
                          className={`form-control ${
                            errors.number ? "is-invalid" : ""
                          }`}
                          {...register("number", {
                            required: "* Number is required",
                            minLength: {
                              value: 9,
                              message: "Minimum 9 digits",
                            },
                          })}
                        />
                        {errors.number && (
                          <div className="invalid-feedback">
                            {errors.number.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          EMAIL ID<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          {...register("email", {
                            required: "* Email is required",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Date of birth<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled
                          type="date"
                          className={`form-control ${
                            errors.dob ? "is-invalid" : ""
                          }`}
                          {...register("dob", {
                            required: "* Dob is required",
                          })}
                        />
                        {errors.dob && (
                          <div className="invalid-feedback">
                            {errors.dob.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Country<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled
                          type="text"
                          className={`form-control ${
                            errors.country ? "is-invalid" : ""
                          }`}
                          {...register("country", {
                            required: "* Country is required",
                          })}
                        />
                        {errors.country && (
                          <div className="invalid-feedback">
                            {errors.country.message}
                          </div>
                        )}
                      </div>

                      {state?.type === "Guide" && (
                        <div className="col-md-3 m-b30">
                          <label className="form-label">
                            Commission<sup className="mandatesign">*</sup>
                          </label>
                          <input
                            type="number"
                            value={commission}
                            className="form-control"
                            onChange={(e) => setCommission(e.target.value)}
                          />
                        </div>
                      )}

                      {state?.type !== "Guide" && (
                        <div className="col-md-5 m-b30">
                          <label className="form-label" htmlFor="img">
                            Passport Image<sup className="mandatesign">*</sup>
                            <div className="mt-2">
                              <img
                                // src="/images/0_91v0rV9LQBJdPX7s.jpg"
                                src={
                                  imageUrl || "/images/0_91v0rV9LQBJdPX7s.jpg"
                                }
                                className="passport_photo_manage"
                                alt="i"
                              />
                              <input
                                type="file"
                                onChange={onFileChange}
                                className="d-none"
                                name="img"
                                id="img"
                              />
                            </div>
                          </label>
                        </div>
                      )}
                      {state?.type === "Guide" && (
                        <div className="row">
                          <label className="form-label">
                            Gallery<sup className="mandatesign"></sup>
                          </label>
                          {details?.tripMemories &&
                            details.tripMemories.length > 0 &&
                            details.tripMemories.map((item, index) => (
                              <div
                                key={index}
                                className="col-6 col-sm-4 col-md-3 col-lg-2 p-1"
                              >
                                <img
                                  src={item}
                                  alt=""
                                  className="w-100 rounded border border-light object-fit p-1 bg-light"
                                  height={220}
                                  onClick={() => setGalleryIndexUrl(item)}
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                />
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    {/* <div className="row border p-4 m-b30 rounded">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Password<sup className="mandatesign">*</sup>
                        </label>
                        <input
                      disabled
                          type="password"
                          className="form-control"
                          defaultValue={123456789}
                        />
                      </div>
                      <div className="col-md-5 m-b30">
                        <label className="form-label">
                          Confirm Password<sup className="mandatesign">*</sup>
                        </label>
                        <input
                      disabled
                          type="password"
                          className="form-control"
                          defaultValue={123456789}
                        />
                      </div>
                    </div> */}
                  </div>
                  {state?.type === "Guide" && (
                    <div className="card-footer justify-content-start">
                      <button
                        className="btn btn-primary"
                        onClick={getCommision}
                        type="button"
                      >
                        Update Commission
                      </button>
                    </div>
                  )}
                  {state?.isEdit && (
                    <div className="card-footer justify-content-start ">
                      <button className="btn btn-primary">Save</button>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Gallery Modal */}

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-center">
                <div class="modal-content">
                  <div class="modal-body">
                    <img
                      src={galleryIndexUrl}
                      className="w-100 object-fit-fill"
                      height={600}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <TripBooking />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditViewLocalGuest;
