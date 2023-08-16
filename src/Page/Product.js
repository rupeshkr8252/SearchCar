import React,{useState} from 'react'
import "./Product.css";
import { data } from '../Component/Data';
import "../Component/Card.css";

const Product = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className='product-section'>
    <div className='product-title'>
        <h1>Products</h1>
    </div>
    <div className='product-cnt'>
        <p>"Ready to showcase your unique creations? Click the 'Create Product' button below to get started and unleash the power of NFB Club!"</p>
        <button>Create Product</button>
    </div>

    <div className='search'>
        <input
          type='search'
          placeholder='Search Car Name'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='main-card'>
        {filteredData.map((item, index) => (
          <div className='card-container' key={index}>
            <div className='card-img'>
                <img src={item.imgsrc} alt="" className='card-image'/>
            </div>
            <div className='gradient-bg' style={{background:item.bg}}>
            <div className='card-title'>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>

            </div>
            <div className='card-btn'>
                  <button>Remove</button>  
                  <button>Action Needed</button>  
                  <button>Edit</button>  
            </div>
            </div>
        </div> 
       
        ))
    }
    </div>
    </div>
  )
}

export default Product
