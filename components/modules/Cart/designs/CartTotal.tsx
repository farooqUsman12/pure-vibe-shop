import { checkoutAction } from "@/redux/actions/payment.action";
import React from "react";
import { useDispatch } from "react-redux";

const CartTotal = ({ total }: any) => {
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    dispatch(
      checkoutAction({
        orderItems: [
          {
            name: {
              type: "product 1",
              //required: true
            },
            quantity: {
              type: Number,
              //required: true
            },
            image: {
              type: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              //required: true
            },
            price: {
              type: 20,
              //required: true
            },
          },
        ],
      })
    );
  };

  return (
    <div className="col-span-1 flex flex-col h-fit gap-4 border-2 rounded-lg p-8 font-semibold">
      <div className="text-black text-2xl font-black">Cart Total</div>
      <div className="flex justify-between ">
        <div className="text-sm text-[#4D4D4D]">Subtotal:</div>
        <div className="text-sm font-black">${total}</div>
      </div>
      <div className="border-b-2"></div>
      <div className="flex justify-between ">
        <div className="text-sm text-[#4D4D4D]">Shipping:</div>
        <div className="text-sm font-black">Free</div>
      </div>
      <div className="border-b-2"></div>
      <div className="flex justify-between ">
        <div className="text-base text-[#4D4D4D] font-bold">Total:</div>
        <div className="text-base font-black">${total}</div>
      </div>
      <div
        className="border-2 bg-navy rounded-full text-center p-4 text-white font-black cursor-pointer"
        onClick={checkoutHandler}
      >
        Proceed to checkout
      </div>
    </div>
  );
};

export default CartTotal;
