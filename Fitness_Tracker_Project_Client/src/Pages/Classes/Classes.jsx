import { useEffect, useState } from "react";
import style from "./Classes.module.css";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import ClassCard from "../../Components/Classes/ClassCard";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const AxiosSecure = useAxiosSecue();
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  const days = ["Sat", "Sun", "Mon", "Tues", "Wed", "Thu", "Fri"];

  const [dailyWorkOuts, setDailyWorkOuts] = useState([]);

  useEffect(() => {
    AxiosSecure.get(`/daily-Work-out/${user.email}`).then((data) => {
      setDailyWorkOuts(data.data.exercises);
    });

    AxiosSecure.get(`/classes/${user.email}`).then((data) =>
      setClasses(data.data)
    );
  }, []);

  return (
    <div className={style.workout_routine}>
      <Helmet>
        <title>TracFit | Classes</title>
      </Helmet>
      <SectionHeader>Weekly Schedule</SectionHeader>
      <div className="overflow-x-auto">
        <table className="table border-2">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-lg w-[100px]">Day</th>
              <th colSpan={4} className="text-lg text-center">
                Exersizes
              </th>
            </tr>
          </thead>
          <tbody>
            {days.map((day, index) => {
              return (
                <tr key={index} className="text-center">
                  <th>{day}</th>
                  {dailyWorkOuts?.map((dailyWorkOut, index) => (
                    <td key={index}>{dailyWorkOut}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <SectionHeader>All Classes</SectionHeader>
        <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {classes?.map((classDetails) => (
            <ClassCard key={classDetails._id} classDetails={classDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
