import { createTicketAction } from "@/redux/actions/ticketActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CreateTicket = ({ setModalVisible }: any) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    orderId: "",
    subject: "",
    details: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(createTicketAction(formData));
    setModalVisible(false);
  };

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div>
      <div className="text-xl">Generate Ticket</div>
      <form id="myForm" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2  mt-10 w-full">
          <div className="text-[#7d7d7e] text-lg  font-bold">Order ID</div>
          <div className="border-2 py-3 bg-white rounded-lg w-full">
            <input
              className="px-2 text-lg w-full border-none outline-none"
              type="text"
              id="orderId"
              value={formData.orderId}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2  mt-5 w-full">
          <div className="text-[#7d7d7e] text-lg  font-bold">Subject</div>
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
          <div className="text-[#7d7d7e] text-lg  font-bold">Details</div>
          <div className="border-2 py-3 bg-white rounded-lg w-full">
            <textarea
              id="details"
              className="h-56 w-full px-3 text-lg border-none outline-none"
              value={formData.details}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-navy text-white p-2 w-32 rounded-xl mx-auto mt-4"
        >
          Create Now
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
