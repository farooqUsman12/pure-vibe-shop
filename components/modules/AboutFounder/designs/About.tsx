import { gilroyBold, gilroyLight, gilroyMedium} from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-6 items-center py-6">
      
      <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }}>
      <Image 
        className="w-full size-80 object-cover object-center rounded-lg"
        src="/img/photo-product.png"
        height={500}
        width={500}
        alt=""
      />
      </motion.div>

      <motion.div initial={{x:  "7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }}  className="col-span-3 gap-6">
        <div className={`text-3xl text-black ${gilroyBold.className}`}>
          Founder name
        </div>
        <div className={`mt-2 text-lg  ${gilroyMedium.className}`}>
          Founder of pure vibes
        </div>
        <div className={`mt-6 text-base font-medium text-[#808080] ${gilroyLight.className}`}>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry.Lorem Ipsum  Been The Industry&spos;s Standard Dummy Text
          Ever Since The 1500s, When An Unknown Printegalley Of Type And
          Scrambled N Printegalley Of Type And Scrambled It To Make A Type
          Specimen Book.
        </div>
        <div className={`mt-3 text-base font-medium text-[#808080] ${gilroyLight.className}`}>
          For Dynamic Content,Add A Rich Text Field To Any Collection And Then
          Connect A Rich Text Element To That Field In The Settings Panel.
          Headings, Paragraphs, Block-Quotes, Figures, Images, And Figure
          Captions Can All Be Styled.
        </div>
      </motion.div>
    </div>
  );
};

export default About;
