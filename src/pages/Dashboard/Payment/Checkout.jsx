import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const Checkout = ({ price, cart }) => {

    const [cardError, setCardError] = useState()

    const [axiosSecure] = useAxiosSecure()
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState();

    const { user } = useAuth();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('payment method', paymentMethod);
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    }
                }
            }
        )

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent.id);
        // setTrxID(paymentIntent?.id);

        if (paymentIntent.status === "succeeded") {
            const payment = {
                email: user?.email,
                trxID: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItemID: cart.map(n => n._id),
                menuItemsId: cart.map(item => item.menuItemId),
                itemsName: cart.map(item => item.name),
                status: 'service pending'
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.acknowledged) {
                        Swal.fire('okay')
                    }
                })

        }
    }
    return (
        <>
            <p>{cardError}</p>
            <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=" btn btn-primary btn-sm mt-3" type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form></>
    );
};

export default Checkout;