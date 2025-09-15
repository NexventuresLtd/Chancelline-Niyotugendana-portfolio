import { ArrowRight, Heart, BookOpen, Stethoscope, Home, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface renderProps {
    isDarkMode: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const RenderHome = ({ isDarkMode, setActiveSection }: renderProps) => {
    // Simplified animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
            {/* Subtle animated background */}
            <motion.div 
                className="absolute inset-0 opacity-20"
                style={{
                    background: isDarkMode 
                        ? 'radial-gradient(circle at 30% 50%, #334155, transparent 50%)'
                        : 'radial-gradient(circle at 70% 50%, #e2e8f0, transparent 50%)'
                }}
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative z-10 max-w-11/12 mx-auto px-6 lg:px-8 py-16">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Content Section */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-800'}`}>
                                <Heart className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium">Empowering Children's Futures</span>
                            </div>
                            
                            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                <span className="block">Niyotugendana</span>
                                <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Chancelline
                                </span>
                            </h1>
                            
                            <p className={`text-xl lg:text-2xl font-medium mb-8 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                Social Entrepreneur & Child Advocate
                            </p>
                        </motion.div>

                        <motion.div 
                            className={`relative p-6 rounded-xl ${isDarkMode ? 'bg-slate-800/80 text-slate-200' : 'bg-white text-slate-800'}`}
                            variants={itemVariants}
                        >
                            <h2 className="text-xl font-bold mb-4">My Mission</h2>
                            <p className="leading-relaxed">
                                Supporting abandoned children and their families by providing education, healthcare, basic needs, and loving care to underserved children in rural areas.
                            </p>
                        </motion.div>

                        {/* Impact Areas */}
                        <motion.div 
                            className="grid grid-cols-2 md:grid-cols-4 gap-3"
                            variants={itemVariants}
                        >
                            {[
                                { icon: BookOpen, label: "Education", color: "slate" },
                                { icon: Stethoscope, label: "Healthcare", color: "emerald" },
                                { icon: Home, label: "Basic Needs", color: "purple" },
                                { icon: Heart, label: "Loving Care", color: "rose" }
                            ].map((item) => (
                                <motion.div
                                    key={item.label}
                                    className={`p-3 rounded-lg text-center ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-gray-100'}`}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={`w-8 h-8 mx-auto mb-2 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} flex items-center justify-center`}>
                                        <item.icon className={`w-4 h-4 ${isDarkMode ? `text-${item.color}-400` : `text-${item.color}-600`}`} />
                                    </div>
                                    <p className="text-sm font-medium ">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <motion.button
                                onClick={() => setActiveSection('portfolio')}
                                className={`px-6 cursor-pointer py-3 ${isDarkMode ? 'bg-slate-600 hover:bg-slate-700' : 'bg-slate-600 hover:bg-slate-700'} text-white rounded-lg font-semibold flex items-center justify-center`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </motion.button>

                            <motion.button
                                onClick={() => setActiveSection('contact')}
                                className={`px-6 py-3 cursor-pointer rounded-lg font-semibold border ${isDarkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Get In Touch
                                </span>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <motion.div 
                        className="relative flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative w-72 h-72 lg:w-132 lg:h-132">
                            <div className={`absolute inset-0 rounded-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-xl`} />
                            <div className="absolute inset-3 rounded-xl overflow-hidden">
                                <img
                                    src="/logos/chance.jpeg"
                                    alt="Niyotugendana Chancelline - Professional Portrait"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>
                            
                            {/* Experience badge */}
                            <motion.div
                                className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'} shadow-lg border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
                                whileHover={{ y: -3 }}
                            >
                                <p className="text-sm font-semibold">5+ Years Experience</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};