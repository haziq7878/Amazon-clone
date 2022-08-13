import React from 'react'
import '../css/checkout.css'
import { Cart_Product } from './cart_Products'
import { useStateValue } from './StateProvider'
import { Subtotal } from './Subtotal'
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux'

export const Checkout = () => {
    //redux
    const user = useSelector(state => state.stateReducer.user)
    const basket = useSelector(state => state.stateReducer.basket)


    //useContext
    // const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h3>{user?.multiFactor.user.email}</h3>
                    <h2 className='checkout__title'>Your Amazon cart</h2>
                    {basket?.map((item, index) => (<Cart_Product key={index} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}
