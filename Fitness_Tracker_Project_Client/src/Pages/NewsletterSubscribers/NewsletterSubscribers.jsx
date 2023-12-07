import { useEffect, useState } from "react";
import useAxiosSecue from "../../Hooks/useAxiosSecue";
import useAuth from "../../Hooks/useAuth";
import TableRow from "../../Components/Shared/TableRow/TableRow";
import { Helmet } from "react-helmet-async";

const NewsletterSubscribers = () => {
  const { user } = useAuth();
  const [newsletterSubscribers, setNewsletterSubscribers] = useState([]);
  const AxiosSecure = useAxiosSecue();

  useEffect(() => {
    AxiosSecure.get(`/newsletter-subscribers/${user.email}`)
      .then((data) => setNewsletterSubscribers(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>TracFit | News Letter Suscribers</title>
      </Helmet>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {newsletterSubscribers.map((appliedTrainer, index) => (
            <>
              <tr>
                <th>{index + 1}</th>
                <td>{appliedTrainer.name}</td>
                <td>{appliedTrainer.email}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsletterSubscribers;
