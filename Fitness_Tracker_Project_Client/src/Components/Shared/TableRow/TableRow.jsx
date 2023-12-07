import Swal from "sweetalert2";
import useAxiosSecue from "../../../Hooks/useAxiosSecue";
import { SendEmail } from "../../../Utils/Utils";
import { FaEye } from "react-icons/fa";

/* eslint-disable react/prop-types */
const TableRow = ({ appliedTrainer, index, setModalTrainer }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{appliedTrainer.displayName}</td>
      <td>{appliedTrainer.email}</td>
      <td>
        <div className="space-x-2">
          <FaEye
            onClick={() => {
              document.getElementById("my_modal_5").showModal();
              setModalTrainer(appliedTrainer);
            }}
            className="cursor-pointer"
          />
          {/* <button
            onClick={() => handleAcceptOrReject("accept")}
            className="btn min-h-0 h-fit p-2 bg-primary text-white"
          >
            Accept
          </button>
          <button
            onClick={() => handleAcceptOrReject("reject")}
            className="btn min-h-0 h-fit p-2 bg-primary text-white"
          >
            Reject
          </button> */}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
