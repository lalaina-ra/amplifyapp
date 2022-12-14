import { useState, useEffect } from 'react'
import Banner from './Banner'
import lg from '../assets/lg.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'


function App() {
  const savedCart = localStorage.getItem('cart') //read localStorage with getItem
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])  
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart)) //add an enter with setItem
	}, [cart])

  return (
    <div>
      <div className='lmj-header'>
        <Banner >
          <img src={lg} alt='GreenPlant Store' className='lmj-logo' />
          <h1 className='lmj-title'>GreenPlant Store</h1>
        </Banner>
        <Cart cart={cart} updateCart={updateCart} />
      </div>      
      <div className='lmj-layout-inner'>        
        <ShoppingList cart={cart} updateCart={updateCart} />        
      </div>      
      <Footer/>
    </div>
  )
}

export default App;
