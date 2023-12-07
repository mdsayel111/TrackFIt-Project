import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const ForumDetails = () => {
    const {id} = useParams()
    const [forumDetails, setForumDetails] = useState()
    const AxiosSecue = useAxiosSecue()

    useEffect(() => {
        AxiosSecue.get(`/forum-details/${id}`)
        .then(data => setForumDetails(data.data))
    },[])

    console.log(forumDetails);

  return (
    <div className="card !flex-col lg:card-side bg-secondary shadow-xl my-8">
      <Helmet>
        <title>TracFit | Forum Details</title>
      </Helmet>
      <figure>
        <img
          src={forumDetails?.photoUrl}
          alt="Album"
          className="w-full rounded-2xl"
        />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="card-title uppercase">{forumDetails?.title}</h2>
        <p>{forumDetails?.description}</p>
      </div>
    </div>
  );
};

export default ForumDetails;
