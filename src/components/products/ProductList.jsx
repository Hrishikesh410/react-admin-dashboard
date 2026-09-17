import ProductCard from './ProductCard'

const ProductList = ({products, onAdd}) => {
  return (
    <div className='product-list'>
        {products.map((product)=>{
            return <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}/>
        })}
    </div>
  )
}

export default ProductList