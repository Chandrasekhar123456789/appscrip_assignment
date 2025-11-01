import Link from 'next/link'
function buildHref(currentQuery, updates) {
  const params = new URLSearchParams(currentQuery || {})
  Object.entries(updates).forEach(([k,v])=>{
    if (v === null) params.delete(k)
    else params.set(k, v)
  })
  const qs = params.toString()
  return qs ? `/?${qs}` : '/'
}

export default function Filters({ categories = [], currentQuery = {} }) {
  const maxPrice = currentQuery.maxPrice || ''
  return (
    <aside className="filters" aria-label="Filters">
      <h2>Filters</h2>

      <div className="filter-group">
        <div className="small">Categories</div>
        {categories.map(cat => (
          <div key={cat} style={{marginBottom:8}}>
            <Link href={buildHref(currentQuery, { category: cat })}>{cat}</Link>
          </div>
        ))}
        <div style={{marginTop:8}}>
          <Link href={buildHref(currentQuery, { category: null })}>Clear category</Link>
        </div>
      </div>

      <div className="filter-group">
        <div className="small">Max price (USD)</div>
        <form action="/" method="get" style={{marginTop:8}}>
          {Object.keys(currentQuery || {}).filter(k=>k!=='maxPrice').map(k=>(
            <input type="hidden" name={k} value={currentQuery[k]} key={k} />
          ))}
          <input type="number" name="maxPrice" defaultValue={maxPrice} min="0" step="1" style={{width:'100%'}}/>
          <button className="btn" style={{marginTop:8}}>Apply</button>
        </form>
        <div style={{marginTop:8}}>
          <Link href={buildHref(currentQuery, { maxPrice: null })}>Clear price</Link>
        </div>
      </div>
    </aside>
  )
}
