import React from "react";
import Countdown from "react-countdown";
import { gilroyLight } from "../Fonts";

const CountdownTimer = ({ targetDate }:any) => {
  const renderer = ({ days, hours, minutes, seconds }:any) => (
    <div className="mt-9 flex items-center gap-5 counter-main">
      <div className="counter-box">
        <div className="font-bold text-2xl text-center heading" suppressHydrationWarning>
          {days}
        </div>
        <div  className={`text-[#FFFFFF] text-xs ${gilroyLight.className}`}>DAYS</div>
      </div>
      <div className="text-2xl text-[#FFFFFF]">:</div>
      
      <div className="counter-box">
        <div className="font-bold text-2xl text-center heading" suppressHydrationWarning>
          {hours}
        </div>
        <div className={`text-[#FFFFFF] text-xs ${gilroyLight.className}`}>HOURS</div>
      </div>
      <div className="text-2xl text-[#FFFFFF]">:</div>


      <div className="counter-box">
        <div className="font-bold text-2xl text-center heading" suppressHydrationWarning>
          {minutes}
        </div>
        <div className={`text-[#FFFFFF] text-xs ${gilroyLight.className}`}>MINS</div>
      </div>
        <div className="text-2xl text-[#FFFFFF]">:</div>


        
      <div className="counter-box">
        <div className="font-bold text-2xl text-center heading" suppressHydrationWarning>
          {seconds}
        </div>
        <div className={`text-[#FFFFFF] text-xs ${gilroyLight.className}`}>SECS</div>
      </div>
    </div>
  );

  return <Countdown renderer={renderer} date={targetDate}  />;
};

export default CountdownTimer;