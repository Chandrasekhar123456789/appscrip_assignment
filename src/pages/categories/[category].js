import Head from 'next/head'
import Link from 'next/link'
import ProductGrid from '../../components/ProductGrid'
import Header from '../../components/Header'

export default function CategoryPage({ products, category }) {
  return (
    <>
      <Head>
        <title>Udaipur Store — {category}</title>
        <meta name="description" content={`Products in category ${category}`} />
      </Head>

      <main className="container">
        <Header />
        <div style={{marginTop:12}}>
          <h1 style={{fontSize:20,fontWeight:700}}>Category: {category}</h1>
          <p style={{marginBottom:12}}><Link href="/">← Back to products</Link></p>
          <ProductGrid products={products} />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { category } = context.params
  const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
  const data = await res.json()
  const products = (Array.isArray(data)?data:[]).map(p => ({ id:p.id, title:p.title, price:p.price, category:p.category, image:p.image }))
  return { props: { products, category } }
}
