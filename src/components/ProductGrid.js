import ProductCard from './ProductCard'
export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return <div style={{padding:20, background:'#fff', borderRadius:8}}>No products found.</div>
  }
  return (
    <div className="grid" role="list">
      {products.map(p => <div key={p.id} role="listitem"><ProductCard product={p} /></div>)}
    </div>
  )
}
