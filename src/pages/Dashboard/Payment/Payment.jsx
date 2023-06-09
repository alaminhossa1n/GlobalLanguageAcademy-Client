import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    const [cart] = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const price = parseFloat(total.toFixed(2));
    
    return (
        <div className="w-full">
            payment
            <Elements stripe={stripePromise}>
                <Checkout
                    cart={cart}
                    price={price}>
                </Checkout>
            </Elements>
        </div>
    );
};

export default Payment;