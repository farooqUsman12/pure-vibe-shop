/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import ProductDetails2 from "@/components/modules/ProductDetails/designs/ProductDetails2";
import RelatedProducts from "@/components/modules/RelatedProducts";
import Layout from "@/shared/Layout";
import { useParams } from "next/navigation";
import ProductImage from "./designs/ProductImage";
import ProductDesc from "./designs/ProductDesc";
import API from "@/redux/services/base.service";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState<any>([]);

  const getData = async () => {
    try {
      let res = await API.get(`/product/${params.id}`);
      setProduct(res?.data?.product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  return (
    <Layout currentPage="Shop">
      <div className="container mt-20">
        <div className="grid grid-cols-3 gap-6 mb-12">
          <ProductImage product={product} />
          <ProductDesc product={product} />
        </div>
        <ProductDetails2 />
        <RelatedProducts />
      </div>
    </Layout>
  );
};

export default ProductDetails;
