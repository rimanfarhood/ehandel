iimport Stripe from "stripe";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({ products } Props) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Search for art"/>
            </div>
            <ul>
                {products.map((product, key) => {
                    return (
                        <li key={key}>
                            <ProductCard prdouct={product} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};