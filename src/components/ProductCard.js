import Link from 'next/link'
export default function ProductCard({ product }) {
  return (
    <article className="card" aria-labelledby={`p-${product.id}`}>
      <Link href={`/categories/${encodeURIComponent(product.category)}`}>
        <img src={product.image} alt={product.title} loading="lazy" />
      </Link>
      <div className="card-body">
        <h3 id={`p-${product.id}`} className="product-title">{product.title}</h3>
        <div className="product-meta">{product.category}</div>
        <div className="price">₹{(product.price * 80).toFixed(0)}</div>
      </div>
    </article>
  )
}
