import React, { useEffect, useState } from "react";
import {
  useParams,
  Link,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const { checkoutId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptTag = document.querySelector(
        `script[src*="checkoutId=${checkoutId}"]`,
      );
      if (scriptTag) {
        document.body.removeChild(scriptTag);
      }
    };
  }, [checkoutId]);

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
                        
        <div className="spinner-border text-primary" role="status">
                              
          <span className="visually-hidden">Loading...</span>
                          
        </div>
                    
      </div>
    );
  }

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
                  
      <form
        action={`/payment-status`}
        className="paymentWidgets"
        data-brands="VISA MASTER AMEX MADA"
      ></form>
              
    </div>
  );
};

export default Payment;
