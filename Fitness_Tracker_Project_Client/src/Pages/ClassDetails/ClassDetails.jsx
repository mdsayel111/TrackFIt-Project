import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const ClassDetails = () => {
    const {user} = useAuth()
    const {_id} = useParams()
    const [classDetails, setClassDetails] = useState()
    const AxiosSecue = useAxiosSecue()

    useEffect(() => {
        AxiosSecue.get(`/Classes/${_id}/${user.email}`)
        .then(data => setClassDetails(data.data))
    },[])

    console.log(classDetails);

  return (
    <div className="card !flex-col lg:card-side bg-secondary shadow-xl my-8">
      <Helmet>
        <title>TracFit | Class Details</title>
      </Helmet>
      <figure>
        <img
          src={classDetails?.photoUrl}
          alt="Album"
          className="w-full rounded-2xl"
        />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="card-title uppercase">{classDetails?.className}</h2>
        <p>{classDetails?.description}</p>
        <div className="card-actions">
          <Link to={"/trainer"} className="btn bg-primary text-white">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
