import { useState, useEffect } from 'react'
import '../styles/Cart.css'


function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price,0)

    useEffect(() => {
        document.title =`LMJ: ${total}€ d'achats`
    }, [total])
    
    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' 
            onClick={() => setIsOpen(false)}>Close</button>
            
            {cart.length > 0 ?(
                <div>
                    <h2>Shopping cart</h2>
                    <ul>
                        {cart.map(({name, price, amount}, index) => (
                            <li>
                              <div key={`${name}`-`${index}`}>                                
                                {name} {price}€ x {amount}                             
                              </div>     
                            </li>
                                                  
                        ))}                    
                    </ul> 
                        <h3>Total : {total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>                                                       
                </div>
            ) : (
                <div>Your shopping cart is empty</div>
            )}                
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' 
            onClick={() => setIsOpen(true)}>🛒 Shopping cart</button>
        </div>
    )
            
}

export default Cart