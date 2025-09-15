import { BookOpen, Briefcase, Clock, FileText, Github, Home, Linkedin, Mail, ArrowUp, MapPin, Phone } from "lucide-react";
import { useState } from "react";

interface renderProps {
    isDarkMode: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const Footer = ({ isDarkMode, setActiveSection }: renderProps) => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const navigation = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'resume', label: 'CV/Resume', icon: FileText },
        { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
        { id: 'timeline', label: 'Timeline', icon: Clock },
        { id: 'essay', label: 'Leadership Essay', icon: BookOpen },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`relative py-16 px-4 ${isDarkMode ? 'bg-gray-950 text-gray-300' : 'bg-slate-100 text-gray-700'} border-t ${isDarkMode ? 'border-gray-800' : 'border-slate-300'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, ${isDarkMode ? '#1f2937' : '#e2e8f0'} 2px, ${isDarkMode ? '#1f2937' : '#e2e8f0'} 4px)`
                }}></div>
            </div>

            <div className="max-w-11/12 mx-auto relative z-10">
                {/* Main Content */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className={`text-3xl font-black mb-2 tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Niyotugendana
                            </h3>
                            <h4 className={`text-2xl font-light text-slate-500 mb-4`}>
                                Chancelline
                            </h4>
                        </div>
                        
                        <p className={`text-lg mb-6 leading-relaxed max-w-md ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Transformational leader dedicated to creating sustainable change through innovative leadership and community engagement.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4 mb-8">
                            <a
                                href="linkedin.com/in/chancelline-niyotugendana-7430512a4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative p-4 ${isDarkMode ? 'bg-gray-900 hover:bg-slate-500' : 'bg-white hover:bg-slate-500'} rounded-xl transition-all duration-300  hover:shadow-xl hover:scale-105`}
                                aria-label="LinkedIn"
                                onMouseEnter={() => setHoveredLink('linkedin')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Linkedin className={`w-6 h-6 ${hoveredLink === 'linkedin' ? 'text-white' : 'text-slate-500'} transition-colors duration-300`} />
                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-slate-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            
                            <a
                                href="https://github.com/chance-niyo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative p-4 ${isDarkMode ? 'bg-gray-900 hover:bg-slate-500' : 'bg-white hover:bg-slate-500'} rounded-xl transition-all duration-300  hover:shadow-xl hover:scale-105`}
                                aria-label="GitHub"
                                onMouseEnter={() => setHoveredLink('github')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Github className={`w-6 h-6 ${hoveredLink === 'github' ? 'text-white' : 'text-slate-500'} transition-colors duration-300`} />
                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-slate-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            
                            <a
                                href="mailto:s.igiraneza@alustudent.com"
                                className={`group relative p-4 ${isDarkMode ? 'bg-gray-900 hover:bg-slate-500' : 'bg-white hover:bg-slate-500'} rounded-xl transition-all duration-300  hover:shadow-xl hover:scale-105`}
                                aria-label="Email"
                                onMouseEnter={() => setHoveredLink('email')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Mail className={`w-6 h-6 ${hoveredLink === 'email' ? 'text-white' : 'text-slate-500'} transition-colors duration-300`} />
                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-slate-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div>
                        <h4 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => setActiveSection(item.id)}
                                            className={`group flex items-center w-full p-3 rounded-xl transition-all duration-300 ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-white'} hover: hover:scale-102`}
                                        >
                                            <Icon className="w-5 h-5 mr-3 text-slate-500 group-hover:text-slate-600 transition-colors duration-300" />
                                            <span className={`font-medium group-hover:${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                                                {item.label}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Get In Touch
                        </h4>
                        <div className="space-y-4">
                            <div className={`flex items-start p-4 rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} `}>
                                <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-slate-500" />
                                <div>
                                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Email</p>
                                    <a 
                                        href="mailto:s.igiraneza@alustudent.com"
                                        className={`${isDarkMode ? 'text-white hover:text-slate-400' : 'text-gray-900 hover:text-slate-600'} transition-colors duration-300 font-medium`}
                                    >
                                        s.igiraneza@alustudent.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className={`flex items-start p-4 rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} `}>
                                <Linkedin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-slate-500" />
                                <div>
                                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>LinkedIn</p>
                                    <a
                                        href="linkedin.com/in/chancelline-niyotugendana-7430512a4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${isDarkMode ? 'text-white hover:text-slate-400' : 'text-gray-900 hover:text-slate-600'} transition-colors duration-300 font-medium`}
                                    >
                                        /in/chance-niyo
                                    </a>
                                </div>
                            </div>

                            <div className={`flex items-start p-4 rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} `}>
                                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-slate-500" />
                                <div>
                                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Location</p>
                                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium`}>Kigali, Rwanda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-slate-300'} my-8`}></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            © {new Date().getFullYear()} niyotugendana chancelline. All rights reserved.
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                            Designed and built with{' '}
                            <a 
                                href="https://www.nexventures.net/" 
                                className="text-slate-500 hover:text-slate-600 font-medium transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nexventures
                            </a>
                        </p>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className={`group flex items-center gap-2 px-6 py-3 rounded-full ${isDarkMode ? 'bg-gray-900 hover:bg-slate-500' : 'bg-white hover:bg-slate-500'} text-slate-500 hover:text-white transition-all duration-300  hover:shadow-xl hover:scale-105`}
                    >
                        <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
                        <span className="font-medium">Back to Top</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};