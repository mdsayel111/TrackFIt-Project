/* eslint-disable react/prop-types */
const ActivityCard = ({ activity }) => {
  const { slotName, trainerEmail, slotTime, trainerName } = activity;
  return (
    <div className="text-center bg-secondary p-4 rounded-2xl space-y-4">
      <h1 className="text-2xl text-primary ">{slotName}</h1>
      <h2 className="text-lg text-left">Trainer: {trainerName}</h2>
      <h3 className="text-left">Trainer Email: {trainerEmail}</h3>
      <p className="text-left">Time: {slotTime}</p>
    </div>
  );
};

export default ActivityCard;
