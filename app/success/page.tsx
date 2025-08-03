"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart-store";

export default function SuccessPage() {
    const {clearCart} =  useCartStore();

    useEffect(() => {
        clearCart();
    },[clearCart])
    return (
        <div className="conatiner mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="mb-4">Thank you for your purchase, your order is being processed.</p>
        
        <Link className="text-pink-600 gover:underline" href={"/products"}>Continue shopping</Link> 
        </div>
    );
}