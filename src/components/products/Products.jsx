import ImageCards from './../imageCards/imageCards.jsx'



const Products = ({ images }) => {
    return (
        <div className="screenSection  ">
            <div className="cardContainer cover-right">
                <ImageCards image={images} />
               
            </div>
        </div>
    );
}
export default Products;