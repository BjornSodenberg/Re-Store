import React from 'react';
import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <a className="logo text-dark" href="#c">ReStore</a>
            <a className="shopping-cart" href="#c">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </a>
        </header>
    )
}

export default ShopHeader;