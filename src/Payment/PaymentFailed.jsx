import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background:
          "linear-gradient(135deg, #ffe6e6 0%, #ffffff 50%, #fff5f5 100%)",
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
              {/* Icon */}
              <div className="mb-4">
                <div
                  style={{
                    height: "110px",
                    width: "110px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    background: "#ef4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 25px rgba(239,68,68,0.35)",
                  }}
                >
                  <i
                    className="fa-solid fa-xmark text-white"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
              </div>

              {/* Heading */}
              <h2 className="fw-bold mb-2" style={{ color: "#b91c1c" }}>
                Payment Failed
              </h2>

              {/* Subtitle */}
              <p className="text-secondary mb-4" style={{ fontSize: "15px" }}>
                Unfortunately, we couldn’t process your payment. Please verify
                your card details or try another payment method.
              </p>

              {/* Error Box */}
              <div
                className="rounded p-3 mb-4 text-start"
                style={{
                  background: "#fff1f2",
                  border: "1px solid #fecaca",
                }}
              >
                <div className="d-flex align-items-center text-danger mb-2">
                  <i className="fa-solid fa-circle-exclamation me-2"></i>
                  <span className="fw-semibold small">Possible Reason</span>
                </div>

                <p className="text-danger small mb-0">
                  Your bank declined the transaction. This may happen due to
                  insufficient funds, incorrect CVV, expired card, or security
                  restrictions from your bank.
                </p>
              </div>

              <div className="d-grid gap-2">
                <button
                  className="btn fw-semibold py-2 try_again"
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-rotate-right me-2"></i>
                  Try Again
                </button>
              </div>

              <p
                className="mt-4 mb-0"
                style={{ fontSize: "13px", color: "#6b7280" }}
              >
                <i className="fa-solid fa-lock me-1"></i>
                Your payment is secure and encrypted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
