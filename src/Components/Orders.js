import React, { useState, useEffect } from 'react'
import { db } from '../Firebase/setup'
import '../css/orders.css'
import { useStateValue } from './StateProvider'
import { Order } from './Order'
import { useSelector } from 'react-redux'

export const Orders = () => {
    const [orders, setOrders] = useState([])
    // const [{ basket, user }, dispatch] = useStateValue();
    const user = useSelector(state => state.stateReducer.user)
    const basket = useSelector(state => state.stateReducer.basket)

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.multiFactor.user.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }
    }, [user]);


    return (
        <div className='orders'>
            <h1>Your orders</h1>

            <div className='orders__order'>
                {orders.map((order, index) => (
                    <Order order={order} key={index} />
                ))}
            </div>

        </div>
    )
}
