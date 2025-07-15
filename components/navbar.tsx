import Link from "next/link"; 

export const Navbar = () => {
    return (
        <nav className="top-0 bg-black text-white h-25">
            <div className="container mx-auto flex item-center justify-between px-5">
                <Link href="/">Acvarello</Link>
            </div>
            <div className="flex">
                <Link href="/">Home</Link>
                <Link href="/art">Art</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About us</Link>
                <Link href="/checkout">Checkout</Link>
            </div>
            <div>

            </div>
        </nav>
    );
};