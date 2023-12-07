import { useState } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { SendEmail } from "../../Utils/Utils";
import { Helmet } from "react-helmet-async";

const ManageMembers = () => {
  const [trainerSlots, setTrainerSlots] = useState([]);
  const AxiosSecure = useAxiosSecue();
  const { user } = useAuth();
  //   const [fetch, setFetch] = useState();

  const handleSendEmail = async (email) => {
    Swal.fire({
      title: "wrie the massage",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        console.log(email);
        await SendEmail(email, login)
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "email send successful"
        });
      }
    });
  };

  useEffect(() => {
    AxiosSecure.get(`/trainer-booked-slots/${user.email}`)
      .then((data) => setTrainerSlots(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Helmet>
        <title>TracFit | Manage Members</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {trainerSlots.map((bookingSlot, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{bookingSlot.bookBy}</td>
                  <td>
                    <div className="space-x-2">
                      <div className="space-x-2">
                        <button onClick={() => handleSendEmail(bookingSlot.bookBy)} className="btn min-h-0 h-fit p-2 bg-primary text-white">
                          send mail
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

export default ManageMembers;
