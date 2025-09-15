import { BookOpen, Briefcase, Clock, FileText, Github, Home, Linkedin, Mail } from "lucide-react";
interface renderProps {
    isDarkMode: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}
export const Footer = ({ isDarkMode, setActiveSection }: renderProps) => {
    const navigation = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'resume', label: 'CV/Resume', icon: FileText },
        { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
        { id: 'timeline', label: 'Timeline', icon: Clock },
        { id: 'essay', label: 'Leadership Essay', icon: BookOpen },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];

    return (
        <footer className={`py-12 px-4 ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="max-w-11/12 mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className={`text-xl font-delius font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            niyotugendana chancelline
                        </h3>
                        <p className="mb-4 leading-relaxed">
                            Transformational leader dedicated to creating sustainable change through innovative leadership and community engagement.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://linkedin.com/in/Igiraneza-Sheilla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-slate-400 hover:bg-slate-600' : 'bg-white text-slate-600 hover:bg-slate-600'} rounded-full hover:text-white transition-colors duration-200 shadow-sm`}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/Igiraneza-Sheilla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-slate-400 hover:bg-slate-600' : 'bg-white text-slate-600 hover:bg-slate-600'} rounded-full hover:text-white transition-colors duration-200 shadow-sm`}
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:s.igiraneza@alustudent.com"
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-slate-400 hover:bg-slate-600' : 'bg-white text-slate-600 hover:bg-slate-600'} rounded-full hover:text-white transition-colors duration-200 shadow-sm`}
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => setActiveSection(item.id)}
                                        className={`hover:${isDarkMode ? 'text-slate-400' : 'text-slate-600'} transition-colors duration-200`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Get In Touch
                        </h4>
                        <div className="space-y-2">
                            <p className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>s.igiraneza@alustudent.com</span>
                            </p>
                            <p className="flex items-start">
                                <Linkedin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <a
                                    href="https://linkedin.com/in/Igiraneza-Sheilla"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`hover:${isDarkMode ? 'text-slate-400' : 'text-slate-600'} transition-colors duration-200`}
                                >
                                    linkedin.com/in/Igiraneza-Sheilla
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={`pt-8 border-t md:flex justify-between ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} text-center text-sm`}>
                    <p>© {new Date().getFullYear()} niyotugendana chancelline. All rights reserved.</p>
                    <p className="mt-1">Designed and built with <a href="https://www.nexventures.net/" className="text-red-500">Nexventures</a></p>
                </div>
            </div>
        </footer>
    )
}