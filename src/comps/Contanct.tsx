import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ContProps {
    isDarkMode: boolean;
}

export const RenderContact = ({ isDarkMode }: ContProps) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleFormChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto w-11/12 flex flex-col md:flex-row gap-12 items-start justify-center">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className={`flex-1 w-full md:w-1/2`}
                >
                    <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center md:text-left`}>
                        Send a Message
                    </h3>
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Your Name"
                            required
                            className={`w-full px-5 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all duration-200`}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="Your Email"
                            required
                            className={`w-full px-5 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all duration-200`}
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            placeholder="Your Message"
                            required
                            rows={5}
                            className={`w-full px-5 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all duration-200`}
                        ></textarea>
                        <button
                            type="submit"
                            className={`w-full py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105`}
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className={`flex-1 w-full md:w-1/2 flex flex-col gap-6`}
                >
                    <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center md:text-left`}>
                        Contact Information
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-600 text-center md:text-left`}>
                        Feel free to reach out through any of these channels. I usually respond within 24-48 hours.
                    </p>

                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <Mail className={`w-6 h-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`} />
                            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>s.igiraneza@alustudent.com</span>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <Linkedin className={`w-6 h-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`} />
                            <a
                                href="https://linkedin.com/in/Igiraneza-Sheilla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-700'} transition-colors duration-200`}
                            >
                                linkedin.com/in/Igiraneza-Sheilla
                            </a>
                        </div>
                    </div>

                    <h4 className={`text-xl font-semibold mt-8 mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center md:text-left`}>
                        Connect with me
                    </h4>
                    <div className="flex gap-4 justify-center md:justify-start">
                        {[ 
                            { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/Igiraneza-Sheilla', label: 'Book' },
                            { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Igiraneza-Sheilla', label: 'GitHub' },
                            { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/Igiraneza-Sheilla', label: 'Twitter' },
                        ].map(item => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className={`p-3 ${isDarkMode ? 'bg-gray-800 text-slate-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-600'} rounded-full hover:text-white transition-all duration-200 transform hover:scale-110`}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
