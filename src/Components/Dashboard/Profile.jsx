import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import secureLocalStorage from "react-secure-storage";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { EditProfile } from "../../adminHttpServices/dashHttpService";
import Swal from "sweetalert2";

const Profile = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState([]);
  const navigate = useNavigate();
  const userData = secureLocalStorage.getItem("userAccessData");
  console.log(userData);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setValue("fullName", userData?.userData?.fullName || "");
    // setValue("lname", userData?.userData?.lastName || "");
    setValue("email", userData?.userData?.email || "");
    setValue("mobileNumber", userData?.userData?.mobileNumber || "");
    setImageUrl("image", userData?.userData?.image);
  }, []);

  const onFileSelection = (e) => {
    let img = e.target.files[0];
    setFile(img);
    setImageUrl(URL.createObjectURL(img));
  };

  const onSubmit = async (info) => {
    try {
      const formData = new FormData();
      formData.append("fullName", info.fullName);
      // formData.append("lastName", info.lname);
      formData.append("email", info.email);
      formData.append("mobileNumber", info.mobileNumber);
      formData.append("image", file);

      let { data } = await EditProfile(formData);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Profile updated successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        document.getElementById("reset").click();
        setFile([]);
        setImageUrl("");
        navigate("/Dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-profile">
                <div className="admin-user">
                  <div className="img-wrraper">
                    <label htmlFor="image">
                      <div className>
                        <img
                          src={imageUrl || "images/1.jpg"}
                          className="rounded-circle"
                          alt="profile"
                        />
                      </div>
                      <i className="fa-solid fa-pencil profile_edit" />
                      <input
                        type="file"
                        onChange={onFileSelection}
                        className="d-none"
                        name="image"
                        id="image"
                      />
                    </label>
                  </div>

                  <div className="user-details">
                    <div className="title">
                      <Link>
                        <h4>{userData?.userData?.fullName}</h4>
                      </Link>
                      <h6>{userData?.userData?.email}</h6>
                    </div>
                    <ul className="user-social-links">
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-skype" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-rss" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Edit Profile</h6>
                </div>
                <form
                  className="profile-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">Full Name </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.fullName ? "is-invalid" : ""
                          }`}
                          {...register("fullName", {
                            required: "This field is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                        />
                        {errors?.fullName && (
                          <p className="errorText mt-1">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>
                      {/* <div className="col-md-6 m-b30">
                        <label className="form-label">Last Name </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.lname ? "is-invalid" : ""
                          }`}
                          {...register("lname", {
                            required: "This field is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                        />
                        {errors?.lname && (
                          <p className="errorText mt-1">
                            {errors.lname.message}
                          </p>
                        )}
                      </div> */}
                      <div className="col-md-4 m-b30">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors?.email && (
                          <p className="errorText mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">Mobile Number</label>
                        <input
                          type="number"
                          className={`form-control ${
                            errors.mobileNumber ? "is-invalid" : ""
                          }`}
                          {...register("mobileNumber", {
                            required: "Number is required",
                            maxLength: {
                              value: 9,
                              message: "9 characters only",
                            },
                            minLength: {
                              value: 9,
                              message: "9 characters only",
                            },
                          })}
                        />
                        {errors?.mobileNumber && (
                          <p className="errorText mt-1">
                            {errors.mobileNumber.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      //   disabled={!isValid || !file?.length}
                      className="btn btn-primary"
                    >
                      UPDATE
                    </button>
                    <button className="d-none" id="reset" type="reset">
                      resert
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

export default Profile;
