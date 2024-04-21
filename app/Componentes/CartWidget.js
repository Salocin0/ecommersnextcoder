'use client'
import Link from "next/link";
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UseContext } from "./UseContext";

const CartWidget = () => {
    const { totalItems } = useContext(UseContext);
    return (
        <Link href="/carrito">
            <FontAwesomeIcon className="hover:text-gray-300" icon={faShoppingCart} />
            <span className="text-sm">{totalItems}</span>
        </Link>
    )
}

export default CartWidget