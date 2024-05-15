import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import TripBooking from "../TripBooking/TripBooking";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  GuideDetails,
  UpdateDetails,
  UserDetails,
} from "../../adminHttpServices/dashHttpService";

const EditViewLocalGuest = () => {
  const [details, setDetails] = useState();
  const [imageUrl, setImageUrl] = useState();
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
    }
    if (state?.type === "User") {
      getUserDetails();
    }
  }, []);

  const getGUideDetails = async () => {
    try {
      let { data } = await GuideDetails(id);
      if (data && !data?.error) {
        console.log(data);
        setDetails(data?.results?.guide);
        let values = data?.results?.guide;
        setValue("name", values?.fullName || "NA");
        setValue("number", values?.mobileNumber || "NA");
        setValue("email", values?.email || "NA");
        setValue("dob", values?.dob || "2024-12-04");
        setValue("image", values?.profile_image || "NA");
        setImageUrl(values?.profile_image);
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
        setValue(
          "name",
          `${values?.firstName + " " + values?.lastName}` || "NA"
        );
        setValue("number", values?.mobileNumber || "NA");
        setValue("email", values?.email || "NA");
        setValue("dob", values?.dob || "2024-12-04");
        setValue("image", values?.profile_image || "NA");
        setImageUrl(values?.profile_image);
      }
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
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3 m-b30">
                        <label className="form-label">
                          Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled={!state?.isEdit}
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
                          disabled={!state?.isEdit}
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
                          disabled={!state?.isEdit}
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
                          disabled={!state?.isEdit}
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
                      <div className="col-md-5 m-b30">
                        <label className="form-label" htmlFor="img">
                          Passport Image<sup className="mandatesign">*</sup>
                          <div className="mt-2">
                            <img
                              // src="/images/0_91v0rV9LQBJdPX7s.jpg"
                              src={imageUrl || "/images/0_91v0rV9LQBJdPX7s.jpg"}
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
                    </div>

                    {/* <div className="row border p-4 m-b30 rounded">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Password<sup className="mandatesign">*</sup>
                        </label>
                        <input
                        disabled={!state?.isEdit}
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
                        disabled={!state?.isEdit}
                          type="password"
                          className="form-control"
                          defaultValue={123456789}
                        />
                      </div>
                    </div> */}
                  </div>
                  {state?.isEdit && (
                    <div className="card-footer">
                      <button className="btn btn-primary">Save</button>
                    </div>
                  )}
                </form>
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
