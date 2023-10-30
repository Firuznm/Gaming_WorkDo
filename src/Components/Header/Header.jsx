import React, { useContext, useState } from "react";
// import style css
import "./Header.scss";
// img import
import DrMenuImg from "../../assets/images/dr-menu-img.webp";
// react icons
import { FiChevronDown } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { BsTrash,BsArrowRight } from "react-icons/bs";
import BtnMini from "../BtnMini/BtnMini";
import { GlobalContext } from "../../Context/Context";
import { Link } from "react-router-dom";
  


function Header() {
    const {state,increase,decrease,removeProduct,totalProductCount,totalPraduct}= useContext(GlobalContext)
    // console.log("header ",state.basket.options[0])[1].price
    // console.log("ddd", Object.keys(state.basket.options));     
    const [navMenuColor, setNavMenuColor]=useState(false)
    const [showHiden, setShowHiden]= useState(false)

    const basketShowHiden=()=>{
        setShowHiden(!showHiden)
    }
    
    const navMenuColorChange=()=>{
        if(window.scrollY > 70){
            setNavMenuColor(true)
        }else{
            setNavMenuColor(false)
        }
    }

    window.addEventListener("scroll", navMenuColorChange); 

    return (
        <section id="header-main">
            <div className={navMenuColor ? "header noActiveMenu" : "header"}>     
             <nav className="nav">
                    <div className="nav-top container">
                        <div className="pages-list">
                            <span className="gaming-accessories">
                                GamingAccessories
                                <FiChevronDown className="gaming-rotate-icon" />
                                <div className="drp-menu">
                                    <div className="drop-down-gaming-accessories container">
                                        <ul>
                                            <span className="drp-menu-list-name">
                                                Pro gaming
                                            </span>
                                            <li>
                                                <a >Game Console</a>
                                            </li>
                                            <li>
                                                <a >Game Remote</a>
                                            </li>
                                            <li>
                                                <a >Game Carts</a>
                                            </li>
                                            <li>
                                                <a >Game Chairs</a>
                                            </li>
                                            <li>
                                                <a >Game Moniter</a>
                                            </li>
                                            <li>
                                                <a >Game PCs</a>
                                            </li>
                                        </ul>

                                        <ul>
                                            <span className="drp-menu-list-name">
                                                New Accessories
                                            </span>
                                            <li>
                                                <a >Alien ware Monitor</a>
                                            </li>
                                            <li>
                                                <a >
                                                    G-Series Curved VA Monitor
                                                </a>
                                            </li>
                                            <li>
                                                <a >
                                                    Cloud Alpha Gaming Headset
                                                </a>
                                            </li>
                                            <li>
                                                <a >
                                                    DualSense Wireless
                                                    Controllers
                                                </a>
                                            </li>
                                            <li>
                                                <a >Raptor Gameing Z95</a>
                                            </li>
                                            <li>
                                                <a >KD DMTR Gaming Desktop PC</a>
                                            </li>
                                        </ul>

                                        <ul>
                                            <span className="drp-menu-list-name">
                                                Master Game
                                            </span>
                                            <li>
                                                <a >Gameing Office Chair</a>
                                            </li>
                                            <li>
                                                <a >
                                                    Gaming Chair for Gamers with
                                                    Lumbar
                                                </a>
                                            </li>
                                            <li>
                                                <a >
                                                    HTC Vive Tracker (3.0) - PC
                                                </a>
                                            </li>
                                            <li>
                                                <a >
                                                    VR Headset with Headphones
                                                </a>
                                            </li>
                                            <li>
                                                <a >RX 590 GTS Graphics Card</a>
                                            </li>
                                            <li>
                                                <a >RX 680 GTS Graphics Card</a>
                                            </li>
                                        </ul>

                                        <img
                                            className="dr-menu-img"
                                            src={DrMenuImg}
                                        />
                                    </div>
                                </div>
                            </span>
                            <span className="pages">
                                Pages
                                <FiChevronDown className="pages-rotate-icon" />
                                <div className="drp-menu">
                                    <div className="drop-down-pages">
                                        <ul>
                                            <li>
                                                <Link to={"about"}>About Us</Link>
                                            </li>
                                            <li>
                                                <a >Contact with us</a>
                                            </li>
                                            <li>
                                                <a >FAQ`s</a>
                                            </li>
                                            <li>
                                                <a >Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a >Shipping & Delivery</a>
                                            </li>
                                            <li>
                                                <a >Terms & Conditions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                            <span className="blog">
                                Blog
                                <FiChevronDown className="blog-rotate-icon" />
                                <div className="drp-menu">
                                    <div className="drop-down-blog">
                                        <ul>
                                            <li>
                                                <a >Blog Page</a>
                                            </li>
                                            <li>
                                                <a >Article Page</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                        </div>

                        <a className="gaming" href="/">
                            Gaming
                            <TbPointFilled className="point" />
                        </a>

                        <div className="login-basket">
                            <span className="login">
                                <GoPerson className="login-icon" />
                                <div className="drp-menu">
                                    <div className="drop-down-login">
                                        <ul>
                                            <li>
                                                <a >Log in</a>
                                            </li>
                                            <li>
                                                <a >Create Account</a>
                                            </li>
                                            <li>
                                                <a >Wishlist(O)</a>
                                            </li>
                                            <li>
                                                <a >Compare(O)</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                            <span>
                                <TbWorld className="lang" />
                            </span>
                            <span className="btn-price">
                                USD <FiChevronDown />
                            </span>
                        
                       
                            <button onClick={basketShowHiden} className="btn-basket">
                                <div className="price">
                                    <span>MyCart:</span>
                                    <span>{totalPraduct}USD</span>
                                </div>
                                <span className="pr-count">{totalProductCount}</span>
                                <AiOutlineShoppingCart className="basket-icon" />
                                </button>
                                <div className={showHiden ? "bascet-menu show-menu" : "bascet-menu"}>
                        <div className="bascet-header">
                            <span>MY Cart</span>
                            <span>{totalProductCount}  ITEMS</span>
                        </div>

                       
         <div className="bascet-product-list">
                               {
             state.basket.map(item=> 
                        <div key={item.id}>
                            <div className="bascet-product">
                                 <img className="bascet-pr-img" src={item.coverImg} alt="" />
                             <div className="bascet-pr-datas">
                                <h6 className="bascet-pr-title">{item.title}</h6>
                                <span className="bascet-pr-type">{item.optionsType}: {item.bsprice}</span>
                                <div className="art-azal">
                                    <button onClick={()=>increase(item.id)} className="art">+</button>
                                    <span className="pr-count">{item.count}</span>
                                    <button onClick={()=>decrease(item.id)} className="azal">-</button>
                                </div>
                                <div className="bascet-pr-price-delete">
                                    <span className="bascet-pr-price">{item.price}</span>
                                    <span onClick={()=>removeProduct(item.id)} ><BsTrash className="delete-icon"/> </span>
                                </div>
                             </div>
                            </div>
                                 </div> 
                            )
                        }
         </div> 
                       <div className="basket-bottom">
                        <div className="suptotal-price">
                            <span className="subtotal">Subtotal :</span>
                            <span className="total-price">{totalPraduct}USD</span>
                        </div>
                        <BtnMini title={"Proceed to checkout"}/>
                        <Link onClick={basketShowHiden} to="/basketView" className="view-cart">    
                            View Cart <BsArrowRight className="view-cart-arrow-icon"/>
                        </Link>
                       </div>
                                 </div>

                         

                            
                    <button onClick={basketShowHiden} className={showHiden ? "open":"hiden"}>
                          <TfiClose className="close-icon"/>
                    </button>

						<span ><GiHamburgerMenu className="hamburger-menu"/></span>
                        </div>
                    </div>
                    <hr className="nav-line" />

                    <div className="nav-bottom container">
                        <a className="new-accessories">
                            New Accessories -30 % Off.<a >More</a>
                        </a>
                        <div className="search">
                            <BsSearch className="search-icon" />
                            <input
                                className="search-inp"
                                placeholder="Search Product ..."
                            />
                        </div>
                        <a className="new-collections">New Collections</a>
                    </div>
                    <hr className="nav-line" />
                </nav>
				</div>
        </section>
    );
}

export default Header;
