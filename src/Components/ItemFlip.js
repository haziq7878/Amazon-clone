import React from 'react'
import FlipMove from 'react-flip-move';
import { Cart_Product } from './cart_Products'

export const ItemFlip = ({ basket }) => {
    return (
        <FlipMove>
            {basket?.map((item, index) => (<Cart_Product key={index} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />))}
        </FlipMove>
    )
}
