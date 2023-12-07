import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaFan } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Newsletter = () => {
  const { user } = useAuth();
  const [Loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const AxiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    setLoading(true);
    const name = data.Name;
    const email = data.Email;

    try {
      const newsLatterDetails = {
        name,
        email
      }
      await AxiosPublic.post("/news-latter", newsLatterDetails)
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeader>Newsletter</SectionHeader>
      <div>
        <div className="hero py-8 bg-[#2F2F2F] rounded-xl">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-2x bg-secondary">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    {...register("Name")}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered bg-black text-white"
                    value={user?.displayName}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    {...register("Email")}
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-black text-white"
                    value={user?.email}
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-primary text-white">
                    {Loading ? (
                      <FaFan className="animate-spin text-2xl" />
                    ) : (
                      "Suscribe"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
