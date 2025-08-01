import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing secret key")
}
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!); 