"use client";
import { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/images/clown.png", alt: "Clown painting" },
    { src: "/images/lila.jpg", alt: "Lila painting" },
    { src: "/images/splash.png", alt: "Splash painting" },
    { src: "/images/öga.png", alt: "Öga painting" },
  ];

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
          <h2 className="text-3xl ">Nivellé Novéira</h2>
          <p>
            Hej, kul att du hittat hit! Jag är Nivellé och att måla är bland det
            härligaste jag vet. När jag målar har jag sällan en idé om
            resultatet i förväg, utan låter känslan av färg, drag och pigment
            styra hela processen. Välkommen till min konstvärld!{" "}
            <Link href="/about" className="italic underline hover:not-italic">
              Läs mer
            </Link>
          </p>
        </div>

        {/* Right: Mini Gallery */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full border border-black h-40 object-cover transition-transform duration-300 govwe:scale-105"
              />
            </div>
          ))}
          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Full Size"
                className="max-w-full max-h-full"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-black text-gray-200 w-full rounded mb-6">
        <h2 className="text-2xl mb-6 font-bold">Aktuellt</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Första Kollectionen</h3>
            <p>Titta förbi 1 november för att kika på första släppet.</p>
            <Link href="/shop" className="underline hover:text-gray-400">
              Till shoppen →
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Kommande utställningar</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Planket Kristianstad</span> – 20
                sep 2025
                <Link
                  href="https://www.kristianstad.se/byggaboochmiljo/samhallsutveckling/nasbyenplatsistandigutveckling/stadsutvecklingnasby/planket.53951.html"
                  target="_blank"
                  className="underline hover:text-gray-400 ml-2"
                >
                  Läs mer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
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
