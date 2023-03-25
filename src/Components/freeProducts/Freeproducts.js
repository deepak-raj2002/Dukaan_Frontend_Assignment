import react from 'react';
import Privacy from '../../Images/Privacy.png';
import Terms from '../../Images/Terms.png';
import Domain from '../../Images/Domain.png';
import Invoice from '../../Images/Invoice.png';
import './Freeproducts.scss';
const FreeProducts=()=>{
    return(
     <div className='free-products'>
      <div className='free-heading'>
                Try our other free products
            </div>
        <div className='free-products-details'>
        <div className='functions'>
            <div className='cards'>
                <div className='imgs'>
                <img src={Privacy} className='immg'  alt='img'/>
                </div>
                <div className='Headings'>
                    Privacy Policy Generator 
                </div>
                <div className='abouts'>
                Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                </div>
            </div>
            <div className='cards'>
                <div className='imgs'>
                <img src={Terms} className='immg'  alt='img'/>
                </div>
                <div className='Headings'>
                    Terms & Conditions Generator
                </div>
                <div className='abouts'>
                Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                </div>
            </div>
            <div className='cards'>
                <div className='imgs'>
                <img src={Domain} className='immg'  alt='img'/>
                </div>
                <div className='Headings'>
                    Domain Name Generator
                </div>
                <div className='abouts'>
                Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                </div>
            </div>
            <div className='cards'>
                <div className='imgs'>
                 <img src={Invoice} className='immg'  alt='img'/>
                </div> 
                <div className='Headings'>
                    Invoice Generator
                </div>
                <div className='abouts'>
                Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                </div>
            </div>
        </div>
        </div>
     </div>
    )
};

export default FreeProducts;