import AddButton from '../common/AddButton'

const ProductCard = ({product, onAdd}) => {
  return (
    <div className='product-card'>
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <AddButton onAdd={()=> onAdd(product)}/>
    </div>
  )
}

export default ProductCard