import Image from "next/image";
import React from "react";

const ProductDetails2 = () => {
  return (
    <div className="container">
      <div className="flex flex-col mt-14 justify-center text-xl gap-6 md:flex-row md:mt-3">
        <div>
          <div>Descriptions</div>
          <div className="mt-2 border-b-2 border-[#20B526]"></div>
        </div>
        <div className="text-[#808080]">
          Additional Information
          </div>
        <div className="text-[#808080]">
          Customer Feedback
          </div>
      </div>
      <div className="border-t-[1px]"></div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-6 text-[#808080] text-lg md:p-8">
          <div>
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
            posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
            vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
            porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
            Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus.
            Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
            scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
            commodo quis, egestas elementum leo. Donec convallis mollis enim.
            Aliquam id mi quam. Phasellus nec fringilla elit.
          </div>

          <div className="mt-5 ">
            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
            iaculis, metus faucibus elementum tincidunt, turpis mi viverra
            velit, pellentesque tristique neque mi eget nulla. Proin luctus
            elementum neque et pharetra.{" "}
          </div>

          <div className="flex items-center gap-3 mt-6  text-[#808080]">
            <Image
              className="h-6 w-6"
              src="/img/check-circle-icon.png"
              height={100}
              width={100}
              alt=""
            />
            <div className="text-lg">100 g of fresh leaves provides.</div>
          </div>

          <div className="flex items-center gap-3 mt-3  text-[#808080]">
            <Image
              className="h-6 w-6"
              src="/img/check-circle-icon.png"
              height={100}
              width={100}
              alt=""
            />
            <div className="text-lg">
              Aliquam ac est at augue volutpat elementum.
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3  text-[#808080]">
            <Image
              className="h-6 w-6"
              src="/img/check-circle-icon.png"
              height={100}
              width={100}
              alt=""
            />
            <div className="text-lg">
              Quisque nec enim eget sapien molestie.
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3 text-[#808080]">
            <Image
              className="h-6 w-6"
              src="/img/check-circle-icon.png"
              height={100}
              width={100}
              alt=""
            />
            <div className="text-lg">
              Proin convallis odio volutpat finibus posuere.
            </div>
          </div>

          <div className="mt-3 text-[#808080] text-lg ">
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
            blandit eros non turpis lobortis iaculis at ut massa.{" "}
          </div>
        </div>

        <div className="p-2 mt-12 md:p-6 md:mt-0 ">
          <div >
            <iframe
            className="w-full md:w-[560px]"
              height="315"
              src="https://www.youtube.com/embed/0o1aJkP-a9c?si=BB88cu-SRTqC0QNV"
              title="youtube video player"
              frameBorder="0" // Change frameborder to frameBorder
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex border-[1px] border-[#E6E6E6] rounded-md w-fit mt-6 items-center gap-10 p-4">
            <div className="flex items-center gap-3">
              <div>
                {" "}
                <Image
                  className="h-10 w-10"
                  src="/img/price-tag.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="font-extrabold">60% Discount</div>
                <div className="text-[#808080]">
                  Save your 60% money with us
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                {" "}
                <Image
                  className="h-10 w-10"
                  src="/img/leaf.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="font-extrabold">100% Organic</div>
                <div className="text-[#808080]">100% Organic Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails2;
