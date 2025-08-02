"use client";

import Link from "next/link";
import "@/app/globals.css";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";


export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 760) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky-top top-0 z-50 w-full top-0 z-50 bg-black text-white h-25">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-3xl  hover:text-white-600 p-2  tracking-wider">
          Acvarello
        </Link>

        <div className="hidden md:flex space-x-6 lg:text-l">
          <Link href="/" className="hover:text-pink-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-pink-600">
            Art
          </Link>
          <Link href="/contact" className="hover:text-pink-600">
            Contact
          </Link>
          <Link href="/about" className="hover:text-pink-600">
            About us
          </Link>
          <Link href="/checkout" className="hover:text-pink-600">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="">
            <ShoppingCartIcon className="h-6 w-6 " />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {" "}
                {cartCount}{" "}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6 " />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
        </div>
          {mobileOpen && (
            <nav className="md:hidden bg-black shadow-md">
              {""}
              <ul className="flex flex-col p-4 space-y-2">
                {""}
                <li>
                  <Link className="block hover:text-pink-600" href={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="block hover:text-pink-600" href={"/products"}>
                    Art
                  </Link>
                </li>
                <li>
                  <Link className="block hover:text-pink-600" href={"/contact"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="block hover:text-pink-600" href={"/about"}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="block hover:text-pink-600" href={"/checkout"}>
                    Checkout
                  </Link>
                </li>
              </ul>
            </nav>
          )}
    </nav>
  );
};