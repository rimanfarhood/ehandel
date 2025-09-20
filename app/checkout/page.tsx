"use client";

import { useCartStore } from "@/store/cart-store";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { checkoutAction }  from "./chceckout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (total === 0 || items.length === 0) {
    return (
      <div className="conatiner mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-semibold mb-4"> Your cart is empty</h1>
      </div>
    );
  }
  return (
    <div className="conatiner mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">Checkout</h1>
      <Card className="mac-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Order Summary </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item, key) => (
              <li key={key} className="flex flex-col gap-3 pb-2">
                <div className="flex justify-between">
                  <span className="text-xl font-medium">{item.name} </span>
                  <span className="text-xl font-semibold">
                    <span className="text-xs relative -top-2 -right-2 h-5 w-5 text-black p-2">
                      $
                    </span>
                    {item.price}
                  </span>
                </div>
                <div className="flex items-cenyer gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button
                    className="bg-black text-white"
                    variant="outline"
                    size="sm"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-lg font-semibold">
            Total:
            <span className="text-xs relative -top-2 -right-2 h-5 w-5 text-black p-2">
              $
            </span>
            {(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form action={checkoutAction} className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button type="submit" variant={"default"} className="w-full">Continue to payment</Button>
        <Button onClick={() => clearCart()} variant={"default"} className="w-full">Clear Cart</Button>
      </form>
    </div>
  );
}
