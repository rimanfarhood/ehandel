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
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="next-3xl font-bold tracking-tight md:text-4xl text-black">
              Welcome to Acvarello
            </h2>
            <p className="text-black">
              Discover the latest original abstract art
            </p>
            <Button
              asChild
              variant={"default"}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white bg-black"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Art"
            width={700}
            height={700}
            src={products.data[0].images[0]}
            className="rounded"
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
