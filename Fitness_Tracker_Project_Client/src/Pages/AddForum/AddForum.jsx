import { FaFan } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import { uploadImage } from "../../Utils/Utils";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddForum = () => {
  const { user } = useAuth();
  const [role, loading] = useRole();
  const { register, handleSubmit, reset } = useForm();
  const [Loading, setLoading] = useState(false);
  const AxiosSecure = useAxiosSecue();

  const onSubmit = async (data) => {
    setLoading(true);
    const description = data.Description;
    const title = data.Title;
    const photo = data.Photo[0];

    // creat formdata for upload img in imgBB
    const formData = new FormData();
    formData.append("image", photo);

    try {
      const photoUrl = await uploadImage(formData);

      const forumDetails = {
        description,
        title,
        photoUrl,
        postedBy: role,
      };

      await AxiosSecure.post(`/add-forum/${user.email}`, forumDetails);
      setLoading(false);
      toast.success("forum add successful");
      reset();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>TracFit | Add Forum</title>
      </Helmet>
      {!loading && (
        <div>
          <SectionHeader>Add Forum</SectionHeader>
          <div>
            <div className="hero py-8 bg-[#2F2F2F] rounded-xl">
              <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="card shrink-0 lg:w-[60%] w-[90%] shadow-2x bg-secondary">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Title</span>
                      </label>
                      <input
                        {...register("Title")}
                        type="text"
                        className="file-input bg-black file-input-bordered w-full"
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
                        <span className="label-text text-white">Description</span>
                      </label>
                      <textarea
                        {...register("Description")}
                        className="textarea bg-black textarea-bordered"
                        placeholder="Description"
                      ></textarea>
                    </div>

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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddForum;
