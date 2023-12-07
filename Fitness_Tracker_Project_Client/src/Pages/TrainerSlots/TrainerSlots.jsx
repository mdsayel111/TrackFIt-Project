import { useEffect, useState } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import { useParams } from "react-router-dom";
import TrainerSlotCard from "../../Components/TrainerSlotCard/TrainerSlotCard";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import { Helmet } from "react-helmet-async";

const TrainerSlots = () => {
  const AxiosSecure = useAxiosSecue();
  const { email } = useParams();
  const [trainerSlots, setTrainerSlots] = useState([]);

  useEffect(() => {
    AxiosSecure.get(`/trainer-slots/${email}`).then((data) =>
      setTrainerSlots(data.data)
    );
  }, []);

  return (
    <div>
      <Helmet>
        <title>TracFit | Trainer Slots</title>
      </Helmet>
      {trainerSlots.length > 0 ? (
        <div>
            <SectionHeader>Available slots</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
            {trainerSlots.map((slot) => (
              <TrainerSlotCard key={slot._id} slotDetails={slot} />
            ))}
          </div>
        </div>
      ) : (
        <SectionHeader>No slot is available</SectionHeader>
      )}
    </div>
  );
};

export default TrainerSlots;
