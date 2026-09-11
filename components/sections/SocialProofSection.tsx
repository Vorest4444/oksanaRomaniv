export function SocialProofSection() {
  // TODO: Replace with actual partner/media logos
  const logos = [
    { name: 'Компанія 1', placeholder: 'Logo 1' },
    { name: 'Компанія 2', placeholder: 'Logo 2' },
    { name: 'Компанія 3', placeholder: 'Logo 3' },
    { name: 'Компанія 4', placeholder: 'Logo 4' },
    { name: 'Компанія 5', placeholder: 'Logo 5' },
  ]

  return (
    <section className="py-12 md:py-16 bg-white border-y border-primary-100">
      <div className="container-custom">
        <p className="text-center text-sm text-accent-500 uppercase tracking-wider mb-8">
          Довіряють підприємці та компанії
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-24 h-12 md:w-32 md:h-14 bg-primary-50 rounded-lg flex items-center justify-center text-primary-400 text-sm font-medium"
              aria-label={logo.name}
            >
              {/* TODO: Replace with actual logo images */}
              {logo.placeholder}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
