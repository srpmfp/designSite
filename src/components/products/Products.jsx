import { useEffect, useState } from 'react';
import ImageCards from './../imageCards/imageCards.jsx'



const Products = ({ productImage }) => {

    return (
        <div className="screenSection  ">
            <div className="cardContainer cover-right">

                <ImageCards productImage={productImage} />
            </div>
        </div>

    );
}
export default Products;