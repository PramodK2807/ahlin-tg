import moment from "moment";
import React from "react";
import LoadingSubmitBtn from "../Common/LoadingSubmitBtn";

const ViewRatingDetails = ({ ratingsDetails, loading, handleItemDelete }) => {
  return (
    <>
      <form action="">
        <div className="col-12 g-2">
          <div className="review-card">
            <div className="user-info d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={
                    ratingsDetails?.user?.profile ||
                    "/assets/images/misd logo.png"
                  }
                />
                <div className="user-details">
                  <span className="user-name text-capitalize">
                    {ratingsDetails?.user?.firstName}
                  </span>
                  <span className="review-date">
                    {moment(ratingsDetails?.createdAt).format("MMM D, YYYY")}
                  </span>
                </div>
              </div>
              <div className="rating text-end">
                {/* <div>
                  {[...Array(ratingsDetails?.rating)].map((_, index) => (
                    <i key={index} className="fas fa-star" />
                  ))}
                </div> */}

                {/* {ratingsDetails?.receivedAmount && (
                  <span className="status-close ">
                    <span className="rounded-pill">
                      + {ratingsDetails?.receivedAmount}
                    </span>
                  </span>
                )} */}
              </div>
            </div>

            <div className="review-text mt-1">
              {ratingsDetails?.description}
            </div>
            {ratingsDetails?.image && (
              <div>
                <a href={ratingsDetails?.image} target="_blank">
                  <img
                    className="border rounded p-1"
                    height={100}
                    width={100}
                    src={ratingsDetails?.image}
                    alt=""
                  />
                </a>
              </div>
            )}
          </div>
        </div>

        <div class="modal-footer border-top">
          <button
            disabled={loading}
            type="button"
            onClick={() => handleItemDelete(ratingsDetails?._id)}
            class="btn btn-primary my_btn"
          >
            {(loading && (
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )) ||
              "Delete Rating"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ViewRatingDetails;
