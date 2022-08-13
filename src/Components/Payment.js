import React, { useState, useEffect } from 'react'
import '../css/payment.css'
import { useStateValue } from './StateProvider'
import { Cart_Product } from './cart_Products'
import { Link, useNavigate } from 'react-router-dom'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
// import { getBasketTotal } from './reducer'
import { EMPTY_BASKET, getBasketTotal } from './Features/Reducer'
import axios from './axios'
import { db } from '../Firebase/setup'
import { useDispatch, useSelector } from 'react-redux'



export const Payment = () => {
    const Navigate = useNavigate();
    //redux
    const basket = useSelector(state => state.stateReducer.basket)
    const user = useSelector(state => state.stateReducer.user)
    const dispatch = useDispatch()
    //useContext 
    // const [{ basket, user }, dispatch] = useStateValue();
    const [err, setErr] = useState(null);
    const [disabled, setDisable] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setclientSecret] = useState(true);

    useEffect(() => {
        // generate special client secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'get',
                //Stripe expects the total in a currencies subunits
                url: `/payment/create?total=${getBasketTotal(basket) * 100 > 1 ? getBasketTotal(basket) * 100 : 100}`
            })
            // console.log(response);
            setclientSecret(response.data.client_secret)
        }
        getClientSecret();
        return () => {

        };
    }, [basket]);

    // console.log("Secret key is", clientSecret)

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(async ({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db.collection('users')
                .doc(user?.id)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setErr(null);
            setProcessing(false);
            dispatch(EMPTY_BASKET())
            // dispatch({
            //     type: "EMPTY_BASKET"
            // })

            Navigate('/orders', { replace: true })

        })

    }

    const handleChange = (e) => {
        setDisable(e.empty);
        setErr(e.error ? e.error.message : '');
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.multiFactor.user.email}</p>
                        <p>123 React Lane</p>
                        <p>Australia </p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review item and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket?.map((item, index) => (<Cart_Product key={index} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Details</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total:{value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                                </button>
                            </div>
                            {err && <div>{err}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
