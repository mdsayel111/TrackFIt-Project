import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const Featured = () => {
  return (
    <div className="my-8 text-primary text-center">
      <SectionHeader>Featured</SectionHeader>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 my-8">
        <div className="bg-[#272727] text-center rounded-xl p-8 space-y-4">
          <img src="/image/Curdio.jpg" alt="" className="w-40 h-40 mx-auto" />
          <h1 className="text-2xl font-bold text-primary">Cardio</h1>
          <p className="text-gray-500">
            Ignite your cardiovascular journey with our fitness trackers.
            Monitor heart rate, optimize workouts, and embrace the rhythm of a
            healthier, active lifestyle with TrackFit.
          </p>
        </div>
        <div className="bg-[#272727] text-center rounded-xl p-8 space-y-4">
          <img
            src="/image/Bench-Press.jpg"
            alt=""
            className="w-40 h-40 mx-auto"
          />
          <h1 className="text-2xl font-bold text-primary">Bench Press</h1>
          <p className="text-gray-500">
            Elevate your strength game with precision. Track each bench press
            with TrackFit, optimizing form, reps, and progress for unparalleled
            gains.
          </p>
        </div>
        <div className="bg-[#272727] text-center rounded-xl p-8 space-y-4">
          <img src="/image/Cycling.webp" alt="" className="w-40 h-40 mx-auto" />
          <h1 className="text-2xl font-bold text-primary">Cycling</h1>
          <p className="text-gray-500">
            Ignite your cardiovascular journey with our fitness trackers.
            Monitor heart rate, optimize workouts, and embrace the rhythm of a
            healthier, active lifestyle with TrackFit.
          </p>
        </div>
        <div className="bg-[#272727] text-center rounded-xl p-8 space-y-4">
          <img
            src="/image/Dead-Lift.jpg"
            alt=""
            className="w-40 h-40 mx-auto"
          />
          <h1 className="text-2xl font-bold text-primary">Dead Lift</h1>
          <p className="text-gray-500">
            Unleash power in every lift. Track deadlift progress with
            TrackFit—precision monitoring for form, reps, and transformative
            gains in strength.
          </p>
        </div>
        <div className="bg-[#272727] text-center rounded-xl p-8 space-y-4">
          <img src="/image/Pull-Up.jpg" alt="" className="w-40 h-40 mx-auto" />
          <h1 className="text-2xl font-bold text-primary">Pull Up</h1>
          <p className="text-gray-500">
            Rise to new heights with precision. Track pull-ups with TrackFit,
            optimizing each rep for upper body strength and transformative
            gains.
          </p>
        </div>
        <div className="bg-[#272727] text-center rounded-xl p-8 space-y-4">
          <img src="/image/Push-Up.jpg" alt="" className="w-40 h-40 mx-auto" />
          <h1 className="text-2xl font-bold text-primary">Push Up</h1>
          <p className="text-gray-500">
            Elevate your push-up game. TrackFit monitors each rep, optimizing
            form and progress, turning push-ups into a transformative strength
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
