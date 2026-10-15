import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const quoteFormSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  company: z.string().min(1, { message: "Please enter your company or organisation" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  service: z.enum(["logistics", "accommodation", "construction"], {
    message: "Please select a service"
  }),
  location: z.string().min(1, { message: "Please enter project or service location" }),
  budget: z.string().optional(),
  requiredDate: z.string().optional(),
  requirements: z.string().min(10, { message: "Please describe your requirements in detail" })
});

export default function RequestQuote() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      budget: "",
      requiredDate: "",
      requirements: ""
    }
  });

  const onSubmit = (data) => {
    // In a real application, this would send data to a backend API
    console.log("Form submitted:", data);
    alert("Thank you for your request! We will get back to you shortly.");
    reset();
  };

  return (
    <div>
      <header className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
          <p className="text-lg mb-8">
            Let us know about your project requirements and we'll provide you with a customized solution.
          </p>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company or Organisation</label>
                <input
                  type="text"
                  {...register("company")}
                  className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.company && (
                  <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
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
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Service</label>
              <select
                {...register("service")}
                className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="logistics">Logistics Services</option>
                <option value="accommodation">Accommodation Services</option>
                <option value="construction">Construction Services</option>
              </select>
              {errors.service && (
                <p className="text-sm text-destructive mt-1">{errors.service.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project or Service Location</label>
              <input
                type="text"
                {...register("location")}
                className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.location && (
                <p className="text-sm text-destructive mt-1">{errors.location.message}</p>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">Estimated Budget (Optional)</label>
                <input
                  type="text"
                  {...register("budget")}
                  className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., $50,000 or ZMW equivalent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Required Date (Optional)</label>
                <input
                  type="date"
                  {...register("requiredDate")}
                  className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description of Requirements</label>
              <textarea
                {...register("requirements")}
                className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                placeholder="Please describe your specific requirements, timeline, and any other important details..."
              />
              {errors.requirements && (
                <p className="text-sm text-destructive mt-1">{errors.requirements.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
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