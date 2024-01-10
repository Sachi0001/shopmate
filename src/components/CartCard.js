import './cartcard.css'

export const CartCard = ({product}) => {

  const{name, price,image}=product;
  return (
    <div className="card">
<img src={image} alt={name} />
<p>{name}</p>
<div className="action">
<p>${price}</p>
<button>remove</button>
</div>
    </div>
  )
}
