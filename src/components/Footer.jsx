
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-zinc-400 border-t border-zinc-800 py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">


                    <div className="text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Zoom Auto. All rights reserved.
                    </div>

                    <div className="flex justify-center gap-6">
                        <a href="#" className="hover:text-cyan-300 transition-colors">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="hover:text-cyan-300 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="hover:text-cyan-300 transition-colors">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="hover:text-cyan-300 transition-colors">
                            <FaYelp size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;