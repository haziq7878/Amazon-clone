import React from 'react'
import "../css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from '../Firebase/setup';
import { useDispatch, useSelector } from "react-redux";

function Header() {
    // const [{ basket, user }, dispatch] = useStateValue();
    const basket = useSelector(state => state.stateReducer.basket);
    const user = useSelector(state => state.stateReducer.user);

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Icon' />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className="header__searchIcon" />
            </div >

            <div className='header__nav'>
                <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
                    <div className='header__option' onClick={user ? handleAuth : () => { }}>
                        <span className='header__optionLineOne'>Hello {user?.multiFactor.user.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to={'/orders'} style={{ textDecoration: 'none' }}>
                    <div className='header__option' >
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </div>

            <Link to='/checkout' style={{ textDecoration: 'none' }}>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon className='Shopping_icon' />
                    <span className='header_optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </Link>
        </div >
    )
}

export { Header };