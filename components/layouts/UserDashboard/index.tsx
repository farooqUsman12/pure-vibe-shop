"use client";
import UserDashboardCard from "@/components/modules/UserDashboardCard";
import UserDashboardTabs from "@/components/modules/UserDashboardTabs";
import TableUi from "@/components/ui/TableUi";
import { getOrderAction } from "@/redux/actions/orderActions";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerImage from "@/public/img/customerImage.png";
import Link from "next/link";
import Image from "next/image";
// import AuthenticatedLayout from "@/shared/AuthenticatedLayout";

const columns = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "_id",
    render: (id: string) => <div># {id}</div>,
  },
  {
    title: "Name",
    dataIndex: ["orderItems", 0, "name"],
    key: "name",
  },
  {
    title: "Price",
    dataIndex: ["orderItems", 0, "price"],
    key: "price",
  },
  {
    title: "Address",
    dataIndex: ["shippingInfo", "address"],
    key: "address",
  },
  {
    title: "Status",
    key: "orderStatus",
    dataIndex: "orderStatus",
  },
  {
    title: "Action",
    key: "details",
    dataIndex: "_id",
    render: (id: string) => <Link href={`/order/${id}`}>More Details</Link>,
  },
];

const UserDashboard = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const [search, setSearch] = useState<any>("");
  const [activeTab, setActiveTab] = useState("Active");
  const [filtered, setFiltered] = useState([]);
  const [totalActiveOrders, setTotalActiveOrders] = useState<any>(0);

  useEffect(() => {
    dispatch(getOrderAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const total = orders?.reduce(
      (total, order: any) => total + order?.itemsPrice,
      0
    );

    const pendingOrders = orders?.filter(
      (order: any) => order?.orderStatus !== "delivered"
    );

    const numberOfPendingOrders = pendingOrders?.length;
    setTotalActiveOrders(numberOfPendingOrders);
    setTotalPrice(total);
  }, [orders]);

  useEffect(() => {
    let temp: any = [...orders];

    if (activeTab === "Completed") {
      temp = orders?.filter((item: any) => item?.orderStatus === "delivered");
    } else if (activeTab === "Return") {
      temp = orders?.filter((item: any) => item?.orderStatus === "return");
    }

    if (search && search !== "") {
      temp = orders?.filter(
        (item: any) =>
          item?.name?.includes(search) || item?.id?.includes(search)
      );
    }

    setFiltered(temp);
  }, [orders, search, activeTab]);

  return (
    // <AuthenticatedLayout>
    <div className="bg-slate-50">
      <div className="container py-20">
        <div className="text-3xl font-semibold mb-10">Orders</div>
        <div className="grid grid-cols-1  gap-0 md:gap-4 md:grid-cols-2 mb-4">
          <UserDashboardCard
            totalPrice={totalPrice}
            totalOrders={orders?.length}
            totalActiveOrders={totalActiveOrders}
          />
          <UserDashboardCard
            totalPrice={totalPrice}
            totalOrders={orders?.length}
            totalActiveOrders={totalActiveOrders}
          />
        </div>
        <UserDashboardTabs
          search={search}
          setSearch={setSearch}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* <TableUi columns={columns} data={filtered} /> */}
        <div className="border-b border-[#EDEEF2] p-5">
          <div className="bg-[#F6F6F6] px-10 py-6">
            <h4 className="text-[#3C4242] font-medium text-xl">
              Order no: #123456789
            </h4>
            <div className="flex justify-between w-full mt-4">
              <div className="text-sm">
                <p className="text-[#BEBCBD]">
                  <span className="font-medium text-[#807D7E]">
                    Order Date :
                  </span>{" "}
                  2 June 2023 2:40 PM{" "}
                </p>
                <p className="text-[#BEBCBD] mt-2">
                  <span className="font-medium text-[#807D7E]">
                    Estimated Delivery Date :
                  </span>{" "}
                  8 June 2023
                </p>
              </div>
              <div>
                <p className="text-[#BEBCBD]">
                  <span className="font-medium text-[#807D7E]">
                    Order Status :{" "}
                  </span>{" "}
                  Inprogress
                </p>
                <p className="text-[#BEBCBD] mt-2">
                  <span className="font-medium text-[#807D7E]">
                    Payment Method :
                  </span>{" "}
                  Cash on delivery
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center">
            <Image src={CustomerImage} alt="CustomerImage" />
            <div className="ml-6 font-medium">
              <p className="text-[#3C4242]">Black Printed T-shirt</p>
              <p className="text-sm text-[#BEBCBD]">
                <span className="text-[#3C4242]">Colour :</span> Pink{" "}
              </p>
              <p className="text-sm text-[#BEBCBD]">
                <span className="text-[#3C4242]">Qty :</span> 1
              </p>
              <p className="text-[#807D7E] mt-1">Total : $23.00</p>
            </div>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <Link
              href={"http://localhost:3000/order/1"}
              className="bg-[#2B2D42] flex justify-center items-center font-medium text-lg text-white w-[150px] h-[50px] rounded-lg"
            >
              View Detail
            </Link>
          </div>
        </div>
        <div className="border-b border-[#EDEEF2] p-5">
          <div className="bg-[#F6F6F6] px-10 py-6">
            <h4 className="text-[#3C4242] font-medium text-xl">
              Order no: #123456789
            </h4>
            <div className="flex justify-between w-full mt-4">
              <div className="text-sm">
                <p className="text-[#BEBCBD]">
                  <span className="font-medium text-[#807D7E]">
                    Order Date :
                  </span>{" "}
                  2 June 2023 2:40 PM{" "}
                </p>
                <p className="text-[#BEBCBD] mt-2">
                  <span className="font-medium text-[#807D7E]">
                    Estimated Delivery Date :
                  </span>{" "}
                  8 June 2023
                </p>
              </div>
              <div>
                <p className="text-[#BEBCBD]">
                  <span className="font-medium text-[#807D7E]">
                    Order Status :{" "}
                  </span>{" "}
                  Inprogress
                </p>
                <p className="text-[#BEBCBD] mt-2">
                  <span className="font-medium text-[#807D7E]">
                    Payment Method :
                  </span>{" "}
                  Cash on delivery
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center">
            <Image src={CustomerImage} alt="CustomerImage" />
            <div className="ml-6 font-medium">
              <p className="text-[#3C4242]">Black Printed T-shirt</p>
              <p className="text-sm text-[#BEBCBD]">
                <span className="text-[#3C4242]">Colour :</span> Pink{" "}
              </p>
              <p className="text-sm text-[#BEBCBD]">
                <span className="text-[#3C4242]">Qty :</span> 1
              </p>
              <p className="text-[#807D7E] mt-1">Total : $23.00</p>
            </div>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <Link
              href={"http://localhost:3000/order/1"}
              className="bg-[#2B2D42] flex justify-center items-center font-medium text-lg text-white w-[150px] h-[50px] rounded-lg"
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </AuthenticatedLayout>
  );
};

export default UserDashboard;
