import Reveal from './Reveal'

export default function Philosophy() {
  return (
    <section className="bg-charcoal py-24 sm:py-32 border-y border-white/10">
      <div className="container-edit">
        <Reveal>
          <p className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-[1.25] max-w-4xl mx-auto text-center text-ivory/90">
            "Real progress isn't won in a single election cycle. It's built — deliberately,
            institutionally — by leaders willing to think beyond their own term."
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-gold text-xs tracking-widest2 uppercase">
            Emmanuel Kipngetich Ronoh
          </p>
        </Reveal>
      </div>
    </section>
  )
}
