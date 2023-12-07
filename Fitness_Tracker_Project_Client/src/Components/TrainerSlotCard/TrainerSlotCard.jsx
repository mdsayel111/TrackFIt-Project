/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TrainerSlotCard = ({ slotDetails }) => {
  console.log(slotDetails);
  return (
    <div className="bg-secondary p-8 rounded-2xl space-y-4 flex justify-center items-center flex-col">
      <h1 className="text-2xl mb-4">{slotDetails.slotName}</h1>
      <p>Slot Time : {slotDetails.slotTime}</p>
      <Link
        to={`/slot-book/${slotDetails._id}/${slotDetails.trainerEmail}`}
        className="btn bg-primary text-white"
      >
        Book Slot
      </Link>
    </div>
  );
};

export default TrainerSlotCard;
