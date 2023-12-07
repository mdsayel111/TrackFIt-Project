import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const { socialLogin } = useAuth();
  const navigate = useNavigate();

  const handleSocialLogin = async () => {
    try {
      await socialLogin();
      navigate("/");
      // location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="px-8 pb-8">
      <div
        onClick={handleSocialLogin}
        className="flex justify-evenly border-primary border-2 p-2 rounded-md cursor-pointer"
      >
        <span className="text-text text-base font-bold">
          SignUp With Google
        </span>{" "}
        <FcGoogle className="text-2xl cursor-pointer"></FcGoogle>
      </div>
    </div>
  );
};

export default GoogleButton;
