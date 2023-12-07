
const GalleryTitle = () => {
  return (
    <div
      className="hero h-[50vh]"
      style={{
        backgroundImage:
          "url(/image/GalleryTitle.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Gallery</h1>
        </div>
      </div>
    </div>
  );
};

export default GalleryTitle;
