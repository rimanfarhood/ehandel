

// export default function ArtPage() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
//       {/* Rubrik */}
//       <h1 className="text-xl md:text-3xl font-bold mb-6 tracking-wide">
//         1 November öppnar vi webbshoppen, !
//       </h1>

//       {/* Text */}
//       <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
//         Vi arbetar för att göra din upplevelse så exklusiv som möjligt. Snart kan du handla våra originalkonstverk direkt online.
//       </p>

//       {/* Eventuell CTA / Mail */}
//       <p className="text-sm text-gray-500">
//         Vill du bli notifierad när shopen öppnar? Skicka ett mail till{" "}
//         <a href="mailto:nivellenoveria@acvarello.se" className="underline">
          
//         </a>
//       </p>
//     </main>
//   );
// }



import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

export default async function ArtPage() {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
    });
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mb-2">All Art</h1>
            <ProductList products={products.data}/>
            
        </div>
    )
}