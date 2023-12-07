import { useEffect, useState } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import TableRow from "../../Components/Shared/TableRow/TableRow";
import { SendEmail } from "../../Utils/Utils";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const Users = () => {
  const [appliedTrainers, setAppliedTraner] = useState([]);
  const AxiosSecure = useAxiosSecue();
  const [fetch, setFetch] = useState();
  const [modalTrainer, setModalTrainer] = useState();
  const { user } = useAuth();

  useEffect(() => {
    AxiosSecure.get(`/applied-trainers/${user.email}`)
      .then((data) => setAppliedTraner(data.data))
      .catch((err) => console.log(err));
  }, [fetch]);

  const handleAcceptOrReject = async (action) => {
    await AxiosSecure.put(`/update-role/${user.email}`, {
      email: modalTrainer.email,
      role: action === "accept" ? "trainer" : "user",
      status: action,
      freeTime: modalTrainer.freeTime,
      trainerName: modalTrainer.displayName,
      accepDate: Date.now(),
    });

    if (action === "reject") {
      await SendEmail(modalTrainer.email);
    }

    toast.success(`sucsessfuly ${action}`);

    setFetch(!fetch);
  };

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>TracFit | Applied Trainer</title>
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
          {appliedTrainers.map((appliedTrainer, index) => (
            <TableRow
              key={index}
              appliedTrainer={appliedTrainer}
              index={index + 1}
              fetch={fetch}
              setFetch={setFetch}
              setModalTrainer={setModalTrainer}
            />
          ))}
        </tbody>
      </table>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img
            src={modalTrainer?.photoURL}
            alt=""
            className="w-[200px] mx-auto mb-6 rounded-2xl"
          />
          <h3 className="font-bold text-lg text-center mb-4">
            {modalTrainer?.displayName}
          </h3>
          <div className="flex justify-around mb-4">
            <p className="">Email: {modalTrainer?.email}</p>
            <p className="">Trainer Role: {modalTrainer?.trainerRole}</p>
          </div>
          <div className="flex justify-around">
            <p>Availabe time: {modalTrainer?.availableTimeInADay}</p>
            <p>Experience: {modalTrainer?.experience}</p>
          </div>
          <div className="modal-action justify-center">
            <form method="dialog" className="space-x-4">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => handleAcceptOrReject("accept")}
                className="btn bg-green-800"
              >
                accept
              </button>
              <button
                onClick={() => handleAcceptOrReject("reject")}
                className="btn bg-red-600"
              >
                reject
              </button>
              <button className="btn bg-secondary">close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Users;
