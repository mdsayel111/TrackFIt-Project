import { useState } from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { useEffect } from "react";
import { axiosPublic } from "../../../Hooks/useAxiosPublic";

import {Link} from "react-router-dom"

const Blogs = () => {
  const [leatestForums, setLeatestForums] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/leatest-forums")
      .then((data) => setLeatestForums(data.data));
  }, []);

  return (
    <div className="mt-20 ">
      <SectionHeader>leteast Forums</SectionHeader>
      <div className="space-y-10 lg:space-y-6">
        {/* <div className="flex flex-col lg:flex-row cursor-pointer">
          <img
            src="https://st2.depositphotos.com/1743476/11581/i/450/depositphotos_115812380-stock-photo-cool-african-man.jpg"
            alt=""
            className="w-full lg:w-[30vw] aspect-[2/1] object-cover lg:mr-6"
          />
          <div className="flex items-center">
            <div>
              <h5 className="text-lg font-semibold text-primary mb-4">
                Fitness
              </h5>
              <h3 className="text-2xl font-bold mb-6 lg:mb-16">
                MY JOURNEY OF CHAMPIONSHIP IN WEIGHT LIFTING
              </h3>
              <p>
                <span className="text-primary text-xl font-bold mr-3">by</span>
                RACHEL MOOR
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row cursor-pointer">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBUQEhAVFRUVFRUVFRUVFRUVFRUVFhUWFxUVFRUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQFysdHR0tLSstLSsuLS0tLS0tLTUrKy0tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstKy0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIDBQYEBwj/xAA+EAACAQIEAwUGBAMGBwAAAAAAAQIDEQQSITEFQVEGImFxgQcTMpGhsRTB0fBCUoIVM2JykuEjQ1OissLx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAAICAgEFAQEAAAAAAAAAAAECAxEhMRIEE0FRYXEU/9oADAMBAAIRAxEAPwD6lEpEotGmFItEopANFISKQDRSEikFUikSiiCkNCQ0BSGJDQDQxGj7U9q8Lw2m5VZ3na8aUWs873tZctnq7bPoBvRnxjjPtqqSWXC4WMHznWedc7JRhbw1zPyOHn264i6n4h4uq25u8c81BrR2VNPLBLbupPxZdG36fA+C8O9tGNorJVo0q9n8esJOPR20v4257H1rsb2uw3FaLqUbxlCyqU5fFBvbVaSTs7NdOTTRNDoAAApiAAAAAAAAAAAAGAhgAABAwFcArRIpEopGmFxLRCLQFIokpANFISGgqkUhIaIKKRKKAaGJDA03bDj0eHYOpiHZyStTi3bNN/Cvu34Jn5l4zxKtiqkqtacqlWVrzdvLkl5JK2yVjuPbZx732O/Dp93DJK3J1ZpSlJrwTivR9Ti+zmBeIxNOLdlmV79Fy/fUb1G1iNzpuODdgsXXjGVowjKzvJ/Wxt5+y6onriV6U3+p9QwdFRiktloj1VY6bHk968vbGCkPiuM9m+KhFuE6c7LRd6LflyPZ7EMXKjxb3Mm456VSm4O93ONpJPxWSW59ScX0OV/syOF49g8ZGCy15TpTutI1XTlGM1/iadv6X1OmLLNp1LnmwxWN1fXxgI7vMBgACAYAIAAAAQAMBDAAAAAAADRopEotFZUi0Qi0BSKRKGFUmUiUWkQNFIlFICkUiRgUhoSKQH5e9pfd4vjFf/m/SUIS/wDb6Hr9nFalTqTrVM0nFWpwjFylJu98q20S3dlqdL7Qexrq47GV7tOUo1U7rJ7tUaUXe9tXL3nOyUfEn2XYB01VhUhreO663tb0S+ZyyXjxmHbHjtExL247tFXnJ052wkMrlmUozrSSaVv5Ybp89zSR41ifeRWGxtWalqlUUXms2nrba6Z3mJ7LRnJVE7SV7d2L0f8AC8yd1s+T0R5q/BPdNOc4qW0Woq6b6Jtq/ocYtER09HhMz252r2n4lGEXOFKNNynD38byUnCMn8O0b5Wr3eqPN2f4lWxdajKtiZ1Yxr05xhSp3neEladPLHVpyV1Zq176XOxxVXBKlLB1KkXkhFzjmTlDXMpyfKV1mv1PLwTgfu6ka1Gu7xd4yy0m0pfEk8mzRqt4ietM3x213t3fZivi6kKjxKimqslTStnVNKNlVce45qWZPLpobkxYahGnHLG9ryerbbcpOUm2+rbfqZT0vIYCGAAAgAAEwABAAwAAAYgAYAIDSIpEopFZWi0Qi0BSKJRQU0UhIaIKRSJRSApDRKKQFIYkMDg+3+Lw9LE0qWKmoUsTTcYyeiVSjNNxnLZKSqRtfTuPqjwYacIzvGSkv5o7Ozsn47o23th4L+L4TWy01KpRtVp6apRa97a2v93n08jQUqUaNGmo/Dkg/TKv0R5s1Yid/b14bzMan4dNLENK66HMYntBQ966U2pTad1J2UV6/oe9YxyWVO1ret9eZ5OHU05VO6lKUm5OSttorPmcI7ej+OdqYGnPNlnPLJydqdKpJPNe95P4jd9m8fnrqgt0o5tHHmkrxesXqtPI8GPwck2ni3HpGKTt5tvxRuOx9H3mLpRvmyrM582oXs5euX5o7a8mLzWscPqQCA9T55jEMKBAAASMAEACAYCABgIYAAABpEWjHEtFYZEUiEUmBkRSMaZSCrTLRjRaIqkUiUMChoQwKQyUYcZjYUY3k/Jc35AZcTlySz2ccssyeqcbaprpY4JYeNSlkta3w25JcjccY4jUqxypZYvdPeS5Jv6ngwbSVuh5vURbjjh6vTa555cjisRVw83Hly6fvY1lfHTTzxV5N3ySbte3na2ux2fFsGqi2Vzmcbw+Ub31X7scK2d7VaGMcbi6yjGGactFGLSWrdtW7Lfd2PsPYXszPBQdSvKLrziotRbcYQWqgm93fVvwXS75rsHhbYim7dXfyi3+h9OPXj5jbyZdxOjGSM6uJjEgCmBIwABAAMQCAAAAGMkLgMBXADSotGKLLTKwyIpMhFIKtFXIQwMiZUWY0Wgq0y0Y0WiCyZzUVdilNJXfI1lebnfM35J2t6rcsRtJlVbGVJ3y92Oyel343fL0PBGKbad827zay879BV8P0lJNbNSaa9efrc8FXFSh/fXcE9K0VadPxqR6f4lp1VtTrEM7e+pHqeTEYO+sXZnpo4hTTi2m1bZ6ST+GUfB2fk0x0enyfVEVpcROcdJrTqvzRrMZJ26p7NczsJUk1sa3EcGhNtwbg+dnz6tPR+qPPf01Z5jh3r6i0cTy5ytiqmHpurTupxyuKW77yvFeMldep2MO09Si1CtTzp/DUi1HN4ST0Uvkma6hwiV7yqZrbd2K+yWp75YKE45Grq1rM1jxzWNSzkyRadw3vDeM0MRdQlaS+KE1lnHzi/uro2B87x3DpwalB96PwSfT/pz6xf0Nl2f46763StaUJfwyTs7dNbp8tnszpNPpz27MDFQrxmrxd7Oz6p9GuRkuYaMBAABcGIAEAgHYBXFcBgK4JgVcBXADSItGJMuLKwyItGNMtBVplEIoCkUiEy0wLRaMaLRFefiE7JLq/t/9PBKRm4nLvJdFf5t/oeVyv5rfqdaxwxKKkmtn6P8AU8tWum7Puy5X5/lJF1E3tNrys/o0zBVw9SSs8lRdJLK/mrr6G0axp0qmVaK90uSv8Si/5XZS8Msupu8G200907r11uvC9zRYujUg1JRfdekZNNavVKd7eV7Pqua2HCcbnpp+cfHuzaS+pJIbuOuopw5ox0p6HojIy08kqlpa6X2fXwZmjJPR6P8Aexix9HNB25aowYLEKUUpbrn08wPbOnfRo5/H4VUqjktp7vxtlfzWX/Qup0MZ8nueDjtK9K/R2+en3s/QQS9HAuIZW29ptX+Vkzprnz3hlTbZdLXb+1kdjwjFZo5NdFpfe3iS9flay2QEhc5tHcQmFwABAACATALhcQmwKAkANMmXExItFYZUWjGi0FWikQmUBSKTIKQGRMtGNFJkVqcfUtXafOMf38zDUp352a2a+zM/HqaThO27yP11jf1VvU81OrOOji5R6rdeaOtemJYp++W8IS8U3F/LUmGWWkoZXyUtG/J3szYU5Rls/Rqxcqaa1jp6GtpprakErpqa5d6LkrdLq7S+ngaaEfw8mo6xlLNHW9r3clfwf5HVRSjonddN7eT5Gv4vhFUpuSg867y0tma5ePS/iNrpjoV2/lqe6nVOcwVbq9ee5taVYTA2l7o0uHdpyh8j30cQr2ZrMdLJXUuTJBL30sTbuy5bP8jLi17ylOK3cXbz5fU8mJXMijirbhWn4ZUul3pJcrpOP0/M6TA4mVNrvKS5W3ORWJjRrVYNpRjJyvfTJJKWt9Fa7Xkkb3hUp1lmSyQ5Sku/LxUX8K8Zf6UZvetY5WlLWnh2mFxCmuj5ma5ydWCi73k2rNNyd0+q6ehv+HY9Vl0kt1+a8DzVzVtOod74bVjb2BcQXOrkLgK4AAmFxMBCC4gHcZIAaZFoxRZkRpzZUykzGmWiKyIoxplJhVotGNMpMDIikY0y0FYOJ0nOjKK3tdead19jV4SvmSfVXN4mcbx/jNPhlOrUqRvllFUYXtnlVbcI35K+a71sovfYtZ0kw39SpGMc02ora70u3sl1f7sSql/hh/VO69VHf0djm+F1Z1JKtWalVkuXwU0/4Kafwra73fM6CjWPNf1M71V6q+m1G7M6hLnO3+VJL63+48tv4pfP8tis10YKrscpyW+3SMdfpyvF2sPWalJJSvKLel9e8reD+6MuDxqlspedtD38RpurKMU4KV9HOGdJW1srrXRcz0Uez0ZWdWrOfhfJD/TC2ng2z1Uzx489uFsE+XHTzycakHKDWaOrXXqeXiWIjKEKl14/v0+h1lDDRpxtGKSWiSVkvJGOrSUlfJdeKHv6+E9j9c/OqnFeR46703N/KhDnBfJMx1MDQkrSpxad07pWa6fUn+iPpr/P+uHwPAXjMR7+rUl7tZVCMLJVFHWM5N35t205J9Dp6fvqc3FLNG/dkmrv/MuTNnGhTjooxS5aCc0tvl+R5L2m3MvTSIrGoeWedr4beb/S5goVKtKXvMyzJ7Rva3R33MuJxaS3NZiMU+T6HLqdw6dxp9AwuIVWEZraSv5dV8zLc0XZDE58PbnGclbonqvuzdn0azuIl868amYVcQXFc0yLktjZLYCbFcGS5BFXAjOgCtPEtMxJlxZpzZostMxJmRMirTKIRSYVaKTMaZaYGRDTITKQGRHHe0zs7Tx2GSm5JRkm3F6prMovXR/FJf1HXpkYiiqkJQe0k1/uB884LVdOMaUpZnFJZmleVla78dDqcJO6OVxlB0tHpJSa+V7o2/CMXmSPFmp4W/JfQw386fsN/Fk1Ikw1HOqo7mGnllQu03undeDPSsTNbZfVf7nir4+K5mvr8USJvSzG20xnEq6TcYRfk7N+Sen1OOq9u6sZ+7q5qTv8M0l8ns/NG0nj5SvYw/goz1qWl4W0HkaezB8ZVVaVPqj1TqytpK5yWP4FRTbpydGXJ02kuusPhfyNUuJ4nDStOSnHlOOj9Y9fJlOncVcVUX8L2PP+Pa+JM1GE443FN3s9m01e29j1f2pFrkZmFjT1y4gmKFdPXQ1tXHR/lR4MXiU9pW8FoiaXbu+zmOjGtGC2qJr1SbT+j+Z1x8v7BuVbFxau1TUpTfJXTjFX63f0Z9PPZh348vFn15cHcBXFc7OBiC4gExMbJbAQC/ewwrRRZcWYYsypmmGZFpmGLMqZBkRSMaZQGRMpGJMyJhVplJmMpAWikyEMDmO1fDu+q2uV6O3KXX6L1RznDK8qc3dWWZ5euXr4anddo5NYSq1vlX/kj5jjcVOGJpU078525qSsl6bmMlPOv8dcOTwt/X0bAV8yTLxWHVTnZnNYLGunpfR7eZlxXEZbpni2+h475erGcOVviNJVoqD1ZNbjb1VzW4jiEp6tWXIyjYyxlOPM8tfi/KKbNVUqRSbk/m7I8yxjk7Uo/wBT29FzN1pNumLWiO3vq4hvvVZZV0uautj3XX/BjaKdnJqz9I8vNm0wnB3UlnleTSdvBvQ9WB4UqNV3XdqWi19n8/ueqmDXbz3z74h0vs7ca2Dlh6sVNQm9JLMrS238VJ+psK/YrCSd4upDwjJNf9yb+pruxlJ0cTUp8pxb9YtW+jkdmbmsT24+Ux002D7H4OGrjKf+eWnyjY3NHh1CCyxo00uihH9NSosypiKxHUE2me5KhRhTVoQjFb2jFRV/JF3EBUVcVxCAdxNgIIbZDY2yWwp3Am4Ac9GRlhIANMMsWWmAAZEyrgBA0y4sAAtMpMACmUgAK8nFlF0Kiltklf5HzPglD3tedaXV2ADVUljnjpxrSUbWvsyOIY2p/LlXN3X0ADnbDWZ27VzXrGml/EzbexMpVH/F8rABYx1j4T3LT8suHwjb1d/PU3fDcFqrWADcQxMunw1JRVkv9zzcSjt4DA2w9/DZ2rU59Wr/ANUXH7tHVXADlbtqBcyU5jAisgWAAFcLgABcVwACWyGwAgVwABsf/9k="
            alt=""
            className="w-full lg:w-[30vw] aspect-[2/1] object-cover lg:mr-6"
          />
          <div className="flex justify-between items-center">
            <div>
              <h5 className="text-lg font-semibold text-primary mb-4">
                Fitness
              </h5>
              <h3 className="text-2xl font-bold mb-6 lg:mb-16">
                WHAT MISTAKES YOU ARE MAKING WHILE MUSCLE BUILDING
              </h3>
              <p>
                <span className="text-primary text-xl font-bold mr-3">by</span>
                Nathan Bennett
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row cursor-pointer">
          <img
            src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
            alt=""
            className="w-full lg:w-[30vw] aspect-[2/1] object-cover lg:mr-6"
          />
          <div className="flex justify-between items-center">
            <div>
              <h5 className="text-lg font-semibold text-primary mb-4">
                Fitness
              </h5>
              <h3 className="text-2xl font-bold mb-6 lg:mb-16">
                IMPORTANCE OF GOOD TRAINER FOR WEIGHT L0SS JOURNEY
              </h3>
              <p>
                <span className="text-primary text-xl font-bold mr-3">by</span>
                Brandon Foster
              </p>
            </div>
          </div>
        </div> */}

        {leatestForums.map((leatestForum) => (
          <div
            key={leatestForum._id}
            className="flex flex-col lg:flex-row cursor-pointer"
          >
            <img
              src={leatestForum.photoUrl}
              alt=""
              className="w-full lg:w-[30vw] aspect-[2/1] object-cover lg:mr-6"
            />
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-lg font-semibold text-primary mb-4">
                  Fitness
                </h5>
                <h3 className="text-2xl font-bold mb-6 lg:mb-16">
                  {leatestForum.title}
                </h3>
                <p className="mb-4">
                  <span className="text-primary text-xl font-bold mr-3">
                    by
                  </span>
                  {leatestForum.postedBy}
                </p>
                <Link to={`/forum/${leatestForum._id}`} className="btn bg-primary text-white">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
