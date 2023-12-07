import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ClassCard = ({ classDetails }) => {
  const { className, _id, photoUrl } = classDetails;

  return (
    <div className="card w-full bg-secondary shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center mb-4 uppercase">
          {className}
        </h2>
        <div className="card-actions justify-center">
          <Link to={`/class-details/${_id}`} className="btn bg-primary text-white">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
