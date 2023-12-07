/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";

const TrainerCard = ({ trainer }) => {
  const { photoURL, displayName, experience, availableTimeInADay, email } =
    trainer;
  const [availableSlot, setAvailableSlot] = useState([]);
  const AxiosPublic = useAxiosPublic();

  useEffect(() => {
    AxiosPublic.get(`/trainer-slots/${email}`).then((data) =>
      setAvailableSlot(data.data.length)
    );
  }, []);

  return (
    <div className="card w-full shadow-xl bg-secondary">
      <figure className="px-10 pt-10">
        <img
          src={photoURL}
          alt="Shoes"
          className="rounded-xl w-[300px] aspect-square object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{displayName}</h2>
        <div className="flex justify-around w-full mb-4">
          <p>experience : {experience}</p>
          <Link to="">
            <p>Available slots: {availableSlot}</p>
          </Link>
        </div>
        <div>
          <div className="flex justify-center items-center space-x-4 text-2xl mb-4">
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
        <Link to={`/trainer-slots/${email}`}>
          <div className="card-actions">
            <button className="btn bg-primary text-white">Book a slot</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;
