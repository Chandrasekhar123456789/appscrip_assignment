import Link from 'next/link'
export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-top">
        <div className="logo"><Link href="/"><img src="/assets/logo.svg" alt="Udaipur Store" style={{height:32}}/></Link></div>
        <div className="search">
          {/* form submits ?q=searchTerm but input has no defaultValue so it clears after navigation */}
          <form action="/" method="get" onSubmit={() => { /* input will be cleared because no value bound */ }}>
            <input name="q" placeholder="Search products by name, category, description..." aria-label="search" />
            <button type="submit" className="btn" style={{marginLeft:8}}>Search</button>
          </form>
        </div>
      </div>
      <div className="small-muted">Light & modern — search clears after submit for clean UI.</div>
    </header>
  )
}
