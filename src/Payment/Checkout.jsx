import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [response, setResponse] = useState({});
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount");
  const userId = searchParams.get("userId");
  const paymentMethod = searchParams.get("paymentMethod");

  const checkout = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/payment/createCheckout`,
        {
          amount: amount,
          userId: userId,
          paymentMethod: paymentMethod,
        },
      );
      navigate(`/payment/${res.data.results.checkout.id}`);
      setResponse(res.data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkout();
  }, []);
  return <div className="text-center">Processing.....</div>;
};

export default Checkout;
