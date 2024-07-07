import { gilroyMedium, gilroySemiBold } from "@/shared/Fonts";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"

const data = [
  {
    question: "What are your shipping options and costs?",
  },
  {
    question: "What payment methods do you accept?",
  },
  {
    question: "How can I track my order?",
  },
  {
    question: "What is your return policy?",
  },
];

const FrequentlyAskedQuestions = () => {
  const [showAccord, setShowAccord] = useState<null | number>(null);

  const clickHandler = (value: number) => {
    if (showAccord === value) {
      setShowAccord(null);
    } else {
      setShowAccord(value);
    }
  };

  return (
    <div className="container mt-10  md:p-10">
      <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
        className={`text-2xl md:text-4xl text-center font-extrabold text-black ${gilroySemiBold.className}`}
      >
        Frequently Asked Questions
      </motion.div>

      <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className="py-10">
        {data.map((item, idx) => (
          <>
            <div
              key={idx}
              className={`text-2xl border-[1px] p-6 mb-4 rounded-2xl shadow-sm text-black ${gilroyMedium.className}`}
              onClick={() => clickHandler(idx)}
            >
              {idx + 1}. {item.question}
            </div>
            {idx === showAccord && (
              <div className="mt-6 mb-4 h-auto w-full bg-[#F6F6F6] rounded-2xl p-10">
                <div
                  className={`flex justify-between items-center text-2xl text-black ${gilroyMedium.className}`}
                >
                  <div>2. How long will it take to receive my order?</div>
                  <div>
                    <Image
                      className="h-12 w-12 "
                      src="/img/bg.png"
                      height={1000}
                      width={1000}
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex flex-col p-4">
                  <div className=" text-sm text-[#808080]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem
                  </div>
                  <div className="text-sm text-[#808080]">
                    Ipsum been the industry&apos;s standard dummy text ever
                    since the
                  </div>
                  <div className="mt-6 text-sm text-[#808080] flex flex-1 gap-3 items-center">
                    <div>
                      <Image
                        className="h-6 w-6"
                        src="/img/pattern.png"
                        height={100}
                        width={100}
                        alt=""
                      />
                    </div>
                    <div>Listen to what they say about you</div>
                  </div>

                  <div className="mt-6  text-sm text-[#808080] flex flex-1 gap-3 items-center">
                    <div>
                      <Image
                        className="h-6 w-6"
                        src="/img/pattern.png"
                        height={100}
                        width={100}
                        alt=""
                      />
                    </div>
                    <div> Randomised words which.</div>
                  </div>

                  <div className="mt-6  text-sm text-[#808080] flex flex-1 gap-3 items-center">
                    <div>
                      <Image
                        className="h-6 w-6"
                        src="/img/pattern.png"
                        height={100}
                        width={100}
                        alt=""
                      />
                    </div>
                    <div> Internet tend to repeat predefined chunks</div>
                  </div>

                  <div className="mt-6 text-sm text-[#808080]  flex flex-1 gap-3 items-center">
                    <div>
                      <Image
                        className="h-6 w-6"
                        src="/img/pattern.png"
                        height={100}
                        width={100}
                        alt=""
                      />
                    </div>
                    <div>Automate multiple scenarios </div>
                  </div>

                  <div
                    className={`text-2xl mt-6 text-black ${gilroyMedium.className}`}
                  >
                    What is your return and exchange policy?
                  </div>

                  <div className="mt-6 text-sm text-[#808080]">
                    <div>
                      When an unknown printegalley of type and scrambled it to
                      make a type specimen
                    </div>
                    <div>
                      book. It has survived not only five cedfgfnturies, but
                      alsjkjo the leap into electronic
                    </div>
                    <div>typesetting.</div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
