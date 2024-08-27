import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import TripBooking from "../TripBooking/TripBooking";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ApproveCertificate,
  Commission,
  DeleteGalleryImage,
  GuideDetails,
  UpdateDetails,
  UserDetails,
} from "../../adminHttpServices/dashHttpService";
import Swal from "sweetalert2";
import moment from "moment";
import Info from "./Info";

const EditViewLocalGuest = () => {
  const [details, setDetails] = useState();
  const [bookings, setBookings] = useState([]);
  const [galleryIndexUrl, setGalleryIndexUrl] = useState({});
  const [imageUrl, setImageUrl] = useState();
  const [certificateUrl, setCertificateUrl] = useState();
  const [commission, setCommission] = useState(0);
  const [file, setFile] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [modalData, setModalData] = useState();

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
        console.log(values);
        setBookings(data?.results?.bookings);
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
        setBookings(data?.results?.bookings);
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
          title: "Please enter a valid Ahlain Fee percentage",
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
          title: "Ahlain Fee updated successfully",
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

  const handleDelete = async (link) => {
    try {
      let { data } = await DeleteGalleryImage(id, { url: link });
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Resource deleted successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
      }
      getUserDetails();
    } catch (error) {
      console.log(error);
    }
  };

  const handleApproveCertificate = async (e) => {
    e.preventDefault();
    try {
      let { data } = await ApproveCertificate(id);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Certificate approved successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        document.getElementById("closeCertificateModal").click();
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const onSubmit = async (info) => {
  //   console.log(info);
  //   try {
  //     let formData = new FormData();
  //     formData.append("fullName", info?.name || "NA");
  //     formData.append("mobileNumber", info?.number || "NA");
  //     formData.append("email", info?.email || "NA");
  //     formData.append("Dob", info?.dob || "2024-12-04");
  //     if (state?.type === "User") {
  //       formData.append("userImage", file);
  //     }
  //     if (state?.type === "Guide") {
  //       formData.append("guideImage", file);
  //     }
  //     let { data } = await UpdateDetails(state?.api, id, formData);
  //     if (data && !data?.error) {
  //       navigate(-1);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                          Email Id<sup className="mandatesign">*</sup>
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
                          <label className="form-label d-flex position-relative">
                            Ahlain Fee<sup className="mandatesign">*</sup>{" "}
                            <Info
                              title={
                                "Ahlain Fee percentage: Indicates the percentage of the trip cost that goes to Ahlain."
                              }
                            />
                          </label>
                          <input
                            type="number"
                            value={commission}
                            className="form-control"
                            onChange={(e) => setCommission(e.target.value)}
                          />
                        </div>
                      )}

                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Joined on<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          // value={commission}
                          value={moment(details?.createdAt).format("L")}
                          className="form-control"
                          // onChange={(e) => setCommission(e.target.value)}
                        />
                      </div>

                      {state?.type === "Guide" && (
                        <>
                          <div className="col-md-3 m-b30 position-relative">
                            <label className="form-label">
                              View Certificate & Approve
                              <sup className="mandatesign">*</sup>
                            </label>
                            <button
                              className="btn btn-primary d-flex justify-content-center w-100"
                              type="button"
                              onClick={() =>
                                setCertificateUrl(details?.certificate)
                              }
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2"
                            >
                              <span className="me-3 text-center">
                                View Certificate
                              </span>
                              {/* <Info title={"View certificate and approve"} /> */}
                            </button>
                          </div>
                        </>
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
                      {state?.type === "Guide" &&
                        details?.tripMemories?.length > 0 && (
                          <div className="row">
                            <label className="form-label">
                              Gallery<sup className="mandatesign"></sup>
                            </label>
                            {details?.tripMemories &&
                              details?.tripMemories?.length > 0 &&
                              details?.tripMemories?.map(
                                (item, index) =>
                                  item !== undefined && (
                                    <div
                                      key={index}
                                      className="col-6 col-sm-4 col-md-3 col-lg-2 p-1 position-relative"
                                    >
                                      {item !== undefined && (
                                        <>
                                          {/\.(mp4|webm|ogg)$/i.test(item) ? (
                                            <video
                                              className="w-100 rounded border border-light object-fit p-1 bg-light"
                                              height={220}
                                              data-bs-toggle="modal"
                                              data-bs-target="#exampleModal"
                                              onClick={() =>
                                                setModalData({
                                                  type: "video",
                                                  link: item,
                                                })
                                              }
                                            >
                                              <source
                                                src={item}
                                                type="video/mp4"
                                              />
                                              Your browser does not support the
                                              video tag.
                                            </video>
                                          ) : (
                                            <img
                                              src={item}
                                              alt=""
                                              className="w-100 rounded border border-light object-fit p-1 bg-light"
                                              height={220}
                                              onClick={() =>
                                                setModalData({
                                                  type: "image",
                                                  link: item,
                                                })
                                              }
                                              data-bs-toggle="modal"
                                              data-bs-target="#exampleModal"
                                            />
                                          )}
                                          <i
                                            className="fa-solid fa-trash-can delete_image"
                                            onClick={() => handleDelete(item)}
                                          ></i>
                                        </>
                                      )}
                                    </div>
                                  )
                              )}
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
                        className="btn btn-primary d-flex align-items-center"
                        onClick={getCommision}
                        type="button"
                      >
                        <span className="me-3">Update Ahlain Fee</span>{" "}
                        <Info title={"Only Ahlain Fee will be updated"} />
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
                  <div class="modal-body position-relative">
                    <div className="position-absolute top-0 end-0 gallery-close">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    {modalData?.type === "video" && (
                      <video
                        className="w-100 rounded border border-light object-fit p-1 bg-light"
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        controls
                        autoPlay
                      >
                        <source src={modalData?.link} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {modalData?.type === "image" && (
                      <img
                        src={modalData?.link}
                        className="w-100 object-fit-fill"
                        height={300}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      View Certificate
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      id="closeCertificateModal"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div style={{ width: "100%", height: "300px" }}>
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={certificateUrl}
                        alt="certificate"
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    {!details?.isLicence && (
                      <button
                        type="submit"
                        onClick={handleApproveCertificate}
                        className="btn btn-primary"
                      >
                        Approve
                      </button>
                    )}
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <TripBooking bookings={bookings} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditViewLocalGuest;
