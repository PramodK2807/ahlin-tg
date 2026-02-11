import React from "react";

const PaymentSuccess = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background:
          "linear-gradient(135deg, #e6f9f0 0%, #ffffff 50%, #e6fff6 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div
              className="card border-0 p-5 text-center"
              style={{
                borderRadius: "18px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              }}
            >
              {/* Success Icon */}
              <div className="mb-4">
                <div
                  style={{
                    height: "110px",
                    width: "110px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 25px rgba(34,197,94,0.35)",
                  }}
                >
                  <i
                    className="fa-solid fa-check text-white"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
              </div>

              <h2 className="fw-bold mb-2" style={{ color: "#15803d" }}>
                Payment Successful!
              </h2>

              <p className="text-secondary mb-4" style={{ fontSize: "15px" }}>
                Your transaction has been completed successfully. A confirmation
                receipt has been sent to your email.
              </p>

              <button
                className="btn fw-semibold py-2 continue"
                style={{
                  background: "#22c55e",
                  color: "#fff",
                  borderRadius: "10px",
                  transition: "0.3s",
                }}
              >
                <i className="fa-solid fa-arrow-right me-2"></i>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
