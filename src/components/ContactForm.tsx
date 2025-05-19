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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
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

        alert('Message submitted!')
        setForm({ first: '', last: '', email: '', phone: '', message: '', agreed: false })
    }

    return (
        <section className="bg-black text-white px-6 py-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Left: Form */}
                <div>
                    <h3 className="text-2xl font-semibold mb-2">How to reach us</h3>
                    <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consetetur.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                name="first"
                                placeholder="First Name *"
                                value={form.first}
                                onChange={handleChange}
                                required
                                className="bg-[#333] text-white p-3 rounded w-full"
                            />
                            <input
                                name="last"
                                placeholder="Last Name *"
                                value={form.last}
                                onChange={handleChange}
                                required
                                className="bg-[#333] text-white p-3 rounded w-full"
                            />
                        </div>

                        <input
                            name="email"
                            type="email"
                            placeholder="Email *"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="bg-[#333] text-white p-3 rounded w-full"
                        />

                        <input
                            name="phone"
                            placeholder="Telephone"
                            value={form.phone}
                            onChange={handleChange}
                            className="bg-[#333] text-white p-3 rounded w-full"
                        />

                        <textarea
                            name="message"
                            placeholder="Message *"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="bg-[#333] text-white p-3 rounded w-full h-32"
                        />

                        <p className="text-sm text-gray-400">* required fields</p>

                        <label className="flex items-center space-x-2 text-sm">
                            <input
                                type="checkbox"
                                name="agreed"
                                checked={form.agreed}
                                onChange={handleChange}
                                className="accent-yellow-500 w-4 h-4"
                            />
                            <span>
                                I agree to the <a href="#" className="underline">Terms & Conditions</a>
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="bg-[#d99900] text-white px-6 py-2 rounded mt-4 hover:bg-[#c58b00] transition w-40"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>

                {/* Right: Embedded Map */}
                <div className="w-full h-96 rounded overflow-hidden shadow-md">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.195409313226!2d-3.7634136243442343!3d40.341672571442264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a6a7e32517b%3A0x5782e9b64f2e4a89!2sAmadeus%20IT%20Group!5e0!3m2!1sen!2sus!4v1668773300354!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </div>
        </section >
    )
}

export default ContactForm
