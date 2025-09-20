import Stripe from "stripe";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Fullscreen } from "lucide-react";


interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const imageUrl = product.images[0] || "/images/default-art.png";

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <div className="relative group cursor-pointer overflow-hidden border border-black">
        {/* Bild */}
        <div className="relative w-full h-96 sm:h-80 md:h-96">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold">{product.name}</h3>
          {product.description && (
            <p className="text-gray-200 mt-1 text-sm">{product.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};



// interface Props {
//   product: Stripe.Product;
// }

// export const ProductCard = ({ product }: Props) => {
//   const imageUrl = product.images[0] || "`/products/${product.id}" ;

//   return (
//     <div className="relative group cursor-pointer overflow-hidden border border-black">
//       {/* Bild */}
//       <div className="relative w-full h-96 sm:h-80 md:h-96">
//         <Image
//           src={product.images[0]}
//           alt={product.name}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
//         <h3 className="text-white text-xl font-semibold">{product.name}</h3>
//         {product.description && (
//           <p className="text-gray-200 mt-1 text-sm">{product.description}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// interface Props {
//   product: Stripe.Product;
// }

// export const ProductCard = ({ product }: Props) => {
//   const price = product.default_price as Stripe.Price;
//   return (
//     <Link href={`/products/${product.id}`} className="block h-full">
//       <Card className="group hover:shadow:2xl transition duration-300 py-0 h-full flex flex-col border-gray-3000 gap-0">
//         {product.images && product.images[0] && (
//           <div className="relative h-60 w-full mb-2">
//             <Image
//               src={product.images[0]}
//               alt={product.name}
//               style={{objectFit:"contain"}}
//               fill={false}
//               className="group hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
//               width={400}
//               height={200}
//             />
//           </div>
//         )}

//           <CardHeader className="p-4">
//             <CardTitle className="text-3xl font-bold text-gray-800">
//               {product.name}
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-4 flex-grow flex flex-col  justify-between">
//             {product.description && (
//               <p className="text-gray-600 text-sm mb-2">
//                 {product.description}
//               </p>
//             )}
//             {price && price.unit_amount && (
//               <p className="text-lg font-semibold text-gray-900">
//                 ${(price.unit_amount / 100).toFixed(2)}
//               </p>
//             )}
//             <Button className="mt-4 bg-black text-white">View Details</Button>
//           </CardContent>
//       </Card>
//     </Link>
//   );
// };
