import { FaFan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import { uploadImage } from "../../Utils/Utils";
import { AxiosSecue } from "../../Hooks/useAxiosSecue";
import { Helmet } from "react-helmet-async";

const AddClasses = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const className = data.ClassName;
    const description = data.Description;
    const photo = data.Photo[0];

    console.log(data);

    // make form data for imBB req
    const formData = new FormData();
    formData.append("image", photo);

    try {
      const photoUrl = await uploadImage(formData);

      const classDetails = {
        className,
        description,
        photoUrl,
        trainerEmail: user.email,
      };

      console.log(className);

      //   add class in DB
        await AxiosSecue.post(`add-class/${user.email}`, classDetails)

      setLoading(false);
      toast.success("Class added succesfuly");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>TracFit | Add Class</title>
      </Helmet>
      <SectionHeader>Become A Trainer</SectionHeader>
      <div>
        <div className="hero py-8 bg-[#2F2F2F] rounded-xl">
          <div className="hero-content flex-col w-full lg:flex-row-reverse">
            <div className="card shrink-0 shadow-2x lg:w-[60%] w-[90%] bg-secondary">
              <form
                className="card-body grid gap-8 items-center grid-cols-1 lg:grid-cols-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Class Name</span>
                  </label>
                  <input
                  required
                    {...register("ClassName")}
                    type="text"
                    name="ClassName"
                    placeholder="Class Name"
                    className="input input-bordered bg-black text-white"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Photo</span>
                  </label>
                  <input
                    required
                    {...register("Photo")}
                    type="file"
                    className="file-input bg-black file-input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control lg:col-span-2">
                  <label className="label">
                    <span className="label-text text-white">Description</span>
                  </label>
                  <textarea
                  required
                    {...register("Description")}
                    className="textarea textarea-bordered bg-black"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="form-control mt-6 lg:col-span-2">
                  <button className="btn bg-primary text-white">
                    {Loading ? (
                      <FaFan className="animate-spin text-2xl" />
                    ) : (
                      "Add Class"
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

export default AddClasses;
