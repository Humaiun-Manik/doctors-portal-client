import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { patientName, patientEmail, price } = appointment;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    setCardError(error?.message || "");
    setSuccess("");
    // confirm card payment
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: patientName,
          email: patientEmail,
        },
      },
    });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is completed.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement className="py-5" />
        <button
          className="btn text-2xl font-semibold capitalize mt-8 w-full"
          type="submit"
          disabled={!stripe || !elements || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-base text-red-500">{cardError}</p>}
      {success && (
        <div className="text-base font-semibold text-green-500">
          <p>{success}</p>
          <p>
            Your transaction Id: <span className=" text-orange-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;