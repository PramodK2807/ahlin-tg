import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import {
  createSubscription,
  editSubscription,
} from "../../adminHttpServices/dashHttpService";
const SubscriptionDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      features: [{ value: "" }],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  useEffect(() => {
    if (state) {
      let values = state?.data;

      setValue("plan", values?.subscriptionName);
      setValue("price", values?.amount);
      setValue("validity", values?.validation);
      setValue("acceptOffer", values?.acceptOffer || 0);
      setValue("sendingOffer", values?.sendingOffer || 0);

      if (values?.features?.length) {
        setValue(
          "features",
          values.features.map((f) => ({ value: f })),
        );
      }
    }
  }, [state?.data, setValue]);

  const onSubmit = async (info) => {
    try {
      setLoading(true);
      const payload = {
        subscriptionName: info.plan?.trim(),
        amount: Number(info.price),
        validity: info.validity,
        sendingOffer: +info.sendingOffer || 0,
        acceptOffer: +info.acceptOffer || 0,
        features: info.features?.map((f) => f.value?.trim()),
      };

      let res;

      if (state?.isEdit) {
        res = await editSubscription(state?.data?._id, payload);
      } else if (state?.isAdd) {
        res = await createSubscription(payload);
      }

      if (res?.data) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: state?.isEdit
            ? "Subscription updated successfully"
            : "Subscription created successfully",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate(-1);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
                          disabled={state?.isView}
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
                          disabled={state?.isView}
                          type="number"
                          className={`form-control ${
                            errors.price ? "is-invalid" : ""
                          }`}
                          {...register("price", {
                            required: "* Cost is required",
                            min: {
                              value: 1,
                              message: "Cost must be at least 1",
                            },
                            max: {
                              value: 100000000,
                              message: "Cost must be at most 100,000,000",
                            },
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
                          Validity (Monthly)<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled={state?.isView}
                          type="number"
                          className={`form-control ${
                            errors.validity ? "is-invalid" : ""
                          }`}
                          {...register("validity", {
                            required: "* validity is required",
                            min: {
                              value: 1,
                              message: "Validity must be at least 1 month",
                            },
                            max: {
                              value: 12,
                              message: "Validity must be at most 12 months",
                            },
                          })}
                        />
                      </div>
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Number of Offers Send
                          <sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled={state?.isView}
                          type="number"
                          className={`form-control ${
                            errors.sendingOffer ? "is-invalid" : ""
                          }`}
                          {...register("sendingOffer", {
                            required: "* Number of offers sent is required",
                            min: {
                              value: 1,
                              message:
                                "Number of offers sent must be at least 1",
                            },
                            max: {
                              value: 1000000,
                              message:
                                "Number of offers sent must be at most 1,000,000",
                            },
                          })}
                        />
                        {errors.sendingOffer && (
                          <div className="invalid-feedback">
                            {errors.sendingOffer.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Number of Offers Accepted
                          <sup className="mandatesign">*</sup>
                        </label>
                        <input
                          disabled={state?.isView}
                          type="number"
                          className={`form-control ${
                            errors.acceptOffer ? "is-invalid" : ""
                          }`}
                          {...register("acceptOffer", {
                            required: "* Number of offers accepted is required",
                            min: {
                              value: 1,
                              message:
                                "Number of offers accepted must be at least 1",
                            },
                            max: {
                              value: 1000000,
                              message:
                                "Number of offers accepted must be at most 1,000,000",
                            },
                          })}
                        />
                        {errors.acceptOffer && (
                          <div className="invalid-feedback">
                            {errors.acceptOffer.message}
                          </div>
                        )}
                      </div>

                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Features<sup className="mandatesign">*</sup>
                        </label>

                        {fields.map((item, index) => (
                          <div
                            key={item.id}
                            className="d-flex align-items-center mb-2 gap-2"
                          >
                            <input
                              disabled={state?.isView}
                              type="text"
                              className={`form-control ${
                                errors?.features?.[index]?.value
                                  ? "is-invalid"
                                  : ""
                              }`}
                              placeholder="Enter feature"
                              {...register(`features.${index}.value`, {
                                required: "* Feature is required",
                              })}
                            />

                            {!state?.isView && index === fields.length - 1 && (
                              <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => append({ value: "" })}
                              >
                                +
                              </button>
                            )}

                            {!state?.isView && (
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => remove(index)}
                                disabled={fields.length === 1}
                              >
                                -
                              </button>
                            )}
                          </div>
                        ))}

                        {errors.features &&
                          typeof errors.features === "object" && (
                            <div className="text-danger">
                              Please fill all features
                            </div>
                          )}
                      </div>
                    </div>
                  </div>{" "}
                  {!state?.isView && (
                    <div className="card-footer text-end">
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  )}
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
