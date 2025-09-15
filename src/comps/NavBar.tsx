import { BookOpen, Briefcase, Clock, FileText, Home, Mail, Menu, Moon, Sun, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'resume', label: 'CV/Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'essay', label: 'Leadership Essay', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
];

interface NavProps {
    isDarkMode: boolean,
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    activeSection: string
    isMenuOpen: boolean
}

export const RenderNavigation = ({ isDarkMode, setActiveSection, setIsMenuOpen, isMenuOpen, activeSection, setIsDarkMode }: NavProps) => {
    return (
        <>
            {/* Main Navigation */}
            <motion.nav
                className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${isDarkMode
                    ? 'bg-slate-900/90 border-slate-700/50'
                    : 'bg-white/80 border-slate-200/50'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-11/12 mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-18">
                        {/* Logo/Brand */}
                        <motion.div
                            className="flex-shrink-0 flex items-center space-x-3"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div>
                                <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                    Niyotugendana Chancelline
                                </h1>
                                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Child Advocate & Social Entrepreneur
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <div className="flex items-center space-x-2">
                                {navigation.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                        >
                                            <motion.button
                                                onClick={() => {
                                                    if (item.id === "resume") {
                                                        window.open("https://docs.google.com/document/d/16DcQPH2rIc6tPLzJlOQpmrpoyf8Ph1Dkt-LF7yShIRc/edit?tab=t.0", "_blank");
                                                    } else {
                                                        setActiveSection(item.id);
                                                    }
                                                }}
                                                className={`relative flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${isActive
                                                    ? `${isDarkMode ? 'text-white' : 'text-slate-900'}`
                                                    : `${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`
                                                    }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {/* Active background */}
                                                {isActive && (
                                                    <>
                                                        <motion.div
                                                            className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} absolute inset-0 rounded-xl`}
                                                            layoutId="activeTab"
                                                            initial={false}
                                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                        />
                                                    </>
                                                )}

                                                {/* Hover background */}
                                                <motion.div
                                                    className={`absolute inset-0 rounded-xl transition-opacity ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
                                                        } opacity-0 group-hover:opacity-100`}
                                                    initial={false}
                                                />

                                                {/* Content */}
                                                <Icon className="w-4 h-4 mr-2 relative z-10" />
                                                <span className="relative z-10">{item.label}</span>
                                            </motion.button>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center space-x-3">
                            {/* Dark Mode Toggle */}
                            <motion.button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className={`p-3 rounded-xl transition-all duration-300 ${isDarkMode
                                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                                    } shadow-sm`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle dark mode"
                            >
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: isDarkMode ? 0 : 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </motion.div>
                            </motion.button>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${isDarkMode
                                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                                    } shadow-sm`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </motion.div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className={`lg:hidden fixed inset-0 top-18 z-40 ${isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <motion.div
                            className={`p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            exit={{ y: -100 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="space-y-3">
                                {navigation.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;

                                    return (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => {
                                                if (item.id === "resume") {
                                                    window.open("https://docs.google.com/document/d/16DcQPH2rIc6tPLzJlOQpmrpoyf8Ph1Dkt-LF7yShIRc/edit?tab=t.0", "_blank");
                                                } else {
                                                    setActiveSection(item.id);
                                                }
                                                setIsMenuOpen(false);
                                            }}
                                            className={`w-full flex items-center px-4 py-4 rounded-xl text-left font-medium transition-all duration-300 ${isActive
                                                ? `bg-slate-600 text-white shadow-lg`
                                                : `${isDarkMode ? 'text-slate-300 hover:bg-slate-700 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`
                                                }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${isActive
                                                ? 'bg-white/20'
                                                : isDarkMode ? 'bg-slate-600' : 'bg-slate-200'
                                                }`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="text-lg">{item.label}</span>
                                                {item.id === 'home' && (
                                                    <p className={`text-sm mt-1 ${isActive ? 'text-white/70' : isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                                        Mission & Overview
                                                    </p>
                                                )}
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};