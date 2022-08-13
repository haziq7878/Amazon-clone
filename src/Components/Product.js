import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../css/Project.css"
import { useStateValue } from './StateProvider'
import { ADD_TO_BASKET } from './Features/Reducer'

function Product({ index, id, title, image, price, rating }) {
    //redux
    const basket = useSelector(state => state.stateReducer.basket)
    const dispatch = useDispatch()

    //useContext
    // const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch(ADD_TO_BASKET({
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        }))

        // dispatch({
        //     type: 'ADD_TO_BASKET',
        //     item: {
        //         id: id,
        //         title: title,
        //         image: image,
        //         price: price,
        //         rating: rating
        //     }
        // })
    }
    return (
        <div className='product' key={index}>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p >
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
            </div>
            <img src={image} alt='pic' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product