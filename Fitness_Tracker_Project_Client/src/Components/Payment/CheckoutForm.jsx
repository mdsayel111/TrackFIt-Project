import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const AxiosSecure = useAxiosPublic();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    const payment = window.payment;
    const { path, ...paymentDoc } = payment;
    console.log(payment);
    if (!path) {
      toast.success("payment successful");

      navigate(-1);
    }

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      toast.error("Something went wrong");
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      if (path) {
        toast.success("payment successful");
        navigate(-1);
        paymentDoc.paymentId = paymentMethod.id;

        console.log(paymentDoc);
        await useAxiosPublic.post(path, paymentDoc);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="payment w-full lg:w-[50%] space-y-8 flex justify-center items-center flex-col mx-auto my-8"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#E8522F",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn bg-primary text-white mx-auto"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
