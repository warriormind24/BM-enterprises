export default function Home() {
  return (
    <div>
      <header className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Reliable Solutions for Logistics, Accommodation and Construction.
          </h1>
          <p className="text-lg mb-8">
            BM Enterprise delivers dependable services designed to support businesses, projects, and communities across Zambia.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="#contact" className="bg-secondary hover:bg-secondary/90 text-primary font-medium px-6 py-3 rounded-lg transition-colors">
              Request a Quote
            </a>
            <a href="#services" className="border border-white/20 hover:border-white/30 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Explore Our Services
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About BM Enterprise</h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-8">
            BM Enterprise is a dependable Zambian business providing integrated logistics, accommodation, and construction solutions to meet the needs of businesses, organisations, and individuals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h10m-5-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrated Solutions</h3>
              <p className="text-muted-foreground">
                Combining logistics, accommodation, and construction services for comprehensive business support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Logistics Services</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Reliable transportation and freight solutions for businesses across Zambia.
              </p>
              <a href="/services/logistics" className="text-primary hover:text-primary/80 font-medium">
                Learn More
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Accommodation Services</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Comfortable lodging solutions for corporate clients and project teams.
              </p>
              <a href="/services/accommodation" className="text-primary hover:text-primary/80 font-medium">
                Learn More
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18M3 12l9-9m0 9l9-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Construction Services</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Quality building and renovation services for residential and commercial projects.
              </p>
              <a href="/services/construction" className="text-primary hover:text-primary/80 font-medium">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BM Enterprise?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Service Delivery</h3>
              <p className="text-muted-foreground">
                Consistent and dependable service execution for all client projects.
              </p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Customer Support</h3>
              <p className="text-muted-foreground">
                Dedicated support team ensuring client satisfaction throughout engagement.
              </p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Commitment to Quality and Safety</h3>
              <p className="text-muted-foreground">
                Adherence to highest standards of quality and workplace safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mining and Resources</h3>
              <p className="text-muted-foreground">
                Specialized logistics and accommodation solutions for mining operations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18M3 12l9-9m0 9l9-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Construction and Development</h3>
              <p className="text-muted-foreground">
                Comprehensive support for construction projects of all sizes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate and Business</h3>
              <p className="text-muted-foreground">
                Professional services tailored to corporate clients and enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Next Project</h2>
          <p className="text-lg mb-8">
            Whether you need transportation, accommodation, or construction support, BM Enterprise is ready to discuss your requirements.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="/contact" className="bg-secondary hover:bg-secondary/90 text-primary font-medium px-6 py-3 rounded-lg transition-colors">
              Contact Us
            </a>
            <a href="/request-a-quote" className="border border-white/20 hover:border-white/30 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Request a Quote
            </a>
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
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accommodation</a></li