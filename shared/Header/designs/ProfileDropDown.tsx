import { logoutUser } from "@/redux/actions/userActions";
import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogOut, BiUser } from "react-icons/bi";
import { useDispatch } from "react-redux";

const ProfileDropDown = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logoutUser(router, dispatch);
  };

  return (
    <div className=" bg-white rounded-lg font-medium text-black py-3  w-60 flex flex-col shadow-md cursor-pointer">
      <Link
        href="/dashboard"
        className="flex gap-2 items-center px-3 py-2 hover:bg-slate-200"
      >
        <div className="h-12 w-12 rounded-full bg-[#E0E2E7] relative">
          <Image
            className="h-4 w-4 rounded-full absolute bottom-0 right-[-3px]"
            src="/img/notif.svg"
            height={100}
            width={100}
            alt=""
          />
        </div>

        <div className="flex flex-col items-left font-medium ">
          <div>Jay Hargudson</div>
          <div className="text-[#EF233C]" onClick={logoutHandler}>
            Sign Out
          </div>
        </div>
      </Link>

      {/* <Link
        href="/ticket-history"
        className="flex gap-2 items-center px-5 py-2 hover:bg-slate-200"
      >
        <Image className="h-6 w-6 rounded-full " src="/img/abacus.svg" height={100} width={100} alt="" />  
       
        <div>Overview</div>
      </Link> */}

      <Link
        href="/profile"
        className="flex gap-2 items-center px-5 py-2 hover:bg-slate-200"
      >
        <Image
          className="h-6 w-6  rounded-full "
          src="/img/user.svg"
          height={100}
          width={100}
          alt=""
        />

        <div>Profile</div>
      </Link>

      <Link
        href="/dashboard"
        className="flex gap-2 items-center px-5 py-2 hover:bg-slate-200"
      >
        <Image
          className="h-6 w-6  rounded-full "
          src="/img/arrange-by-letters-a-z.svg"
          height={100}
          width={100}
          alt=""
        />

        <div>My Orders</div>
      </Link>

      <Link
        href="/subscription"
        className="flex gap-2 items-center px-5 py-2 hover:bg-slate-200"
      >
        <Image
          className="h-6 w-6  rounded-full "
          src="/img/credit-card-pos.svg"
          height={100}
          width={100}
          alt=""
        />

        <div>Subscription</div>
      </Link>

      <Link
        href="/refunds"
        className="flex gap-2 items-center px-5 py-2 hover:bg-slate-200"
      >
        <Image
          className="h-5 w-5 rounded-full "
          src="/img/invoice-04.svg"
          height={100}
          width={100}
          alt=""
        />

        <div>Refund & Return</div>
      </Link>

      <Link
        href="/settings"
        className="flex gap-2 items-center px-5 py-2 hover:bg-slate-200"
      >
        <Image
          className="h-6 w-6  rounded-full "
          src="/img/settings-01.svg"
          height={100}
          width={100}
          alt=""
        />
        <div>Settings</div>
      </Link>

      <Link
        href="/help"
        className="flex gap-2 items-center px-5 py-2 hover:bg-slate-200"
      >
        <Image
          className="h-6 w-6  rounded-full "
          src="/img/customer-service-02.svg"
          height={100}
          width={100}
          alt=""
        />
        <div>Help Center</div>
      </Link>
    </div>
  );
};

export default ProfileDropDown;
