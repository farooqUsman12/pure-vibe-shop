import React from "react";
import { gilroyBold, gilroySemiBold } from "@/shared/Fonts";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const FeedBack = () => {
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    // centerMode: true,
    // cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    // variableWidth: true,
    infinite: true,
    initialSlide: 1,
    // arrows: false,
    // buttons: false,
    focusOnSelect: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F7F8F9] ">
      <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className="container flex flex-col h-auto w-full py-20 mb-32 ">
        <div className="flex flex-col  justify-between items-center md:flex-row ">
          <div className="flex flex-col gap-1">
            <div className={`text-2xl  text-black ${gilroyBold.className}`}>
              Our Customer Feedback
            </div>
            <div className="text-base text-[#808080]">
              Don’t take our word for it. Trust our customers
            </div>
          </div>

          <div className="flex mt-3 gap-3 justify-center items-center text-base md:mt-0">
            <div className={`flex items-center border-[1px] border-[#133240] p-2 px-5 gap-3 rounded-lg text-center text-[#6E6E6E] text-xl font-black  ${gilroyBold.className}`}>
              <div><IoChevronBackSharp size={24}  /></div>
              <div>Previous</div>
            </div>
            <div className={`flex items-center border-[1px] border-[#133240] p-2 px-4 rounded-lg text-center text-[#133240] text-xl font-black  ${gilroyBold.className}`}>
              <div>Next</div>
              <div><IoChevronForwardOutline size={24} /></div>
            </div>
          </div>
        </div>

        <div className=" p-4 mt-10 gap-4">
          <Slider {...settings}>
            {[1, 2, 3].map((item, idx) => (
              <div key={idx}>
                <div className="w-[95%] mx-auto h-auto p-6 shadow bg-white">
                  <div className="flex justify-between">
                    <div>
                      <Image
                        className="h-14 w-14 rounded-lg"
                        src="/img/floyd.png"
                        height={100}
                        width={100}
                        alt=""
                      />
                    </div>
                    <div>
                      <ReactStars count={5} size={22} activeColor="#ffd700" />,
                    </div>
                  </div>

                  <div
                    className={`mt-3 text-base text-black ${gilroySemiBold.className}`}
                  >
                    Floyd Miles
                  </div>
                  <div className="mt-5 text-[#6E6E6E] text-sm">
                    Campsite has been instrumental in keeping designers aware of
                    each others work-in-progress in a way that was previously
                    slowing us down. It&apos;s also one of the only channels
                    where.
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="w-[95%] h-auto p-6 shadow bg-white">
              <div className="flex justify-between">
                <div>
                  <Image
                    className="h-14 w-14 rounded-lg"
                    src="/img/ronald.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div>
                  <ReactStars count={5} size={22} activeColor="#ffd700" />
                </div>
              </div>

              <div
                className={`mt-3 text-base text-black ${gilroySemiBold.className}`}
              >
                Ronald Richards
              </div>
              <div className="mt-5 text-[#6E6E6E] text-sm">
                Campsite has been instrumental in keeping designers aware of
                each others work-in-progress in a way that was previously
                slowing us down. It&apos;s also one of the only channels where.
              </div>
            </div>

            <div className="w-[95%] h-auto p-6 shadow bg-white">
              <div className="flex justify-between">
                <div>
                  <Image
                    className="h-14 w-14 rounded-lg"
                    src="/img/savannah.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div>
                  <ReactStars count={5} size={22} activeColor="#ffd700" />,
                </div>
              </div>

              <div
                className={`mt-3 text-base text-black ${gilroySemiBold.className}`}
              >
                Savannah Nguyen
              </div>
              <div className="mt-5 text-[#6E6E6E] text-sm">
                Campsite has been instrumental in keeping designers aware of
                each others work-in-progress in a way that was previously
                slowing us down. It&apos;s also one of the only channels where.
              </div>
            </div> */}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default FeedBack;
