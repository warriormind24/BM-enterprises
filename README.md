# BM Enterprise Website

A modern, responsive corporate website for BM Enterprise, a Zambian company providing logistics, accommodation, and construction services.

## Features

- Modern, professional design with deep navy blue and construction orange/gold color scheme
- Fully responsive layout for desktop, tablet, and mobile devices
- Comprehensive service pages for logistics, accommodation, and construction
- Project gallery showcasing company work
- Functional contact and quote request forms
- SEO-optimized structure and content
- Accessible design with proper color contrast and navigation
- Fast loading performance

## Technology Stack

- **Frontend:** Next.js 14 with React and TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form with Zod validation
- **Icons:** Lucide React (planned for future implementation)
- **Deployment:** Vercel (recommended) or any Node.js hosting platform

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Optional: Add any API keys or configuration here
# For form submissions, you would typically connect to a backend service
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── services/           # Services overview page
│   │   ├── logistics/      # Logistics services detail
│   │   ├── accommodation/  # Accommodation services detail
│   │   └── construction/   # Construction services detail
│   ├── projects/           # Projects/gallery page
│   ├── request-a-quote/    # Quote request form
│   └── contact/            # Contact page and form
├── components/             # Reusable components
├── styles/                 # Global styles
├── lib/                    # Utility functions
└── types/                  # TypeScript type definitions
```

## Customization

### Updating Company Information

All company information is located in the respective page files:

- **Company name, tagline, and descriptions:** Edit text content in page components
- **Contact information:** Update phone, email, and address in footer components
- **Service descriptions:** Modify content in service-specific pages
- **Mission, vision, and values:** Edit in the About page

### Styling

The website uses Tailwind CSS for styling. To modify the theme:

1. Edit `tailwind.config.ts` to change colors, fonts, or other design tokens
2. The primary color is deep navy blue (--primary)
3. The secondary color is construction orange/gold (--secondary)

### Images

Replace placeholder images in the `public/images/` directory with actual photos of:
- Logistics trucks and freight transportation
- Accommodation facilities and rooms
- Construction sites and building projects
- Company team and offices

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the Next.js framework and deploy
4. Configure environment variables in Vercel dashboard if needed

### Other Hosting Platforms

The output of `npm run build` creates a `.next` directory that can be hosted on any Node.js-compatible platform:
- AWS Amplify
- Netlify
- Azure Static Web Apps
- Traditional Node.js servers

## Maintenance

### Adding New Services

1. Create a new folder in `src/app/services/` for the service
2. Create a `page.tsx` file with the service details
3. Add links to the new service in the navigation and services overview page
4. Update the service selection in the quote request form if needed

### Updating Content

All text content is editable directly in the TSX files. Simply:
1. Locate the relevant page component
2. Edit the text content
3. Save the file - changes will be reflected immediately in development

## Accessibility

The website follows accessibility best practices:
- Proper color contrast ratios
- Semantic HTML structure
- Keyboard navigable menus and forms
- ARIA labels where needed
- Responsive design that works on screen readers

## Support

For questions or support regarding this website, please contact the BM Enterprise team directly through the contact form on the website.

© {new Date().getFullYear()} BM Enterprise. All rights reserved.