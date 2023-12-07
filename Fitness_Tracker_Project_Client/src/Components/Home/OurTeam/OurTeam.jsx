import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const OurTeam = () => {
  return (
    <div className="mt-10">
      <SectionHeader>Our Team</SectionHeader>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        <div className="card  bg-secondary shadow-xl" data-aos="flip-left">
          <figure>
            <div className="avatar">
              <div className="w-24 mask mask-squircle mt-4">
                <img src="https://i.ibb.co/3Mcq6t2/Maggie-Chan-Jones-1-JWP-WEB-600x400.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Emily Lawson</h2>
            <p>
              Former collegiate track athlete turned certified personal trainer.
              Passionate about running and fostering a lifelong love for staying
              active.
            </p>
          </div>
        </div>
        <div className="card  bg-secondary shadow-xl" data-aos="flip-left">
          <figure>
            <div className="avatar">
              <div className="w-24 mask mask-squircle mt-4">
                <img src="https://i.ibb.co/phRKkPT/images.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Carlos Ramirez</h2>
            <p>
              Former professional boxer, now a certified boxing and fitness
              coach. Focuses on discipline, skill development, and building
              strength and agility.
            </p>
          </div>
        </div>
        <div className="card  bg-secondary shadow-xl" data-aos="flip-left">
          <figure>
            <div className="avatar">
              <div className="w-24 mask mask-squircle mt-4">
                <img src="https://i.ibb.co/z61py0Y/asds.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Taylor Mitchell</h2>
            <p>
              Nutrition enthusiast and fitness advocate. Certified personal
              trainer and nutrition coach, empowering clients with balanced
              workouts and personalized nutrition plans.
            </p>
          </div>
        </div>
        <div className="card  bg-secondary shadow-xl" data-aos="flip-left">
          <figure>
            <div className="avatar">
              <div className="w-24 mask mask-squircle mt-4">
                <img src="https://i.ibb.co/3hp1WcB/Untitled.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Sophia Chang</h2>
            <p>
              Certified yoga instructor and mindfulness coach. Integrates
              Eastern wellness practices for balance, flexibility, and a sense
              of inner calm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
