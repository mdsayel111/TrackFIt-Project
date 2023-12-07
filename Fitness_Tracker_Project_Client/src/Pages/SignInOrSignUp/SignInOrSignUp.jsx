import { useState } from "react";
import SignIn from "../../Components/SignInOrSignUp/SignIn";
import SignUp from "../../Components/SignInOrSignUp/SignUp";
import { Helmet } from "react-helmet-async";

const SignInOrSignUp = () => {
  const [signInOrSignUp, setSignInOrSignUp] = useState("signIn");
  return (
    <div className="my-8">
      <Helmet>
        <title>TracFit | SignUp Or SignIn</title>
      </Helmet>
      {signInOrSignUp === "signIn" ? (
        <SignIn setSignInOrSignUp={setSignInOrSignUp} />
      ) : (
        <SignUp setSignInOrSignUp={setSignInOrSignUp} />
      )}
    </div>
  );
};

export default SignInOrSignUp;
