import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useLoading from "../../../Hooks/useLoading";

const ScrollGallery = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const axiosPublic = useAxiosPublic();
  const Loadig = useLoading();

  const fetchData = async () => {
    // console.log("inside fetch");
    const result = await axiosPublic.get(`/images?page=${page}`);
    console.log(result);
    setData(data.concat(result.data));
    setPage(page + 1);
    if (data.length >= 100) {
      setHasMore(false);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(hasMore);

  return (
    <div className="my-10">
      {data.length > 0 && (
        <InfiniteScroll
          className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-5 lg:gap-6"
          dataLength={data.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<div className="lg:col-span-5 col-span-2 md:col-span-3 text-2xl"><div className="w-[200px] mx-auto">{Loadig}</div></div>}
          endMessage={
            <p className="lg:col-span-5 col-span-2 md:col-span-3" style={{ textAlign: "center"}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {data.map((item, index) => (
            <img className="w-full aspect-square object-cover" key={index} src={item.thumbnail}></img>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ScrollGallery;
