import Logo from "../../Shared/Logo/Logo";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <div className="my-12">
      <SectionHeader>About Us</SectionHeader>
      <div className="flex flex-col lg:flex-row space-y-8">
        <div className="flex justify-center items-center flex-col space-y-4 border-b-2 lg:border-b-0 lg:border-r-2 w-full lg:w-1/4 pb-8 lg:pb-0">
          <img src="/image/Logo.png" alt="" />
          <h1 className="text-5xl font-bold text-center">ACHIEVE WELLBEING</h1>
          <h3 className="text-3xl text-center font-semibold text-primary">
            CORE STRENGTH
          </h3>
        </div>

        <div className="w-full lg:w-2/4 border-b-2 lg:border-b-0 lg:border-r-2 pb-8 lg:pb-0">
          <div className="flex justify-center flex-col space-y-4 lg:items-start items-center w-fit mx-auto">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <Logo />
              <p className="mt-4">
                Welcome to TrackFit! We are here to support and guide you.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-xl text-primary font-semibold">
                CALL US ANYTIME
              </h4>
              <h1 className="text-2xl font-extrabold">+123 45677345</h1>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-xl text-primary font-semibold">
                CALL US VISIT OUR LOCATION
              </h4>
              <h1 className="text-xl">50/1, North Adabar, Dhaka</h1>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="text-lg font-bold text-primary">OUR SERVICES</h1>
          <ul className="mt-4 space-y-2">
            <li>PERSONAL TRAINING</li>
            <li>GROUP WORKOUT</li>
            <li>MUSCLE BUILDING</li>
            <li>VIRTUAL GYM TRAINING</li>
            <li>WEIGHTLOSS TRAINING</li>
            <li>BODY STRETCHING</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
