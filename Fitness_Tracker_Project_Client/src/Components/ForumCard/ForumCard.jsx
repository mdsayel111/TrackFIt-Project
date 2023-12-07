/* eslint-disable react/prop-types */

import { useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import "./ForumCard.css";
import {Link} from "react-router-dom"

const ForumCard = ({ forum }) => {
  const { _id, description, photoUrl, postedBy, title } = forum;

  const [react, setReact] = useState();

  const handleReact = (e, icon) => {
    if (react !== icon) {
      //   axiosPublic.put(`/react/${icon}`);
      setReact(icon);
    }
  };

  return (
    <Link to={""} className="card card-compact bg-secondary shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <span className="badge mx-auto">{postedBy}</span>
        <h2 className="card-title justify-center">{title}</h2>
        <p className="justify-center">{description}</p>
        <div className="card-actions justify-center items-center mt-5 space-x-2 !text-2xl">
          <SlLike
            onClick={(e) => handleReact(e, "like")}
            className={
              react === "like"
                ? "active-icon disabled cursor-pointer"
                : " cursor-pointer"
            }
          />
          <SlDislike
            onClick={(e) => handleReact(e, "dislike")}
            className={
              react === "dislike"
                ? "active-icon disabled cursor-pointer"
                : " cursor-pointer"
            }
          />
        </div>
      </div>
    </Link>
  );
};

export default ForumCard;
