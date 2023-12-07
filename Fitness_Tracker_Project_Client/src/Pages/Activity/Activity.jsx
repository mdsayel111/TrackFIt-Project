import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import ActivityCard from "../../Components/Activity/ActivityCard";

const Activity = () => {
  const [activitys, setActivitys] = useState([]);
  const AxiosSecure = useAxiosSecue();
  const { user } = useAuth();

  useEffect(() => {
    AxiosSecure.get(`/activity/${user.email}`).then((data) =>
      setActivitys(data.data)
    );
  }, []);

  return (
    <div>
      <Helmet>
        <title>TracFit | Activity</title>
      </Helmet>
      <div>
        <SectionHeader>Today's Activity</SectionHeader>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {activitys?.map((activity) => (
            <ActivityCard key={activity._id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
