import { useState, useEffect } from 'react'
import '../styles/Cart.css'


function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price,0)
    const amountTotal = cart.reduce((acc, plantType) => acc + plantType.amount,0)

    useEffect(() => {
        document.title =`GreenPlant: ${total}€ d'achats`
    }, [total])
    
    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' 
            onClick={() => setIsOpen(false)}>Close</button>
            
            {cart.length > 0 ?(
                <div>
                    <h2>Shopping cart  <span className='lmj-cart-count'>{amountTotal}</span></h2>
                    <ul>
                        {cart.map(({name, price, amount}, index) => (
                            <li key={`${name}-${index}`}>                           
                                {name} {price}€ x {amount}
                            </li>                                                       
                        ))}                    
                    </ul> 
                        <h3>Total : {total}€</h3>
                    <button className='lmj-cart-corbeille' onClick={() => updateCart([])}>Delete all</button>                                                       
                </div>
            ) : (
                <div>Your shopping cart is empty</div>
            )}                
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' 
            onClick={() => setIsOpen(true)}>🛒 Shopping cart
            <span className='lmj-cart-count'>{amountTotal}</span>
            </button>
        </div>
    )
            
}

export default Cart