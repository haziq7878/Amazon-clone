import React from 'react'
import "../css/cart_product.css"
import { useStateValue } from './StateProvider'
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_BASKET } from './Features/Reducer';


export const Cart_Product = ({ index, id, title, image, price, rating, hidden }) => {
    //redux
    const basket = useSelector(state => state.stateReducer.basket);
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(REMOVE_FROM_BASKET({ id: id }))
    }

    // const [state, dispatch] = useStateValue();

    // const removeItem = () => {
    //     dispatch({
    //         type: 'REMOVE_FROM_BASKET',
    //         id: id
    //     })
    // }

    return (
        <div className='checkoutProduct' key={index}>
            <img className='checkoutProduct__image' src={image} alt="pic" />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p >
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                {!hidden && (<button onClick={removeItem}>remove from Basket</button>)}
            </div>
        </div>
    )
}

Cart_Product.defaultProps = {
    hidden: false
}