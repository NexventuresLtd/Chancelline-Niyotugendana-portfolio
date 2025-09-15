import {  Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
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
        <div className={`min-h-screen py-24 px-4 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'}`}>
            <div className="max-w-11/12 mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>
                        Get In Touch
                    </h1>
                    <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
                    <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto leading-relaxed`}>
                        Ready to collaborate? Let's discuss your next project and bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/70 border-slate-200'} backdrop-blur-sm border rounded-2xl p-8 `}
                    >
                        <h3 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            Send Message
                        </h3>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder="Your Full Name"
                                    required
                                    className={`w-full px-6 py-4 rounded-xl ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-500'} border-2 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/20 transition-all duration-300 text-lg`}
                                />
                            </div>
                            
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder="your.email@domain.com"
                                    required
                                    className={`w-full px-6 py-4 rounded-xl ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-500'} border-2 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/20 transition-all duration-300 text-lg`}
                                />
                            </div>
                            
                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    placeholder="Tell me about your project or inquiry..."
                                    required
                                    rows={6}
                                    className={`w-full px-6 py-4 rounded-xl ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-500'} border-2 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/20 transition-all duration-300 text-lg resize-none`}
                                ></textarea>
                            </div>
                            
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl font-semibold text-lg  transition-all duration-300 transform"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Profile Card */}
                        <div className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/70 border-slate-200'} backdrop-blur-sm border rounded-2xl p-8 `}>
                            <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                Contact Information
                            </h3>
                            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-8 leading-relaxed`}>
                                Ready to start your next project? Get in touch and let's make something amazing together.
                            </p>

                            <div className="space-y-6">
                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700 group-hover:bg-slate-600' : 'bg-slate-100 group-hover:bg-slate-200'} transition-all duration-300`}>
                                        <Mail className={`w-6 h-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-medium`}>EMAIL</p>
                                        <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-slate-900'} font-medium`}>c.niyotugen@alustudent.com</p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700 group-hover:bg-slate-600' : 'bg-slate-100 group-hover:bg-slate-200'} transition-all duration-300`}>
                                        <Phone className={`w-6 h-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-medium`}>PHONE</p>
                                        <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-slate-900'} font-medium`}>+250 786 069 425</p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700 group-hover:bg-slate-600' : 'bg-slate-100 group-hover:bg-slate-200'} transition-all duration-300`}>
                                        <MapPin className={`w-6 h-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-medium`}>LOCATION</p>
                                        <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-slate-900'} font-medium`}>Kigali, Rwanda</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/70 border-slate-200'} backdrop-blur-sm border rounded-2xl p-8 `}>
                            <h4 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                Let's Connect
                            </h4>
                            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-8`}>
                                Follow me on social media for updates and insights.
                            </p>
                            
                            <div className="flex gap-4">
                                {[ 
                                    { 
                                        icon: <Linkedin className="w-6 h-6" />, 
                                        href: 'https://www.linkedin.com/in/chancelline-niyotugendana-7430512a4', 
                                        label: 'LinkedIn',
                                        color: 'hover:bg-blue-600'
                                    },
                                    // { 
                                    //     icon: <Github className="w-6 h-6" />, 
                                    //     href: 'https://github.com/chance-niyo', 
                                    //     label: 'GitHub',
                                    //     color: 'hover:bg-gray-700'
                                    // },
                                    { 
                                        icon: <Instagram className="w-6 h-6" />, 
                                        href: 'https://www.instagram.com/chance_lline?igsh=aTBnejZjejRoMHN2', 
                                        label: 'Twitter',
                                        color: 'hover:bg-blue-500'
                                    },
                                ].map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-4 ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'} rounded-xl ${item.color} hover:text-white transition-all duration-300 hover:shadow-xl group`}
                                    >
                                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};