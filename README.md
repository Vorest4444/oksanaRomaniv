# Oksana Romaniv - Business Mentor & Coach Website

A professional marketing website for Oksana Romaniv, a business mentor and life coach. Built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Netlify (static export)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (for local testing)
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── products/          # Products page
│   ├── mentorship/        # Mentorship page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── sections/          # Page sections (Hero, FAQ, etc.)
│   └── ui/                # Reusable UI components
├── public/                # Static assets
└── ...config files
```

## Features

- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Modern UI**: Clean design with subtle gradients, soft shadows, and elegant typography
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO Ready**: Meta tags, OpenGraph placeholders, structured content
- **Performance**: Static export, optimized images (placeholder for now)
- **Ukrainian Language**: All content in Ukrainian

## Pages

1. **Home (/)**: Landing page with hero, social proof, how it works, products, testimonials, FAQ
2. **About (/about)**: Bio, values, achievements, gallery
3. **Products (/products)**: Free/paid products grid with forms
4. **Mentorship (/mentorship)**: Packages, application form, calendar placeholder
5. **Contact (/contact)**: Contact form, info, social links
6. **Privacy (/privacy)**: Privacy policy placeholder
7. **Terms (/terms)**: Terms of service placeholder

## TODO: Future Integrations

### Phase 2 - Forms & Payments

- [ ] **Netlify Forms**: Replace form placeholders with actual Netlify Forms integration
  - Free resource form
  - Waitlist form
  - Mentorship application form
  - Contact form
  - Newsletter subscription

- [ ] **Stripe Checkout**: Integrate payments for paid products
  - Create Netlify Functions for Stripe checkout sessions
  - Add success/cancel pages

### Phase 3 - Backend & Email

- [ ] **Database**: Supabase or Airtable for:
  - Lead management
  - Application tracking
  - Product purchases

- [ ] **Email**: Resend for:
  - Welcome emails
  - Product delivery
  - Application confirmations

### Phase 4 - Enhancements

- [ ] Add actual images/photos
- [ ] Calendar integration (Calendly/Cal.com)
- [ ] Blog section (optional)
- [ ] Analytics (Plausible/Fathom)

## Deployment to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy!

## Design System

### Colors
- **Primary**: Warm terracotta/coral tones
- **Accent**: Deep slate/navy for text
- **Warm**: Neutral warm grays for backgrounds

### Typography
- **Display**: Playfair Display (headings)
- **Body**: Inter (body text)

### Components
- Buttons (primary, secondary, outline)
- Cards
- Badges
- Form fields
- Section headers
- And more...

## License

Private project. All rights reserved.
