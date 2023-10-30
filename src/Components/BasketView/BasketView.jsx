// import style css
import "./BasketView.scss"
// import link 
import { Link } from 'react-router-dom'
import { BsArrowLeft,BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import { useEffect } from "react";

function BasketView() {
	    const {state,totalPraduct,increase,decrease,removeProduct,}=useContext(GlobalContext)
     useEffect(()=>{
        window.scrollTo(0,0)
	 },[])
		return (
	<section id='BasketView'>
		<div className='container-view-cart'>
				<div className='view-cart-header'>
					<Link className="view-card-link" to="/">
                     <span  className='arrow-icon-basket-allProduct'>
                          <BsArrowLeft/>
					 </span>
					 Continue shopping
					</Link>
					<h2 className="your-cart">Your cart</h2>
					</div>
				
		<div className='view-cart-wrapper'>
			<div className="view-cart-praducts">
				<div className="view-cart-praducts-head">
					<span className="head-image divide-img">IMAGE</span>
					<span className="head-name divide-name">NAME</span>
					<span className="head-price divide-price">PRICE</span>
					<span className="head-quantity divide-quantity">QUANTITY</span>
					<span className="head-total divide-total">TOTAL</span>
				</div>    
				{
					state.basket.map(item=>(
                   <div className="view-cart-product-list" key={item.id}>
					<img className="view-cart-img divide-img" src={item.coverImg} alt="" />
					<span className="view-cart-name divide-name">{item.title}</span>
					<span className="view-cart-price divide-price">{item.price} USD</span>
					<div className="art-azal divide-quantity">
                                    <button onClick={()=>increase(item.id)} className="art">+</button>
                                    <span className="pr-count">{item.count}</span>
                                    <button onClick={()=>decrease(item.id)} className="azal">-</button>
                                </div>
					<div className="bascet-pr-price-delete divide-total">
                         <span className="bascet-pr-price">{item.price} USD</span>
                         <span onClick={()=>removeProduct(item.id)} ><BsTrash className="delete-icon"/> </span>
                        </div>
				</div>
					))
				}
				
				
			</div>
			<div className="view-cart-total-textarea">
				<div className="texarea-wrapper">
					<h2 className="textarea-header">ORDER SPECIAL INSTRUCTIONS</h2>
				<textarea className="textarea">

				</textarea>
				</div>
               <div className="view-cart-total">
				<h4 className="subtotal">Subtotal</h4>
				<span className="total">
				{totalPraduct} USD
				</span>
				<p className="total-info">Taxes and shipping calculated at checkout</p>
			    <Link to="" className="proceedCheckout">
					Proceed to checkout
				</Link>
			   </div>
			</div>
		</div>
			
		</div>
	</section>
  )
}

export default BasketView
