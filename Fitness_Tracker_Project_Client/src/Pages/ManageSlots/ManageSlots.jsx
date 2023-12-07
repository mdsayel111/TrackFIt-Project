import { useEffect, useState } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import { SendEmail } from "../../Utils/Utils";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ManageSlots = () => {
  const [bookingSlots, setBookingSlots] = useState([]);
  const AxiosSecure = useAxiosSecue();
  const { user } = useAuth();
  const [fetch, setFetch] = useState();

  useEffect(() => {
    AxiosSecure.get(`/bokings/${user.email}`)
      .then((data) => setBookingSlots(data.data))
      .catch((err) => console.log(err));
  }, [fetch]);

  const handleAcceptOrReject = async (action, bookBy, bookingId, slotID) => {
    await AxiosSecure.put(`/update-slot/${user.email}`, {
      bookingId,
      slotID,
      bookBy: bookBy,
      status: action,
      accepDate: Date.now(),
    });

    if (action === "reject") {
      await SendEmail(bookBy);
    }
    toast.success(`successfuly ${action}`);
    setFetch(!fetch);
  };

  return (
    <div>
      <Helmet>
        <title>TracFit | Manage Slots</title>
      </Helmet>
      Manage Slots
      <div className="overflow-x-auto">
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
            {bookingSlots.map((bookingSlot, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{bookingSlot.bookigsId}</td>
                  <td>{bookingSlot.bookBy}</td>
                  <td>
                    <div className="space-x-2">
                      <div className="space-x-2">
                        <button
                          onClick={() =>
                            handleAcceptOrReject(
                              "accept",
                              bookingSlot.bookBy,
                              bookingSlot._id,
                              bookingSlot.bookigsId
                            )
                          }
                          className="btn min-h-0 h-fit p-2 bg-primary text-white"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            handleAcceptOrReject(
                              "reject",
                              bookingSlot.bookBy,
                              bookingSlot._id,
                              bookingSlot.bookigsId
                            )
                          }
                          className="btn min-h-0 h-fit p-2 bg-primary text-white"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSlots;
