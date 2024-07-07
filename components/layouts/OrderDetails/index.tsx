"use client";
import OrderSlip from "@/components/modules/OrderSlip";
import ProductOrderCard from "@/components/modules/ProductOrderCard";
import Stepper from "@/components/ui/Stepper";
import { getOrderAction } from "@/redux/actions/orderActions";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import API from "@/redux/services/base.service";
import AuthenticatedLayout from "@/shared/AuthenticatedLayout";

const OrderDetails = ({ id }: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  const [orderDetails, setOrderDetails] = useState<any>();
  const [formData, setFormData] = useState({
    orderID: "",
    subject: "",
    details: "",
  });

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    setModalVisible(false);
  };

  const getData = async () => {
    let res = await API.get(`/order/${id}`);
    setOrderDetails(res?.data?.order);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  useEffect(() => {
    dispatch(getOrderAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    // <AuthenticatedLayout>
      <div className="bg-[#F9F9FC]">
        <div className="container  ">
          <div className="p-6">
            <div className="flex items-cent justify-between">
              <div className="text-xl font-semibold mb-10">Order Details</div>
              <button
                className="bg-navy  p-2 w-fit h-fit rounded-lg text-white"
                onClick={showModal}
              >
                Order Return
              </button>
            </div>

            <Modal
              title="Order Return"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <button
                  className="px-10 py-2 mr-3 rounded-md text-white font-bold bg-blue-600 "
                  key="back"
                  onClick={handleCancel}
                >
                  Cancel
                </button>,
                <button
                  className="px-10 py-2 rounded-md text-white font-bold bg-blue-600 "
                  key="submit"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>,
              ]}
            >
              <form id="myForm" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2  mt-10 w-full">
                  <div className="text-[#7d7d7e] text-lg  font-bold">
                    Order ID{" "}
                  </div>
                  <div className="border-2 py-3 bg-white rounded-lg w-full">
                    <input
                      className="px-2 text-lg w-full border-none outline-none"
                      type="text"
                      id="orderID"
                      value={formData.orderID}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2  mt-5 w-full">
                  <div className="text-[#7d7d7e] text-lg  font-bold">
                    Subject
                  </div>
                  <div className="border-2 py-3 bg-white rounded-lg w-full">
                    <input
                      className="px-2 text-lg w-full border-none outline-none"
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2  mt-5 w-full">
                  <div className="text-[#7d7d7e] text-lg  font-bold">
                    Details
                  </div>
                  <div className="border-2 py-3 bg-white rounded-lg w-full">
                    <textarea
                      id="details"
                      className="h-56 w-full px-3 text-lg border-none outline-none"
                      value={formData.details}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </Modal>

            <div className="bg-white p-6">
              <OrderSlip data={orderDetails} />
              <div className="my-10 mx-24 w-[60%]">
                <Stepper
                  current={orderDetails?.orderStatus === "Processing" && 1}
                />
              </div>
              <div className="mx-32 mb-20 rounded-lg my-5 bg-[#F6F6F6] px-6 py-6 w-[60%] flex gap-4 items-center font-extrabold text-sm">
                <div className="text-[#807D7E]">
                  {orderDetails?.createdAt?.slice(0, 10)}
                </div>
                <div className="text-black">
                  Your order has been successfully verified.
                </div>
              </div>
              <div className="flex flex-col gap-3 mx-auto bg-[#F6F6F6] rounded-lg px-6 py-6 w-[80%] ">
                {orderDetails?.orderItems?.map((item: any, idx: any) => (
                  <div key={idx}>
                    <ProductOrderCard data={item} />
                    <div className="border-b-[1px] my-4 w-[100%] border-[#BEBCBD] mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    // </AuthenticatedLayout>
  );
};

export default OrderDetails;
