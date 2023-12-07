import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../Components/Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <Helmet>
        <title>TracFit | Payments</title>
      </Helmet>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
