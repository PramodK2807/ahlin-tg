import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { GetPackageDetails } from "../../adminHttpServices/dashHttpService";
import { useParams } from "react-router-dom";
import moment from "moment";

const PackageDetails = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPackageDetails();
  }, []);

  const getPackageDetails = async () => {
    try {
      let { data } = await GetPackageDetails(id);
      if (data && !data?.error) {
        console.log(data);
        setDetails(data?.results?.details);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout activeSlide={"Package"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Package Management Details</h6>
                </div>
                <form className="profile-form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Package Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={details?.packageName || "NA"}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Local Name<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={details?.localName || "NA"}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Package Price<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={details?.price || "NA"}
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Booked By<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="100 Guests"
                        />
                      </div>
                      <div className="col-md-4 m-b30">
                        <label className="form-label">
                          Added On<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={
                            moment(details?.createdAt).format("Do MMMM YYYY") ||
                            "NA"
                          }
                        />
                      </div>
                      <div className="col-md-12 m-b30">
                        <label className="form-label">
                          Discription (Optional)
                        </label>
                        <textarea
                          name
                          id
                          cols={30}
                          rows={4}
                          className="form-control"
                          placeholder="A supplier is a person or a company who provides goods or services to another person or entity. For every business transaction, there are two parties."
                          value={details?.description}
                        />
                      </div>
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Package Include<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={details?.includes}
                        />
                      </div>
                      <div className="col-md-6 m-b30">
                        <label className="form-label">
                          Package Excludes<sup className="mandatesign">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={details?.excludes}
                        />
                      </div>
                      <div className="col-md-9 m-b30">
                        <label className="form-label">
                          Package Activities<sup className="mandatesign">*</sup>
                        </label>
                        <div className="d-flex justify-content-start">
                          {(details?.Activities &&
                            details?.Activities?.map((act) => (
                              <div className=" p-2">
                                <h5 className="text-center bg-info-subtle p-1">
                                  {act}
                                </h5>
                                {/* <img
                              src="images/wild-life.jpeg"
                              alt
                              className="activity_image"
                            /> */}
                              </div>
                            ))) ||
                            "NA"}
                        </div>
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

export default PackageDetails;
