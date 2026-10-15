import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  subject: z.string().min(2, { message: "Please enter a subject" }),
  message: z.string().min(10, { message: "Please enter your message" })
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data) => {
    // In a real application, this would send data to a backend API
    console.log("Contact form submitted:", data);
    alert("Thank you for your message! We will get back to you shortly.");
    reset();
  };

  return (
    <div>
      <header className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-8">
            Get in touch with BM Enterprise for inquiries, support, or service requests.
          </p>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+260000000000" className="hover:text-primary transition-colors">+260 000 000 000</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@bmenterprise.zm" className="hover:text-primary transition-colors">info@bmenterprise.zm</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l-4-4-4 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground block">
                      Lusaka, Zambia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">
                      <a href="https://wa.me/260000000000" className="hover:text-primary transition-colors">+260 000 000 000</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Please fill out the form below and we'll respond to your inquiry as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      {...register("subject")}
                      className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                    placeholder="Please describe your inquiry or request in detail..."
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
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
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
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