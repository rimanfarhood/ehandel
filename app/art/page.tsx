import { stripe } from "@/lib/stripe";

export default function ArtPage() {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
    });
    return (
        <div>
            <h1>All Art</h1>
            <ProductsList products={products.data}/>
        </div>
    )
}