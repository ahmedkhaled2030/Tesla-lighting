import { useEffect, useState } from "react";

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  //pk_test_vStE3GidVUxIDjpnUibqIldG
  //sk_test_ir7IQMM9SWknSYPHcOJKMPeI
  const [clientSecret, setClientSecret] = useState(
    "pi_3Mpr1qLFOSq7EjQb0m4IhsZU_secret_Rz35j7YPRHQtla7ltgpEjrBQZ"
  );
  const stripePromise = loadStripe("pk_test_vStE3GidVUxIDjpnUibqIldG");

  const options = {
    clientSecret: clientSecret,
  };

  return (
    <>
      <h2 style={{textAlign:"center" ,marginTop:"3rem" ,color:"#0A2540"}}>Tesla Stripe Payment </h2>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
