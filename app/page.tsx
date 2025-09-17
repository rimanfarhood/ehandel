import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";
import "@/app/globals.css";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 bg-black text-white">
        <h1 className="text-xl md:text-3xl font-bold mb-6 tracking-widest">
          ACVARELLO – Only Originals
        </h1>
        <p className="text-sm  mb-10">
          Each painting is exlusive and holds its own unique DNA — .
        </p>
        <div className="flex gap-4">
          <Link
            href="/art"
            className="px-8 py-3 border border-white bg-white text-black rounded-full hover:bg-black hover:text-white transition"
          >
            Utforska Konst
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Om Konstnären
          </Link>
        </div>
      </section>

      <section
        id="about-values"
        className="py-20 px-6 max-w-6xl w-full flex flex-col md:flex-row items-center gap-12"
      >
        {/* Left: About / Values */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl ">Novalié Novéira</h2>
          <p>
            Hej, kul att du hittat hit! Jag är Novalié och att måla är bland det
            härligaste jag vet. När jag målar har sällan en idé om resultatet i
            förväg, utan låter känslan av färg, drag och pigment styra hela
            processen.{" "}
            <Link href="/about" className="italic underline hover:not-italic">
              Läs mer
            </Link>
          </p>
        </div>

        {/* Right: Mini Gallery */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src=""
              alt="Painting"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src="/image" alt="" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src=""
              alt="Painting"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src=""
              alt="Painting"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 bg-gray-100 w-full text-center">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <p>(infoga kontaktinfo här, t.ex. email, sociala medier)</p>
        <p>(infoga eventuell adress eller annat info)</p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        <p>(infoga ev. copyright / note här)</p>
      </footer>
    </main>
  );
}

// import Image from "next/image";
// import styles from "./page.module.css";
// import { stripe } from "@/lib/stripe";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Carousel } from "@/components/ui/carousel";
// import "@/app/globals.css";

// export default async function Home() {
//   const products = await stripe.products.list({
//     expand: ["data.default_price"],
//     limit: 5,
//   });

//   return (
//     <div>
//       <section className="rounded bg-neutral-100 py-8 sm:py12">
//         <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
//           <div className="max-w-md space-y-4">
//             <h2 className="sm:text-sm font-bold  md:text-xl text-black">
//               ACVARELLO – Only Originals.
//             </h2>
//             <p className="text-black text-sm capitalize">
//               Each painting holds its own unique DNA — impossible to replicate.
//             </p>
//             <Button
//               asChild
//               variant={"default"}
//               className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white bg-black"
//             >
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-full px-6 py-3 tracking-widest"
//               >
//                 Discover Exclusive Art
//               </Link>
//             </Button>
//           </div>
//           <Image
//             alt="Art"
//             width={700}
//             height={700}
//             src={products.data[0].images[0]}
//             className="rounded"
//           />
//         </div>
//       </section>
//       <section className="py-8">
//         <Carousel products={products.data} />
//       </section>
//     </div>
//   );
// }
