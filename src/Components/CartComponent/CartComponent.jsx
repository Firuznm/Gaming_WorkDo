import React, {  useContext, useState } from 'react'
// import style css
import "./CartComponent.scss"
import BtnMini from '../../Components/BtnMini/BtnMini'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/Context'
// react icon import
import { FiHeart, FiEye } from 'react-icons/fi';
import { FaRotate } from 'react-icons/fa6';




function CartComponent({product, bsWeekTitleColor, bsWeekSelectedBGcolor}) {
	const [modalOpenClose,setModalOpenClose]=useState(false)

	

	const {addToCart }=useContext(GlobalContext)
	const [variant, setVariant] = useState(Object.keys(product.options[product.optionsType])[0])

	const changeHandle = e => setVariant(e.target.value);
    
    const selectedOption = product.options[product.optionsType];
    const selectedVariant = selectedOption && selectedOption[variant];

	const openModal=()=>{
     setModalOpenClose(true)
	}
	const closeModal=()=>{
		setModalOpenClose(false)
	}
	
  return (      
	         <div   className="pr-cart">      
				<h6 style={{color:bsWeekTitleColor}} className='pr-title'>{product.title}</h6>
				<span className='pr-type'>TYPE: {product.type}</span>
 {product.new ? <button className='new-btn'>{product.new}</button> : ""}
                <Link className='link' to={`/detalist/${product.title}`}>  
				<img className='pr-img' src={selectedVariant && selectedVariant?.coverImg} alt={product.title} />
				</Link>
				<span className='pr-prType'>{product.optionsType}</span>
				<select  style={{backgroundColor:bsWeekSelectedBGcolor}} className='pr-select'onChange={changeHandle}>
				{Object.keys(product.options[product.optionsType]).map(key => (
						<option key={key} value={key}>{key}</option>
					))}
				</select>
				<div className='price-add-btn'>
					<div className='cart-price'>
					<span className='pr-regular'>{selectedVariant && selectedVariant.price} USD</span>
                    <span className='pr-sale'>{selectedVariant && selectedVariant.sale} USD</span>

					</div>
					<span onClick={()=>addToCart(product)}>
					<BtnMini title={"Add to cart"}/> 
					</span>
				</div>
				<div className='wishlist-modal-compare'>
					<Link ><FiHeart className='wishlist-icon'/></Link>
					<span>
						<hr className='line-left-right'/>
					<FiEye className='eye-icon' onClick={openModal}/>
				
					<hr className='line-left-right'/>
					</span>
					<Link><FaRotate className='rotate-icon'/></Link>
				</div>
			{modalOpenClose ?	
			<div className='modal'>
				    <div className='modal-info'>
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						<span>{product.optionsType}</span>
						<section>
							{Object.keys(product.options[product.optionsType]).map(key=>(
								<option key={Math.random()} value={key}>{key}</option>
							))}
						</section>
						<span>{product.price} USD</span>
						<span>{product.sale}</span>
					</div>
					<div className='modal-slider'></div>
					<div className='close' onClick={closeModal}>close</div>
				</div>
				: ""
				 }
				</div>
  )
}

export default CartComponent

	// console.log("cart ", product);

// console.log("1",product.options[product.optionsType]);  // [product.optionsType]="size" ve ya "color"
// 	console.log("2",Object.keys(product.options[product.optionsType]));
//    console.log("3",Object.keys(product.options[product.optionsType])[0]); 
//    console.log("4",Object.entries((product.options[product.optionsType])));

	{/* <span className='pr-regular'>{product.options[product.optionsType][variant].price} USD</span> */}
	{/* <span className='pr-sale'>{product.options[product.optionsType][variant].sale} USD</span> */}