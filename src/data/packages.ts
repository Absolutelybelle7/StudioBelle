export type PackagePlan = {
  slug: string
  name: string
  price: number | null
  priceLabel: string
  description: string
  idealFor: string
  timeline: string
  deliverables: string[]
}

export const packages: PackagePlan[] = [
  {
    slug: 'essential',
    name: 'Essential Website',
    price: 1500,
    priceLabel: 'GH₵ 1,500',
    description: 'A clean, professional online home with the essentials to introduce your business and make it easy to get in touch.',
    idealFor: 'New businesses, personal brands, and small teams.',
    timeline: 'About 1–2 weeks',
    deliverables: ['Up to 5 pages', 'Responsive custom-styled design', 'Contact form and social links', 'Page titles and basic SEO setup', 'Two review rounds'],
  },
  {
    slug: 'signature',
    name: 'Signature Website',
    price: 2000,
    priceLabel: 'GH₵ 2,000',
    description: 'A more distinctive, content-rich website designed to tell your story, build trust, and encourage enquiries.',
    idealFor: 'Growing businesses ready for a stronger digital presence.',
    timeline: 'About 3–5 weeks',
    deliverables: ['Up to 8 pages', 'Custom page layouts and visual direction', 'Motion details and interactive sections', 'Enquiry form and analytics setup', 'On-page SEO foundations', 'Three review rounds'],
  },
  {
    slug: 'commerce',
    name: 'Online Store',
    price: 2500,
    priceLabel: 'GH₵ 2,500',
    description: 'A considered shopping experience that helps customers discover products and complete checkout online.',
    idealFor: 'Brands looking to sell products online.',
    timeline: 'About 4–7 weeks',
    deliverables: ['Product catalogue and collection pages', 'Cart and payment-provider integration', 'Mobile-first storefront design', 'Starter product setup (up to 20 items)', 'Order and checkout flow testing', 'Three review rounds'],
  },
  {
    slug: 'custom',
    name: 'Custom Web Application',
    price: null,
    priceLabel: 'Custom quote',
    description: 'A bespoke platform, portal, booking system, or product with workflows beyond a standard marketing website.',
    idealFor: 'Projects with accounts, data, advanced integrations, or custom workflows.',
    timeline: 'Set after discovery',
    deliverables: ['Requirements and feature scoping', 'Technical approach and milestones', 'Custom interface and application build', 'Integration and launch planning', 'Written estimate before work begins'],
  },
]

export const packageCurrency = (amount: number) =>
  `GH₵ ${amount.toLocaleString('en-GH')}`
