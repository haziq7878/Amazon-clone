import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Features/Reducer'
import { useSelector } from 'react-redux'


export const Subtotal = () => {
    const Navigator = useNavigate();
    // const [state, dispatch] = useStateValue();
    const basket = useSelector(state => state.stateReducer.basket)
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button type='submit' className='subtotal__checkout' onClick={e => Navigator('/payment')}>Proceed to Checkout</button>
        </div>
    )
}



// to get total value from basket 
//state.basket.reduce((prev, curv) => prev + curv.price, 0).toFixed(2)
