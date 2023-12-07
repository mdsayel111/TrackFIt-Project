import { Link } from "react-router-dom";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import { useEffect, useState } from "react";
import TrainerCard from "../../Components/Trainer/TrainerCard";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";

const Trainer = () => {
  const axiosSecure = useAxiosSecue();

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/trainers").then((data) => setTrainers(data.data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>TracFit | Trainer</title>
      </Helmet>
      <SectionHeader>{trainers.length > 0 ? "All Trainers" : "No Trainers Right Now"}</SectionHeader>
      <div className="my-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {trainers.map((trainer, index) => (
          <TrainerCard key={index} trainer={trainer} />
        ))}
      </div>
      <div className="w-fit mx-auto">
        <Link to="/beacome-trainer">
          <button className="btn bg-primary my-8 text-white">Become Trainer</button>
        </Link>
      </div>
    </div>
  );
};

export default Trainer;
