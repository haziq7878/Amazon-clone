import React from 'react'
import '../css/Order.css'
import moment from 'moment'
import { Cart_Product } from './cart_Products'
import CurrencyFormat from 'react-currency-format'


export const Order = ({ order }) => {
    console.log(order)
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item, index) => (
                <Cart_Product key={index} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} hidden={true} />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order total:{value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

        </div>
    )
}
