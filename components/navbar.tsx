import Link from "next/link"; 
import "@/app/globals.css";

export const Navbar = () => {
    return (
        <nav className="w-full top-0 z-50 bg-black text-white h-25">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                
                {/* Vänster: logga */}
                <Link href="/" className="text-3xl  hover:text-white-600 p-2  tracking-wider">
                    Acvarello
                </Link>

                {/* Höger: navigation */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/">Home</Link>
                    <Link href="/products">Art</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About us</Link>
                    <Link href="/checkout">Checkout</Link>
                </div>

            </div>
        </nav>
    );
};
// import Link from "next/link"; 
// import "@/app/globals.css";

// export const Navbar = () => {
//     return (
//         <nav className=" w-full top-0 z-50 bg-black text-white h-25">
//             <div className="container mx-auto flex p">
//                 <Link href="/" className="hover:text-white-600 p-2 font-bold">Acvarello</Link>
//             </div>
//             <div className="justify-end">
//                 <div className="hidden md:flex justify-start space-x-6 m-5 p w-80">
//                     <Link href="/">Home</Link>
//                     <Link href="/art">Art</Link>
//                     <Link href="/contact">Contact</Link>
//                     <Link href="/about">About us</Link>
//                     <Link href="/checkout">Checkout</Link>
//                 </div>
//             </div>
//             <div>

//             </div>
//         </nav>
//     );
// };