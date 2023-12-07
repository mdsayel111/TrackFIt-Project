import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import { FaFan } from "react-icons/fa";
import { useState } from "react";
import "./BecomeTrainer.css";
import { UpdateUserMongoDB, uploadImage } from "../../Utils/Utils";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import TimeField from "react-simple-timefield";

const BecomeTrainer = () => {
  const { user, UpdateUserFirebase } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false)

  // time input state
  const [time, setTime] = useState("12:00");

  // time input onchange function
  function onTimeChange(event, value) {
    const newTime = value.replace(/-/g, ":");
    const time = newTime.substr(0, 5);
    setTime(time);
  }

  const onSubmit = async (data) => {
    setLoading(true)

    const skill= []

    const name = data.Name;
    const age = data.Age;
    const availableTimeInAWeek = parseInt(data.AvailableTimeInAWeek);
    const availableTimeInADay = parseInt(data.AvailableTimeInADay);
    const trainerRole = data.TeacerRole;
    const experience = data.Experience;
    const photo = data.Photo[0];

    // add skill in the skill array
    data.HolisticApproach && skill.push("Holistic Approach");
    data.CaringAboutHealth && skill.push("Caring About Health");
    data.PsychologicalResilience && skill.push("Psychological Resilience");

    // time input value
    const timeInputValue = time;

    try {
      const formData = new FormData();
      formData.append("image", photo);
      const photoUrl = await uploadImage(formData);

      const updatedUser = {
        ...user,
        age,
        availableTimeInADay,
        availableTimeInAWeek,
        experience,
        trainerRole,
        skill,

        // add time value in update user obj
        freeTime: timeInputValue,
      };

      updatedUser.displayName = name;
      updatedUser.photoURL = photoUrl;

      //Update user on firebase
      await UpdateUserFirebase(name, photoUrl, true);
      
      //Update user on MongoDB
      await UpdateUserMongoDB(updatedUser);

      setLoading(false)
      toast.success("request send succesful")
      // navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>TracFit | Become Trainer</title>
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
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    {...register("Name")}
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="input input-bordered bg-black text-white"
                    value={user?.displayName}
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    {...register("Email")}
                    name="Email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered bg-black text-white"
                    value={user?.email}
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Age</span>
                  </label>
                  <input
                    {...register("Age")}
                    type="number"
                    placeholder="Age"
                    className="input input-bordered bg-black text-white"
                    required
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
                <div>
                  <h6 className="text-primary font-bold">skill : </h6>
                  <div className="flex items-center">
                    <input
                      {...register("CaringAboutHealth")}
                      type="checkbox"
                      name="CaringAboutHealth"
                      className="checkbox bg-black checkbox-xs mr-2 bg-white"
                    />
                    <label className="label">
                      <span className="label-text text-white">Caring About Health</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      {...register("HolisticApproach")}
                      type="checkbox"
                      name="HolisticApproach"
                      className="checkbox bg-black checkbox-xs mr-2 bg-white"
                    />
                    <label className="label">
                      <span className="label-text text-white">Holistic Approach</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      {...register("PsychologicalResilience")}
                      type="checkbox"
                      name="PsychologicalResilience"
                      className="checkbox bg-black checkbox-xs mr-2 bg-white"
                    />
                    <label className="label">
                      <span className="label-text text-white">
                        Psychological Resilience
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">
                        Available Time in a week
                      </span>
                    </label>
                    <input
                      {...register("AvailableTimeInAWeek")}
                      type="number"
                      placeholder="Available Time in a week"
                      className="input input-bordered bg-black text-white"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">
                        Available Time in a Day
                      </span>
                    </label>
                    <input
                      {...register("AvailableTimeInADay")}
                      type="number"
                      placeholder="Available time in a day"
                      className="input input-bordered bg-black text-white"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">What do you want to teach</span>
                  </label>
                  <input
                    {...register("TeacerRole")}
                    type="text"
                    placeholder="TeacerRole"
                    className="input input-bordered bg-black text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Experience</span>
                  </label>
                  <input
                    {...register("Experience")}
                    type="number"
                    placeholder="Experience"
                    className="input input-bordered bg-black text-white"
                    required
                  />
                </div>

                {/* time input feild */}
                <div className="lg:col-span-2">
                  <div className="mx-auto w-fit">
                    <h6 className="text-primary w-fit mx-auto font-bold flex flex-col lg:flex-row mb-4">
                      when Free In Day : <p className="lg:ml-2 mx-auto">(24 hr)</p>
                    </h6>
                    <section className="time w-[100px] mx-auto">
                      <TimeField
                        value={time}
                        onChange={onTimeChange}
                        style={{
                          border: "2px solid #666",
                          fontSize: "2rem",
                          width: "100%",
                          padding: "5px 8px",
                          color: "#FFF",
                          borderRadius: 3,
                          background: "black"
                        }}
                      />
                    </section>
                  </div>
                </div>

                <div className="form-control mt-6 lg:col-span-2">
                  <button className="btn bg-primary text-white">
                    {Loading ? (
                      <FaFan className="animate-spin text-2xl" />
                    ) : (
                      "Become A Trainer"
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

export default BecomeTrainer;
