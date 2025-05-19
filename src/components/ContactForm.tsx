import { useState } from 'react'

const ContactForm = () => {
    const [form, setForm] = useState({
        first: '',
        last: '',
        email: '',
        phone: '',
        message: '',
        agreed: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked
            setForm(prev => ({ ...prev, [name]: checked }))
        } else {
            setForm(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { first, last, email, message, agreed } = form

        if (!first || !last || !email || !message || !agreed) {
            alert('Please fill in all required fields and agree to the terms.')
            return
        }

        alert('Form submitted!')
        setForm({ first: '', last: '', email: '', phone: '', message: '', agreed: false })
    }

    return (
        <section className="bg-[#1c1c1c] text-white px-6 py-12">
            <h3 className="text-xl font-semibold mb-6">How to reach us</h3>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
                <input
                    name="first"
                    placeholder="First Name *"
                    value={form.first}
                    onChange={handleChange}
                    className="p-3 bg-transparent border border-white text-white rounded"
                    required
                />
                <input
                    name="last"
                    placeholder="Last Name *"
                    value={form.last}
                    onChange={handleChange}
                    className="p-3 bg-transparent border border-white text-white rounded"
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleChange}
                    className="p-3 bg-transparent border border-white text-white rounded col-span-1 sm:col-span-2"
                    required
                />
                <input
                    name="phone"
                    placeholder="Telephone"
                    value={form.phone}
                    onChange={handleChange}
                    className="p-3 bg-transparent border border-white text-white rounded col-span-1 sm:col-span-2"
                />
                <textarea
                    name="message"
                    placeholder="Message *"
                    value={form.message}
                    onChange={handleChange}
                    className="p-3 bg-transparent border border-white text-white rounded col-span-1 sm:col-span-2"
                    required
                />
                <label className="flex items-center space-x-2 col-span-1 sm:col-span-2">
                    <input
                        type="checkbox"
                        name="agreed"
                        checked={form.agreed}
                        onChange={handleChange}
                        className="accent-white"
                        required
                    />
                    <span>I agree to the Terms & Conditions</span>
                </label>
                <button
                    type="submit"
                    className="bg-white text-black font-semibold px-6 py-2 rounded w-fit mt-4"
                >
                    SUBMIT
                </button>
            </form>
        </section>
    )
}

export default ContactForm
