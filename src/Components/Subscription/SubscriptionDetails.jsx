import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const SubscriptionDetails = () => {
  const { state } = useLocation();
  console.log(state);
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
      let values = state?.data;
      setValue("plan", values?.plan);
      setValue("price", values?.price);
      setValue("validity", values?.validity);
      setValue("description", values?.description);
      setValue("features", values?.features.join(", "));
    }
  }, [state?.data]);

  const onSubmit = async(info) => {
    console.log(info)
  }

  return (
    <Layout activeSlide={"Subscription"}>
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
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Subscription Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.plan ? "is-invalid" : ""
                          }`}
                          {...register("plan", {
                            required: "* Plan name is required",
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
                        {errors.plan && (
                          <div className="invalid-feedback">
                            {errors.plan.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Plan Cost<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="number"
                          className={`form-control ${
                            errors.price ? "is-invalid" : ""
                          }`}
                          {...register("price", {
                            required: "* Cost is required",
                          })}
                        />
                        {errors.price && (
                          <div className="invalid-feedback">
                            {errors.price.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Valitidy<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="30 Days"
                        />
                      </div>
                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Description<sup className="mandatesign">*</sup>
                        </label>
                        <textarea
                          className={`form-control ${
                            errors.description ? "is-invalid" : ""
                          }`}
                          {...register("description", {
                            required: "* Description is required",
                            minLength: {
                              value: 10,
                              message: "Minimum 10 characters",
                            },
                            maxLength: {
                              value: 200,
                              message: "Maximum 200 characters",
                            },
                          })}
                          placeholder="Comedy is a genre of fiction that consists of discourses ..."
                        />
                        {errors.description && (
                          <div className="invalid-feedback">
                            {errors.description.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Features<sup className="mandatesign">*</sup>
                        </label>
                        <textarea
                          className={`form-control ${
                            errors.features ? "is-invalid" : ""
                          }`}
                          {...register("features", {
                            required: "* Features is required",
                          })}
                          placeholder="Videography"
                        />
                        {errors.features && (
                          <div className="invalid-feedback">
                            {errors.features.message}
                          </div>
                        )}
                      </div>
                    </div>
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

export default SubscriptionDetails;
