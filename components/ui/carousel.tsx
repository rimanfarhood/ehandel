"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            width={400}
            height={300}
            objectFit="contain"
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {currentProduct.name}
        </CardTitle>
        {price && price.unit_amount && (
          <p className="text-xl text-black">
           Price ${(price.unit_amount / 100)}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

// "use client";

// import Stripe from "stripe";
// import { Card, CardContent, CardTitle } from "./card";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// interface Props {
//     products: Stripe.Product[];
// }

// // Define react component 
// export const Carousel = ({ products }: Props) => { // Get List of stripe products
//     const [current, setCurrent] = useState<number>(0); // Håller kolll på vilken produkt som visas
//                                                  // Index och funktion för att uppdatera index

//     // useState Bildspels timer 
//     useEffect(() => {
//         const interval = setInterval(() => { // Byter produkt var 6e sekund
//             setCurrent((prev)=> (prev + 1) % products.length) // Makes sure wee loop back to the beggining
//         }, 6000);
//         return () => clearInterval(interval) // Körs när komponent tas bort för att udnvika minneslöcökor
//     }, [products.length]);

//     // Gets current product and price
//     const currentProduct = products[current];

//     const price = currentProduct.default_price as Stripe.Price;

//     return (
//          <Card className="relative overflow-hidden rounded-lg shadow-md border-blue-300 text-black">
//             {currentProduct.images && currentProduct.images[0]&& (
//                  <div className="relative h-80 w-full">
//                     <Image
//                       src={currentProduct.images[0]}
//                       alt={currentProduct.name}
//                        layout="center"
//                         objectFit="center"
//                         className="transition-opacity duration-500 ease-in-out"
//                         width={500}
//                         height={600}
//                     />
//                 </div>
//             )}
            
//             <CardContent className="absolute  inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
//                 <CardTitle className="text-3xl font-bold text-white mb-2">{currentProduct.name}</CardTitle>
//                 {price && price.unit_amount && <p>${price.unit_amount / 100}</p>}
//             </CardContent>
//         </Card>
//         // Imaage
//         // Product Name
//         // Product Price
//     );
// }

// Sum
// Funktion	            Beskrivning
// Automatiskt          bildspel	Byter visad produkt var tredje sekund
// Bildvisning	        Visar produktens första bild i full bredd
// Produktdata	        Visar namn och pris (om pris finns)
// Stripe-integration	Bygger på Stripe:s Product- och Price-objekt
// Responsiv bild	    next/image optimerar bildvisning för webben
// ---------------------------------------

// "use client";

// import Stripe from "stripe";
// import { Card } from "./card";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import "@/app/globals.css";

// interface Props {
//     products: Stripe.Product[];
// }

// export const Carousel = ({ products }: Props) => {
//     const [current, setCurrent] = useState<number>(0);

//     if (!products || products.length === 0) {
//         return <div className="text-white">No products available.</div>;
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % products.length);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, [products]);

//     const currentProduct = products[current];
//     const price = currentProduct?.default_price as Stripe.Price;

//     return (
//         <Card className="relative overflow-hidden rounded-lg shadow-md border-black-300 ">
//             {currentProduct.images && currentProduct.images[0] && (
//                 <div className="relative h-80 w-full">
//                     <Image
//                         src={currentProduct.images[0]}
//                         alt={currentProduct.name}
//                         fill
//                         className="object-cover"
//                     />
//                 </div>
//             )}
//         </Card>
//     );
// };

