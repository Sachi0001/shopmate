import { CartCard } from "../components/CartCard";
import { useHooks } from "../hooks/useHooks";

export const Cart = () => {
  useHooks("Cart")
  
   const products= [{"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"}]
  return (
    <div>
      {products.map((product)=>(
        <CartCard key={product.id} product={product} />
      ))}
      </div>
  )
}
