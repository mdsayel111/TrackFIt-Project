import { FaFan } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import { uploadImage } from "../../Utils/Utils";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import { updatePassword } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, UpdateUserFirebase } = useAuth();
  const [Loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const AxiosSecure = useAxiosSecue();

  const onSubmit = async (data) => {
    setLoading(true);
    const name = data.Name;
    const photo = data.Photo[0];
    const password = data.Password;

    try {
      const formData = new FormData();
      formData.append("image", photo);
      const photoUrl = await uploadImage(formData);
      await UpdateUserFirebase(name, photoUrl);
      await AxiosSecure.put(`/update-users/${user.email}`, {
        name,
        photoURL: photoUrl,
      });
      await updatePassword(user, password);
      setLoading(false);

      toast.success("Profile updated  successful")

      location.reload();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <Helmet>
        <title>TracFit | Profile</title>
      </Helmet>
      <SectionHeader>Update Profile</SectionHeader>
      <div>
        <div className="hero py-8 bg-[#2F2F2F] rounded-xl">
          <div className="hero-content flex-col w-full lg:flex-row-reverse">
            <div className="card shrink-0 shadow-2x lg:w-[50%] w-[90%] bg-secondary">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    {...register("Name")}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered bg-black text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Photo</span>
                  </label>
                  <input
                    {...register("Photo")}
                    type="file"
                    className="file-input bg-black file-input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
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
                    <span className="text-primary cursor-pointer font-bold">
                      SignIn
                    </span>
                  </p>
                </label>
                <div className="form-control mt-6">
                  <button className="btn bg-primary text-white">
                    {Loading ? (
                      <FaFan className="animate-spin text-2xl" />
                    ) : (
                      "Sign Up"
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

export default Profile;
