import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const FeaturedClass = () => {
  return (
    <div className="my-16">
      <SectionHeader>Featured Classes</SectionHeader>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <iframe
            className="w-[80%] lg:w-full mx-auto h-[400px]"
            src="https://www.youtube.com/embed/X_9VoqR5ojM?si=hwBpBNH2aW1Oas7Z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[80%] lg:w-full mx-auto h-[400px]"
            src="https://www.youtube.com/embed/-4cr0t3_y_I?si=QQQ9NBiutx5r-GlD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[80%] lg:w-full mx-auto h-[400px]"
            src="https://www.youtube.com/embed/5UpEeoYJxaw?si=1JP9BMSV06SFzoLH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[80%] lg:w-full mx-auto h-[400px]"
            src="https://www.youtube.com/embed/oAM6H2LqT6A?si=ZhLYXHpIhnhCUqv_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[80%] lg:w-full mx-auto h-[400px]"
            src="https://www.youtube.com/embed/Nf0gX8Hr4_Q?si=wTawdmEd9m32x6x4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[80%] lg:w-full mx-auto h-[400px]"
            src="https://www.youtube.com/embed/3f0L6_4fBDo?si=nk08ghX7BCqj6ALb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClass;
