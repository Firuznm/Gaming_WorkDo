import React from 'react'
// import style css
import "./AllProuctFilter.scss"
import CartComponent from '../../Components/CartComponent/CartComponent'
// import allproduct datas
import { FilterAllDatas } from '../../MyWriteSiteDatas/Datas'


function AllProuctFilter() {
  return (
	<section id='filter-data-section'>
		<div className="container">
			<div className='all-products'>
            {
				FilterAllDatas.map(item=>(
					<div key={item.id} >
						<CartComponent product={item}/>
					</div>
				))
			}
			</div>
			</div>
	</section>
  )
}

export default AllProuctFilter
