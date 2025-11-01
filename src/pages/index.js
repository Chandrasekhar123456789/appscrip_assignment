import Head from 'next/head'
import Header from '../components/Header'
import Filters from '../components/Filters'
import ProductGrid from '../components/ProductGrid'

export default function Home({ products, categories, query }) {
  return (
    <>
      <Head>
        <title>Udaipur Store — Products</title>
        <meta name="description" content="Server-side rendered product listing page demo with filters." />
      </Head>

      <main className="container">
        <Header />
        <div className="layout">
          <Filters categories={categories} currentQuery={query} />
          <section aria-label="Product grid">
            <h1 className="page-title">Products</h1>
            <h2 className="small-muted">{products.length} results</h2>
            <ProductGrid products={products} />
          </section>
        </div>
        <footer className="site-footer">© {new Date().getFullYear()} Udaipur Store — demo</footer>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const category = query.category || ''
  const maxPrice = Number(query.maxPrice) || Infinity
  const q = (query.q || '').toLowerCase().trim()

  // choose API endpoint
  const base = category ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}` : 'https://fakestoreapi.com/products'
  const res = await fetch(base)
  const data = await res.json()
  const productsAll = Array.isArray(data)?data:[]

  // filter by price and search (search name, category, description)
  const products = productsAll.filter(p => {
    if (Number(p.price) > maxPrice) return false
    if (!q) return true
    const inTitle = p.title && p.title.toLowerCase().includes(q)
    const inCategory = p.category && p.category.toLowerCase().includes(q)
    const inDescription = p.description && p.description.toLowerCase().includes(q)
    return inTitle || inCategory || inDescription
  }).map(p => ({ id:p.id, title:p.title, price:p.price, category:p.category, image:p.image }))

  // fetch categories
  const catRes = await fetch('https://fakestoreapi.com/products/categories')
  const categories = await catRes.json()

  return { props: { products, categories, query } }
}
