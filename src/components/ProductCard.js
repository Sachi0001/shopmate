import './ProductCard.css'

export const ProductCard = ({product}) => {
  const{name,price,image}=product
  return (
    <div className='main'>
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
      <p>
        ${price}
        <button>Add to Cart</button>
      </p>
      
    </div>
    </div>
    </div>
  
   
  )
}
