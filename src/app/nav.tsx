import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white border-b border-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-primary">BM Enterprise</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-primary hover:text-primary/80" id="mobile-menu-button">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">
            About Us
          </Link>
          <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">
            Services
          </Link>
          <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">
            Projects
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}