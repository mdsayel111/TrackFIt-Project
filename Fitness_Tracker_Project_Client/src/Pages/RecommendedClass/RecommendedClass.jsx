import { useState } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";
import ClassCard from "../../Components/Classes/ClassCard";
import { Helmet } from "react-helmet-async";

const RecommendedClass = () => {
  const AxiosSecure = useAxiosSecue();
  const { user } = useAuth();

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    AxiosSecure.get(`/classes/${user.email}`).then((data) =>
      setClasses(data.data)
    );
  }, []);

  console.log(classes);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Helmet>
        <title>TracFit | Recommended Class</title>
      </Helmet>
      {classes.map((Class) => (
        <ClassCard key={Class.id} classDetails={Class} />
      ))}
    </div>
  );
};

export default RecommendedClass;
