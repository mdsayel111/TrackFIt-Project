/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Banner.css"

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage: "url(/image/Banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Elevate Your Fitness Game
            </h1>
            <p className="mb-5">
              Discover the power of TrackFit's fitness trackers, <br /> seamlessly
              blending style and functionality. Monitor activity, heart rate,
              and sleep with precision.<br/> Elevate your wellness journey today with
              TrackFit.
            </p>
            <Link to="/classes" className="btn bg-primary border-0 text-white">My Classes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
