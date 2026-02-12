import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Components/Loader";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const verifyPayment = async () => {
  //     const id = searchParams.get("id");

  //     if (!id) {
  //       navigate("/payment-failed");
  //       return;
  //     }

  //     try {
  //       const res = await axios.post(
  //         `${process.env.REACT_APP_API}/api/user/checkPaymentStatus`,
  //         {
  //           id,
  //         },
  //       );

  //       if (res?.data?.success) {
  //         navigate("/payment-success");
  //       } else {
  //         navigate("/payment-failed");
  //       }
  //     } catch {
  //       navigate("/payment-failed");
  //     }
  //   };

  //   verifyPayment();
  // }, []);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <h3>
        Please wait while we <br /> Verifying your payment...
        <Loader />
      </h3>
    </div>
  );
};

export default PaymentStatus;
