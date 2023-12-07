import { useState } from "react";
import ForumCard from "../../Components/ForumCard/ForumCard";
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import { Helmet } from "react-helmet-async";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import "./Forums.css";

const Forums = () => {
  const { user } = useAuth();
  const [forums, setForums] = useState([]);
  const Axiossecure = useAxiosSecue();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalForms, setTotalForms] = useState(0);
  const [totalPage, setTotalPage] = useState([]);

  useEffect(() => {
    Axiossecure.get(`/forums/${user.email}`).then((data) => {
      // console.log(data);
      setTotalForms(data.data.total);
      setForums(data.data.forums);
      setTotalPage([...Array(data?.data?.total / 6).keys()].map((i) => i + 1));
    });
  }, [currentPage]);

  console.log(totalPage);

  return (
    <div className="my-8">
      <div className="my-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Helmet>
          <title>TracFit | Forums</title>
        </Helmet>
        {forums.map((forum) => (
          <ForumCard key={forum._id} forum={forum} />
        ))}
      </div>
      <div className="w-fit mx-auto">
        <div className="join">
          {totalPage.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page - 1)}
              className={
                currentPage === page - 1
                  ? "join-item btn active-page"
                  : "join-item btn"
              }
            >
              1
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;
