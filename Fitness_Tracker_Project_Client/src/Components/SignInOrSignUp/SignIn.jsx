import useAuth from "../../Hooks/useAuth";
import GoogleButton from "../../Components/Shared/GoogleButton/GoogleButton";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import "./SigninOrSignUp.css";
import { useForm } from "react-hook-form";
import { FaFan } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setSignInOrSignUp }) => {
  const { SignIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    const email = data.Email;
    const password = data.Password;
    try {
      await SignIn(email, password);
      navigate("/");
      // location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <SectionHeader>SignIn</SectionHeader>
      <div>
        <div className="hero py-8 bg-[#2F2F2F] rounded-xl">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className="card shrink-0 lg:w-[30%] w-[90%] shadow-2x bg-secondary">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    {...register("Email")}
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-black text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    {...register("Password")}
                    type="password"
                    placeholder="password"
                    className="input input-bordered bg-black text-white"
                    required
                  />
                </div>
                <label className="label">
                  <p className="label-text text-white-alt ">
                    New in this site?{" "}
                    <span
                      className="text-primary cursor-pointer font-bold"
                      onClick={() => setSignInOrSignUp("signUp")}
                    >
                      SignUp
                    </span>
                  </p>
                </label>
                <div className="form-control mt-6">
                  <button className="btn bg-primary text-white">
                    {Loading ? (
                      <FaFan className="animate-spin text-2xl" />
                    ) : (
                      "SignIn"
                    )}
                  </button>
                </div>
              </form>
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
