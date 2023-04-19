import { useEffect, useState } from "react";

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
function Payment() {
  // useEffect(() => {
  //   console.log(process.env.NEXT_PUBLIC_LOADSTRIPE);
  // }, [process.env.NEXT_PUBLIC_LOADSTRIPE]);
  const order = useSelector((state) => state.order);

  //pk_test_vStE3GidVUxIDjpnUibqIldG
  //sk_test_ir7IQMM9SWknSYPHcOJKMPeI
  const [clientSecret, setClientSecret] = useState(order.clientSecret);
  console.log(clientSecret,'clientSecret')
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_LOADSTRIPE);
  console.log(stripePromise,'stripePromise' )

  const options = {
    clientSecret: clientSecret,
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "3rem", color: "#0A2540" }}>
        Tesla Stripe Payment{" "}
      </h2>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
