import { FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white text-sm px-6 py-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
                {/* Left: Address */}
                <div>
                    <h4 className="font-semibold mb-1">Amadeus IT Group</h4>
                    <p>C. Salvador de Madariaga, 1<br />28027 Madrid<br />Spain</p>
                </div>

                {/* Right: Social */}
                <div className="flex flex-col items-start md:items-end justify-between">
                    <p className="mb-2">Follow us on</p>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Bottom row */}
            <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center text-gray-400">
                <p>Copyright © 2022 Amadeus Hotels. All rights reserved.</p>
                <p>
                    Photos by <a href="#" className="underline">Felix Mooneeram</a> &{' '}
                    <a href="#" className="underline">Serge Kutuzov</a> on{' '}
                    <a href="#" className="underline">Unsplash</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
