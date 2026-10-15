export default function Projects() {
  return (
    <div>
      <header className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg mb-8">
            Explore our portfolio of logistics, accommodation, and construction projects across Zambia.
          </p>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Project Gallery</h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-12">
            Below are sample project images showcasing our work in logistics, accommodation, and construction. 
            These are placeholders to be replaced with actual project photos from BM Enterprise.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Logistics Projects */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-primary/10">
                <svg className="h-full w-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Logistics Project Sample</h3>
                <p className="text-muted-foreground">Goods transportation for mining operation</p>
                <p className="text-xs text-muted-foreground mt-2">Lusaka, Zambia</p>
              </div>
            </div>
            
            {/* Accommodation Projects */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-primary/10">
                <svg className="h-full w-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Accommodation Project Sample</h3>
                <p className="text-muted-foreground">Corporate housing facility</p>
                <p className="text-xs text-muted-foreground mt-2">Kitwe, Zambia</p>
              </div>
            </div>
            
            {/* Construction Projects */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-primary/10">
                <svg className="h-full w-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18M3 12l9-9m0 9l9-9" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Construction Project Sample</h3>
                <p className="text-muted-foreground">Commercial building construction</p>
                <p className="text-xs text-muted-foreground mt-2">Ndola, Zambia</p>
              </div>
            </div>
            
            {/* Combined Services Project */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-primary/10">
                <svg className="h-full w-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Integrated Project Sample</h3>
                <p className="text-muted-foreground">Logistics, accommodation & construction support</p>
                <p className="text-xs text-muted-foreground mt-2">Livingstone, Zambia</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-muted-foreground">
            <p>Note: The above projects are samples. Please replace with actual BM Enterprise project photos and details.</p>
          </div>
        </div>
      </section>

      <footer className="bg-muted/90 text-muted-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">BM Enterprise</h3>
              <p className="text-muted-foreground">
                Reliable Solutions for Logistics, Accommodation and Construction in Zambia
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services/logistics" className="hover:text-white transition-colors">Logistics</a></li>
                <li><a href="/services/accommodation" className="hover:text-white transition-colors">Accommodation</a></li>
                <li><a href="/services/construction" className="hover:text-white transition-colors">Construction</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+260000000000" className="hover:text-white transition-colors">+260 000 000 000</a></li>
                <li><a href="mailto:info@bmenterprise.zm" className="hover:text-white transition-colors">info@bmenterprise.zm</a></li>
                <li><span className="block">Lusaka, Zambia</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-muted/50 text-center text-sm">
            Copyright {new Date().getFullYear()} BM Enterprise. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}