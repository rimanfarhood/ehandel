"use clinet";

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
// import { useCartStore } from "@/store/useCartStore"

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div>
      {product.images && product.images[0] && (
        <div className="relative h-60 w-full mb-2">
          <Image
            src={product.images[0]}
            alt={product.name}
            style={{ objectFit: "contain" }}
            fill={false}
            className="group hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            width={400}
            height={200}
          />
        </div>
      )}
      <div>
        <h1>{product.name}</h1>
        {product.description && <p>{product.description}</p>}
        {price && price.unit_amount && (
          <p className="text-lg font-semibold text-gray-900">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};
