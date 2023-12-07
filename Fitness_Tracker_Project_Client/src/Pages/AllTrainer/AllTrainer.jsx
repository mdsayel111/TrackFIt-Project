import { useEffect, useState } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const AllTrainer = () => {
  const [allTrainers, setAllTraner] = useState([]);
  const AxiosSecure = useAxiosSecue();

  useEffect(() => {
    AxiosSecure.get("/trainers")
      .then((data) => setAllTraner(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handlePay = (trainers) => {
    window.payment = {}
    toast.success()
  }

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>TracFit | All Trainer</title>
      </Helmet>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allTrainers.map((trainers, index) => (
            <>
              <tr>
                <th>{index + 1}</th>
                <td>{trainers.displayName}</td>
                <td>{trainers.email}</td>
                <td>
                  <div className="space-x-2">
                    <Link
                      to={"/payment"}
                      onClick={() => handlePay(trainers)}
                      className="btn min-h-0 h-fit py-2 px-4 bg-primary text-white"
                    >
                      pay
                    </Link>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTrainer;
