import Lottie from "lottie-react";
import Loading from "../assets/Animation/Loading.json"

const useLoading = () => {
    return (
        <Lottie animationData={Loading} loop={true} />
    );
};

export default useLoading;