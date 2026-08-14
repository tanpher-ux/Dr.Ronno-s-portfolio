const OUTLETS = [
  'The Standard',
  'Daily Nation',
  'Citizen TV',
  'The Star Kenya',
  'K24 Digital',
  'Eldoret Voice',
]

export default function PressStrip() {
  return (
    <div>
      <p className="text-center text-[11px] tracking-widest2 uppercase text-ivory/40 mb-8">
        Featured In
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
        {OUTLETS.map((name) => (
          <span
            key={name}
            className="font-serif text-lg sm:text-xl text-ivory/35 hover:text-ivory/70 transition-colors duration-300 tracking-wide"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
