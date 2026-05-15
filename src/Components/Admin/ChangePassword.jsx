import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AdminChangePassword } from "../../adminHttpServices/adminLoginHttpServie";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);

  // password visibility states
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const newPassword = watch("newPassword");

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const payload = {
        password: formData.oldPassword,
        newPassword: formData.newPassword,
      };

      const { data } = await AdminChangePassword(payload);

      console.log(data);

      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="card profile-card card-bx m-b30">
              <div className="card-header">
                <h6 className="title">Change Password</h6>
              </div>

              <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <div className="row">
                    {/* Old Password */}
                    <div className="col-sm-4 m-b30">
                      <label className="form-label">Old Password</label>

                      <div className="position-relative">
                        <input
                          type={showOldPassword ? "text" : "password"}
                          className="form-control pe-5"
                          {...register("oldPassword", {
                            required: "Old password is required",
                          })}
                        />

                        <button
                          type="button"
                          className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                          <i
                            className={`fa ${
                              showOldPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          ></i>
                        </button>
                      </div>

                      {errors.oldPassword && (
                        <p className="text-danger mt-1">
                          {errors.oldPassword.message}
                        </p>
                      )}
                    </div>

                    {/* New Password */}
                    <div className="col-sm-4 m-b30">
                      <label className="form-label">New Password</label>

                      <div className="position-relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          className="form-control pe-5"
                          {...register("newPassword", {
                            required: "New password is required",
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                            },
                          })}
                        />

                        <button
                          type="button"
                          className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          <i
                            className={`fa ${
                              showNewPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          ></i>
                        </button>
                      </div>

                      {errors.newPassword && (
                        <p className="text-danger mt-1">
                          {errors.newPassword.message}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="col-sm-4 m-b30">
                      <label className="form-label">Confirm New Password</label>

                      <div className="position-relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className="form-control pe-5"
                          {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) =>
                              value === newPassword || "Passwords do not match",
                          })}
                        />

                        <button
                          type="button"
                          className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          <i
                            className={`fa ${
                              showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          ></i>
                        </button>
                      </div>

                      {errors.confirmPassword && (
                        <p className="text-danger mt-1">
                          {errors.confirmPassword.message}
                        </p>
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
                    {loading ? "Updating..." : "UPDATE"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
