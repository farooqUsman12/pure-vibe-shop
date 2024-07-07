export type Product = {
  // name?: string;
  productName:string;
  originalPrice: number;
  price: number;
  description: string;
  // ratings?: number;
  // images?: {
  //   public_id?: string;
  //   url?: string;
  // }[];
  imageSrc:string;
  category?: string;
  // seller?: string;
  // stock?: number;
  // numOfReviews?: number;
  // reviews: {
  //   user?: number;
  //   name?: string;
  //   rating?: number;
  //   comment?: string;
  // }[];
  // user?: number;
  // createdAt?: Date;
  discount?: string;
  id?: number;
};

export type SignUpType = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  receiveUpdates?: boolean;
};
