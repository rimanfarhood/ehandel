import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props)  => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} passHref>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
        {product.images?.[0] && (
          <div className="relative h-80 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>
            {product.description || "Ingen beskrivning tillgänglig."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-semibold">
            {price?.unit_amount
              ? `${price.unit_amount / 100} ${price.currency.toUpperCase()}`
              : "Pris saknas"}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
