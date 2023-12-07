/* eslint-disable react/no-unescaped-entities */
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Testimonials.css";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const Testimonials = () => {
  return (
    <div>
      <SectionHeader>Testimonials</SectionHeader>
      <AwesomeSlider>
        <div className="w-full h-full relative flex justify-center items-center">
          <figure className="!relative max-w-screen-md mx-auto !h-fit">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                "In the ever-evolving world of fitness, finding the perfect
                companion to track your progress is essential. Enter [Fitness
                Tracker Brand], a game-changer in the realm of health and
                wellness. This website offers a seamless and comprehensive
                fitness tracking experience that goes beyond the ordinary."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="w-full h-full relative flex justify-center items-center">
          <figure className="!relative max-w-screen-md mx-auto !h-fit">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                "One of the standout features of [Fitness Tracker Brand] is its
                user-friendly interface. Navigating through the website is a
                breeze, ensuring that even those new to fitness tracking can
                effortlessly access a wealth of information. The sleek design
                and intuitive layout make it easy to set goals, monitor
                workouts, and analyze data without any unnecessary
                complications."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Alexander Mitchell
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Chief Operating Officer at Microsoft
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="w-full h-full relative flex justify-center items-center">
          <figure className="!relative max-w-screen-md mx-auto !h-fit">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                "What sets [Fitness Tracker Brand] apart is its cutting-edge
                technology. The fitness trackers available on the site boast
                state-of-the-art sensors and algorithms that deliver
                unparalleled accuracy in tracking various activities. From steps
                taken to heart rate monitoring, these devices provide real-time
                data that empowers users to make informed decisions about their
                health and fitness routines."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  David Reynolds
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Chief Financial Officer at Amazon
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="w-full h-full relative flex justify-center items-center">
          <figure className="!relative max-w-screen-md mx-auto !h-fit">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                "Another noteworthy aspect is the compatibility of [Fitness
                Tracker Brand] with other fitness apps and devices. This
                integration allows users to sync their data seamlessly, creating
                a holistic view of their health journey. Whether you're a
                dedicated athlete or a casual fitness enthusiast, the
                versatility of these trackers ensures they cater to a wide range
                of fitness levels and goals."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Nathan Bennett
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  Senior Software at Netflix
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Testimonials;
