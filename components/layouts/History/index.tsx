"use client";
import TableUi from "@/components/ui/TableUi";
import { getTicketAction } from "@/redux/actions/ticketActions";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTicket from "./design/CreateTicket";
import { Modal } from "antd";
import AuthenticatedLayout from "@/shared/AuthenticatedLayout";

const columns = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "_id",
    render: (id: string) => <div># {id}</div>,
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Status",
    dataIndex: ["shippingInfo", "address"],
    key: "address",
    render: () => <div>Pending</div>,
  },
  {
    title: "Created At",
    key: "createdAt",
    dataIndex: "createdAt",
  },
];

const History = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getTicketAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <AuthenticatedLayout>
      <Modal
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <CreateTicket setModalVisible={handleCancel} />
      </Modal>
      <div className="container py-20">
        <div className="flex justify-between">
          <div className="text-xl font-semibold mb-10">Ticket History</div>
          <div
            className="bg-black text-white w-40 rounded-lg py-2 text-center h-fit cursor-pointer"
            onClick={showModal}
          >
            Generate Ticket
          </div>
        </div>

        <TableUi columns={columns} data={tickets} />
      </div>
    </AuthenticatedLayout>
  );
};

export default History;
