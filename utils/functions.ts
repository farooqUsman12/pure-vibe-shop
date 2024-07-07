export const getTotalPrice = (cartItems: any) => {
  let totalPrice = 0;
  cartItems.forEach((item: any) => {
    totalPrice += item?.price * item?.quantity;
  });
  return totalPrice;
};

export function calculateDiscountPercentage(originalPrice:number, price:number) {
  return (((originalPrice - price) / originalPrice) * 100).toFixed(0);
}