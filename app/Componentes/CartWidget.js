import Link from "next/link";
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <Link href="/carrito">
            <FontAwesomeIcon className="hover:text-gray-300" icon={faShoppingCart} />
        </Link>
    )
}

export default CartWidget