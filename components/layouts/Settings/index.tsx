"use client";
import AuthenticatedLayout from "@/shared/AuthenticatedLayout";
import { Switch } from "antd";
import React from "react";

const Settings = () => {
  return (
    <AuthenticatedLayout>
      <div className="container py-20">
        <div className="text-xl font-semibold">Account Settings</div>
        <div className="py-10">
          <b>Notifications</b>
          <div className="flex justify-between items-center">
            <div>Product updates and community announcements</div>
            <Switch className="bg-black" />
          </div>
        </div>
        <div>
          <b>Payment</b>
          <div className="flex items-center justify-between">
            <div>Stripe</div>
            <div className="p-2 px-4 rounded-xl border-2">Update</div>
          </div>
        </div>
        <div className="bg-black p-2 px-4 text-white w-fit rounded-lg mt-10">
          Save
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Settings;
