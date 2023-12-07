import { Helmet } from "react-helmet-async";
import AboutUs from "../../Components/Home/About/AboutUs";
import Banner from "../../Components/Home/Banner/Banner";
import Blogs from "../../Components/Home/Blogs/Blogs";
import Featured from "../../Components/Home/Featured/Featured";
import FeaturedClass from "../../Components/Home/FeaturedClass/FeaturedClass";
import Newsletter from "../../Components/Home/Newsletter/Newsletter";
import OurTeam from "../../Components/Home/OurTeam/OurTeam";
import Testimonials from "../../Components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TracFit | Home</title>
      </Helmet>
      <Banner />
      <Featured />
      <FeaturedClass />
      <AboutUs />
      <Testimonials />
      <Blogs />
      <Newsletter/>
      <OurTeam/>
    </div>
  );
};

export default Home;
