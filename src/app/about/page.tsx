export default function About() {
  return (
    <div>
      <header className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About BM Enterprise</h1>
          <p className="text-lg mb-8">
            Learn about our mission, vision, and commitment to excellence in logistics, accommodation, and construction services.
          </p>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Company Introduction</h2>
          <p className="text-lg mb-6">
            BM Enterprise is a dependable Zambian business providing integrated logistics, accommodation, and construction solutions to meet the needs of businesses, organisations, and individuals across Zambia.
          </p>
          <p className="text-lg mb-6">
            With a focus on reliability, professionalism, and customer satisfaction, we strive to deliver exceptional services that contribute to the success of our clients' projects and operations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            To provide reliable, efficient, and customer-focused logistics, accommodation, and construction services that contribute to business success and development in Zambia.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            To become a trusted and recognised provider of integrated business support services in Zambia and the wider region.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct business with honesty, transparency, and strong ethical principles in all our dealings.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                We deliver consistent, dependable services that our clients can count on, every time.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards of expertise, competence, and conduct in our field.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety</h3>
              <p className="text-muted-foreground">
                We prioritize the safety and wellbeing of our employees, clients, and communities in all operations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We are committed to excellence in every aspect of our service delivery.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                We measure our success by the satisfaction and success of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Business Approach</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer-Centric Focus</h3>
              <p className="text-muted-foreground mb-4">
                We place our clients at the heart of everything we do, taking the time to understand their unique needs and tailoring our solutions accordingly.
              </p>
              <h3 className="text-xl font-semibold mb-4">Integrated Service Delivery</h3>
              <p className="text-muted-foreground mb-4">
                Our logistics, accommodation, and construction services are designed to work seamlessly together, providing comprehensive support for complex projects.
              </p>
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <p className="text-muted-foreground">
                As a Zambian company, we have deep understanding of the local business environment, regulations, and challenges, allowing us to provide context-appropriate solutions.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-64 h-64 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h10m-5-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
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
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
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