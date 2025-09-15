import { ArrowRight, Target, Users, Heart, Linkedin } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface renderProps {
    isDarkMode: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const RenderHome = ({ isDarkMode, setActiveSection }: renderProps) => {
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const floatVariants: Variants = {
        float: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants: Variants = {
        pulse: {
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {/* Animated floating elements */}
            <motion.div
                className="absolute top-20 left-10"
                variants={floatVariants}
                animate="float"
            >
                <div className={`w-4 h-4 rounded-full ${isDarkMode ? 'bg-slate-500/40' : 'bg-slate-400/30'}`}></div>
            </motion.div>

            <motion.div
                className="absolute top-1/3 right-20"
                variants={floatVariants}
                animate="float"
                transition={{ delay: 1 }}
            >
                <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-slate-500/30' : 'bg-slate-400/20'}`}></div>
            </motion.div>

            <motion.div
                className="absolute bottom-40 left-1/4"
                variants={floatVariants}
                animate="float"
                transition={{ delay: 2 }}
            >
                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-slate-500/30' : 'bg-slate-400/20'}`}></div>
            </motion.div>

            <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <motion.div
                    className="text-center xl:flex lg:gap-8 items-center flex-row-reverse"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Profile image with elegant frame */}
                    <motion.div
                        className="mb-12 relative inline-block"
                        variants={itemVariants}
                    >
                        <div className="relative h-132 w-132 mx-auto">
                            <motion.div
                                className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-500'}`}
                                variants={pulseVariants}
                                animate="pulse"
                            />
                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl border-2 border-white dark:border-slate-600">
                                <img
                                    src="/logos/sheilla3.jpeg"
                                    alt="niyotugendana chancelline - Professional Portrait"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </motion.div>
                    <div>


                        {/* Name with elegant typography */}
                        <motion.div
                            className="mb-6"
                            variants={itemVariants}
                        >
                            <h1 className={`text-4xl font-delius text-left md:text-5xl lg:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                niyotugendana chancelline
                            </h1>
                            <div className={`w-32 h-1 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-500'} rounded-full mb-4`}></div>
                            <p className={`text-xl text-left md:text-2xl mb-8 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                Transformational Leader | Social Entrepreneur | Community Builder
                            </p>
                        </motion.div>

                        {/* Mission statement with elegant card */}
                        <motion.div
                            className={`max-w-5xl mx-auto mb-14 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} `}
                            variants={itemVariants}
                        >
                            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} italic text-center`}>
                                "Passionate about creating sustainable change through innovative leadership, community engagement, and strategic partnerships. With over 5 years of experience in social entrepreneurship and community development, I'm committed to building bridges between vision and impact."
                            </p>
                        </motion.div>

                        {/* Key strengths grid */}
                        <motion.div
                            className="grid md:grid-cols-3 gap-6 mb-14 max-w-4xl "
                            variants={itemVariants}
                        >
                            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50 '} cursor-pointer transition-all duration-300 hover:shadow-lg`}>
                                <div className={`w-12 h-12 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                                    <Target className={`w-6 h-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`} />
                                </div>
                                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Strategic Vision</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Transforming ideas into impactful initiatives</p>
                            </div>

                            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50 '} cursor-pointer transition-all duration-300 hover:shadow-lg`}>
                                <div className={`w-12 h-12 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                                    <Users className={`w-6 h-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`} />
                                </div>
                                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Community Building</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Creating collaborative ecosystems for change</p>
                            </div>

                            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50 '} cursor-pointer transition-all duration-300 hover:shadow-lg`}>
                                <div className={`w-12 h-12 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                                    <Heart className={`w-6 h-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`} />
                                </div>
                                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Social Impact</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Driving sustainable positive change</p>
                            </div>
                        </motion.div>

                        {/* Call to action buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-5 justify-start items-center"
                            variants={itemVariants}
                        >
                            <motion.button
                                onClick={() => setActiveSection('portfolio')}
                                className={`group relative px-8 py-4 rounded-lg font-semibold transition-all duration-300 overflow-hidden ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-600 hover:bg-slate-500 text-white'} shadow-md hover:shadow-lg`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center">
                                    View My Work
                                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>

                            <motion.a
                                onClick={() => setActiveSection('contact')}
                                className={`group relative px-8 py-4 rounded-lg font-semibold border transition-all duration-300 overflow-hidden ${isDarkMode ? 'border-slate-500 text-slate-400 hover:bg-slate-700' : 'border-slate-500 text-slate-600 hover:bg-slate-500 hover:text-white'} shadow-md hover:shadow-lg`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center">
                                    <Linkedin className="w-5 h-5 mr-2" />
                                    Connect on LinkedIn
                                </span>
                            </motion.a>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};