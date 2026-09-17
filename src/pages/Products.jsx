import { useState } from "react"
import ProductList from "../components/products/ProductList"
import products from "../data/products"

const Products = () => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("default");

    const handleAdd =(product) =>{
        console.log("Slected Producted",product)

    }

    const filteredProducts = products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b)=>{
        if(sort === "price-low"){
            return a.price - b.price;
        }
        if(sort === "price-high"){
            return b.price- a.price
        }

        return 0;
    })
  return (
    <div>

        <div>Products</div>
        <div className="product-controls">
 <input type="text" placeholder="Search products..."
        value={search}
        onChange={(event)=>setSearch(event.target.value)}/>

        <select value={sort}
        onChange={(event)=>setSort(event.target.value)}>
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
        </select>
        </div>
       
        <ProductList products={filteredProducts} onAdd={handleAdd}  />
    </div>
  )
}

export default Products