import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-react'

interface FormState {
  firstName: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  firstName?: string
  email?: string
  message?: string
}

const initialState: FormState = { firstName: '', email: '', phone: '', message: '' }

// WhatsApp number for Emmanuel Kipngetich Ronoh — international format, digits only.
const WHATSAPP_NUMBER = '254756411219'

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.firstName.trim()) errors.firstName = 'First name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

function buildWhatsAppMessage(values: FormState): string {
  const lines = [
    'Hello Emmanuel Kipngetich Ronoh,',
    '',
    'You have a new inquiry from your website:',
    '',
    `*Name:* ${values.firstName}`,
    `*Email:* ${values.email}`,
    values.phone.trim() ? `*Phone:* ${values.phone}` : null,
    '',
    '*Message:*',
    values.message,
    '',
    'Looking forward to hearing from you. Thank you.',
  ].filter((line): line is string => line !== null)

  return lines.join('\n')
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('loading')
    try {
      const text = buildWhatsAppMessage(values)
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

      // Brief delay so the loading state reads as intentional, then hand off to WhatsApp.
      await new Promise((resolve) => setTimeout(resolve, 700))
      window.open(url, '_blank', 'noopener,noreferrer')

      setStatus('success')
      setValues(initialState)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-gold/40 bg-charcoal-light px-6 sm:px-8 py-10 sm:py-12 flex flex-col items-center text-center gap-4"
      >
        <CheckCircle2 className="text-gold" size={40} strokeWidth={1.3} />
        <h3 className="font-serif text-xl sm:text-2xl text-ivory">Message ready on WhatsApp</h3>
        <p className="text-ivory/70 font-light max-w-sm text-sm sm:text-base">
          A WhatsApp window has opened with your message pre-filled. Simply hit send there to
          reach Emmanuel directly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-gold text-xs tracking-widest2 uppercase border-b border-gold/50 pb-1 hover:text-ivory hover:border-ivory transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label htmlFor="firstName" className="block text-xs tracking-widest2 uppercase text-ivory/60 mb-2">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={values.firstName}
            onChange={handleChange('firstName')}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/30 transition-colors text-base"
            placeholder="Jane"
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-2 text-xs text-red-400/90">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs tracking-widest2 uppercase text-ivory/60 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange('phone')}
            className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/30 transition-colors text-base"
            placeholder="+254 7xx xxx xxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-widest2 uppercase text-ivory/60 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/30 transition-colors text-base"
          placeholder="jane@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-xs text-red-400/90">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest2 uppercase text-ivory/60 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/30 transition-colors resize-none text-base"
          placeholder="Tell us about your inquiry..."
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-400/90">
            {errors.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-400/90"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-3 bg-gold text-charcoal text-xs tracking-widest2 uppercase px-8 sm:px-9 py-4 hover:-translate-y-0.5 transition-transform duration-300 disabled:opacity-70 disabled:translate-y-0 w-full sm:w-auto"
      >
        {status === 'loading' ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <MessageCircle size={16} />
        )}
        {status === 'loading' ? 'Opening WhatsApp' : 'Send Message'}
      </button>

      <p className="text-ivory/40 text-xs font-light">
        Sending this message opens WhatsApp with your details pre-filled, ready to send directly
        to Emmanuel.
      </p>
    </form>
  )
}
