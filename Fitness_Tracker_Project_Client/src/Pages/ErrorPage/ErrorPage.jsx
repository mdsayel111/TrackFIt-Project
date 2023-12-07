import Lottie from "lottie-react";
import ErrorAnimation from "../../assets/Animation/404.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";

const ErrorPage = () => {
  return (
    <div>
        <Helmet>
        <title>TracFit | Not Found</title>
      </Helmet>
      <SectionHeader>{window?.error?.massage || ""}</SectionHeader>
      <div className="w-[50%] mx-auto mt-[15vh]">
        <Lottie animationData={ErrorAnimation} loop={true} />
      </div>
      <div className="w-fit mx-auto mt-8">
        <Link to="/" className="btn bg-primary text-white mx-auto">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
