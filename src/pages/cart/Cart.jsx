import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./Cart.css";
import axios from "axios";
import { apiUrl } from "../../constans/url";
import { useHeaders } from "../../hooks/useHeaders";
import { Link } from "react-router-dom";
import Paypal from "./PayPal";

function Stripe({ totalPrice }) {
  const headers = useHeaders();
  const publicKey =
    "pk_test_51NQYTHFsgJhezYUnwMtPeMei7NvoB3nqeJny2RlPA4xX6sa2uWMjb7yIUyWc6gfItYrJy5t5jUhldKDgiV57auKw00HeN5pW7D";
  const PayNow = async (token) => {
    try {
      axios
        .post(
          apiUrl + "addMoneyViaStripe",
          { money: +totalPrice, stripeToken: token?.id },
          { headers: headers }
        )
        .then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    window?.paypal?.Buttons({})?.render("#paypal-button-container");
  },[])
  return (
    <div>
      <StripeCheckout
        stripeKey={publicKey}
        label="Pay now"
        name="Pay with Credit Card"
        billingAddress
        shippingAddress
        amount={totalPrice * 100}
        description={"Your Total : " + totalPrice}
        token={PayNow}
      >
        <button className="custom-stripe-button w-100">Pay with Stripe</button>
      </StripeCheckout>
      <div className="mt-2">
        <Link to={"/staticPayment"}>
          <button className="btn btn-primary w-100 mb-2 px-3 ">دفع يدوي او بنكي</button>
        </Link>
      </div>
      <div style={{ maxWidth: 220 }} className="w-100" >
      <Paypal totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Stripe;
