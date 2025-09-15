import { BookOpen, Briefcase, Clock, FileText, Home, Mail, Menu, Moon, Sun, X } from "lucide-react";

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
        <nav className={`${isDarkMode ? 'bg-gray-800 ' : 'bg-gray-100'}  sticky top-0 z-50`}>
            <div className="max-w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className={`text-2xl font-delius font-bold capitalize ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            niyotugendana chancelline
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            item.id == "resume" ?
                                                window.location.href = "https://docs.google.com/document/d/16DcQPH2rIc6tPLzJlOQpmrpoyf8Ph1Dkt-LF7yShIRc/edit?tab=t.0"
                                                :
                                                setActiveSection(item.id)
                                        }}
                                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                                            ? `${isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`
                                            : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-slate-300' : 'text-gray-700 hover:bg-gray-50 hover:text-slate-600'}`
                                            }`}
                                    >
                                        <Icon className="w-4 h-4 mr-2" />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dark Mode Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 rounded-md ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`p-2 rounded-md ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveSection(item.id);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${activeSection === item.id
                                            ? `${isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-800'}`
                                            : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-slate-300' : 'text-gray-700 hover:bg-gray-50 hover:text-slate-600'}`
                                            }`}
                                    >
                                        <Icon className="w-4 h-4 mr-2" />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}