import { useState } from "react";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";
import { useEffect } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import PieChar from "../../Components/Statistic/PieChar";
import { Helmet } from "react-helmet-async";

const Statistic = () => {
  const [stat, setStat] = useState({});
  const AxiosSecure = useAxiosSecue();
  const { user } = useAuth();

  useEffect(() => {
    AxiosSecure.get(`/statistic/${user.email}`).then((data) =>
      setStat(data.data)
    );
  }, []);

  console.log(stat);

  return (
    <div>
      <Helmet>
        <title>TracFit | Statistic</title>
      </Helmet>
      <div>
        <div>
          <SectionHeader>Total Balance: {stat.totalAmount}</SectionHeader>
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
                {stat?.lastPayments?.map((lastPayment, index) => (
                  <>
                    <tr>
                      <th>{index + 1}</th>
                      <td>{lastPayment?.bookBy}</td>
                      <td>
                        <div className="space-x-2">
                          <div className="space-x-2">{lastPayment?.money}</div>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="h-fit w-full">
        <PieChar
          paidSuscribers={stat?.paidSuscribers}
          newsLetterSuscribers={stat?.newsLetterSuscribers}
        />
      </div>
    </div>
  );
};

export default Statistic;
