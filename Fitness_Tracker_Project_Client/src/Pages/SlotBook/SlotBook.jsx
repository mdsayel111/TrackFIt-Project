import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const SlotBook = () => {
  const { user } = useAuth();
  const { id, trainerEmail } = useParams();

  const handleJoin = async (money) => {
    const postDoc = {
      email: user.email,
      bookigsId: id,
      trainerEmail,
      money,
      path: "/bokkings",
      paymentBy: "user",
    };
    window.payment = postDoc;
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <Helmet>
        <title>TracFit | Slot Book</title>
      </Helmet>
      <div className="bg-[#2F2F2F] p-10 rounded-xl">
        <div className="flex flex-col justify-center items-center text-center"></div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
          <div className="bg-primary rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-secondary shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div className="mt-3 font-semibold text-lg">
                Silver Membership
              </div>
              <div className="my-4">
                <div>
                  <h6 className="text-primary font-bold">Facelity : </h6>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="CaringAboutHealth"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">Basic Tracking</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="HolisticApproach"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">Community Forum Access</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="PsychologicalResilience"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">
                        Limited Access to Workout Plans
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <span className="font-bold text-base">299,-</span>
                <span className="font-light text-sm">/month</span>
              </div>

              <Link
                to="/payment"
                className="text-center bg-primary px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4"
                onClick={() => handleJoin(299)}
              >
                Join Now
              </Link>
            </div>
          </div>

          <div className="bg-primary rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-secondary shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div className="mt-3 font-semibold text-lg">Gold Membership</div>
              <div className="my-4">
                <div>
                  <h6 className="text-primary font-bold">Facelity : </h6>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="CaringAboutHealth"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">Advanced Tracking</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="HolisticApproach"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">
                        Personalized Workout Plans
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="PsychologicalResilience"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">
                        Discounts on Partner Services
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <span className="font-bold text-base">950,-</span>
                <span className="font-light text-sm">/month</span>
              </div>

              <Link
                onClick={() => handleJoin(950)}
                to="/payment"
                className="text-center bg-primary px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4"
              >
                Join Now
              </Link>
            </div>
          </div>

          <div className="bg-primary rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-secondary shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <div className="mt-3 font-semibold text-lg">
                Daimond Membership
              </div>
              <div className="my-4">
                <div>
                  <h6 className="text-primary font-bold">Facelity : </h6>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="CaringAboutHealth"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">
                        Premium Tracking Features
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="HolisticApproach"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">
                        Personal Trainer Consultation
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      type="checkbox"
                      name="PsychologicalResilience"
                      className="checkbox bg-black checkbox-xs"
                    />
                    <label className="label">
                      <span className="label-text text-white">VIP Events</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <span className="font-bold text-base">1500,-</span>
                <span className="font-light text-sm">/month</span>
              </div>

              <Link
                onClick={() => handleJoin(1500)}
                to="/payment"
                className="text-center bg-primary px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotBook;
