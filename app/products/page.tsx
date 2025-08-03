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