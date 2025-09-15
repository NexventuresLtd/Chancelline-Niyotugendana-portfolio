import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface EducationProps {
    isDarkMode: boolean;
}

export const RenderEducation = ({ isDarkMode }: EducationProps) => {
    const containerVariants:Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants:Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-slate-50'}`}>
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <GraduationCap className={`w-8 h-8 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`} />
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-light mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        Education
                    </h2>
                    <div className={`w-24 h-px ${isDarkMode ? 'bg-slate-600' : 'bg-slate-400'} mx-auto`} />
                </motion.div>

                {/* Education Timeline */}
                <motion.div 
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Bachelor's Degree */}
                    <motion.div 
                        className={`relative p-8 rounded-xl border transition-all duration-300 hover:shadow-xl ${
                            isDarkMode 
                                ? 'bg-slate-800 border-slate-700 hover:border-slate-600' 
                                : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        {/* Timeline Indicator */}
                        <div className={`absolute -left-4 top-8 w-8 h-8 rounded-full border-4 ${
                            isDarkMode ? 'bg-slate-900 border-slate-600' : 'bg-slate-50 border-slate-300'
                        } flex items-center justify-center`}>
                            <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-slate-500' : 'bg-slate-600'}`} />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                            <div className="flex-1">
                                <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                    Bachelor of Science in Entrepreneurial Leadership
                                </h3>
                                <div className={`flex items-center mb-2 text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                    <BookOpen className="w-5 h-5 mr-2" />
                                    African Leadership University
                                </div>
                                <div className={`flex items-center ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <Calendar className="w-4 h-4 mr-2" />
                                    May 2023 – Present
                                </div>
                            </div>
                            <div className={`mt-4 md:mt-0 md:ml-6 px-4 py-2 rounded-full text-sm font-medium ${
                                isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                            }`}>
                                In Progress
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className={`flex items-start ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-400'}`} />
                                <span>3rd year student majoring in Education & Healthcare pathways</span>
                            </div>
                            <div className={`ml-5 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                <p className="font-medium mb-2">Relevant Coursework:</p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Creativity & Innovation',
                                        'Systems Thinking', 
                                        'Financial Management',
                                        'Business Management',
                                        'Reflective Thinking',
                                        'Building Startups'
                                    ].map((course) => (
                                        <span 
                                            key={course}
                                            className={`px-3 py-1 rounded-full text-sm ${
                                                isDarkMode 
                                                    ? 'bg-slate-700 text-slate-300' 
                                                    : 'bg-slate-100 text-slate-600'
                                            }`}
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CPA Certification */}
                    <motion.div 
                        className={`relative p-8 rounded-xl border transition-all duration-300 hover:shadow-xl ${
                            isDarkMode 
                                ? 'bg-slate-800 border-slate-700 hover:border-slate-600' 
                                : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        {/* Timeline Indicator */}
                        <div className={`absolute -left-4 top-8 w-8 h-8 rounded-full border-4 ${
                            isDarkMode ? 'bg-slate-900 border-slate-600' : 'bg-slate-50 border-slate-300'
                        } flex items-center justify-center`}>
                            <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-slate-500' : 'bg-slate-600'}`} />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                            <div className="flex-1">
                                <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                    CPA Student – ICPAR
                                </h3>
                                <div className={`flex items-center mb-2 text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                    <Award className="w-5 h-5 mr-2" />
                                    Institute of Certified Public Accountants of Rwanda
                                </div>
                                <div className={`flex items-center ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <Calendar className="w-4 h-4 mr-2" />
                                    April 2025 – Present
                                </div>
                            </div>
                            <div className={`mt-4 md:mt-0 md:ml-6 px-4 py-2 rounded-full text-sm font-medium ${
                                isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                            }`}>
                                Pursuing
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className={`flex items-start ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-400'}`} />
                                <span>Pursuing CPA certification</span>
                            </div>
                            <div className={`ml-5 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                <p className="font-medium mb-2">Relevant Courses:</p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Strategy & Leadership',
                                        'Corporate Finance',
                                        'Business Law',
                                        'Strategic Performance Management'
                                    ].map((course) => (
                                        <span 
                                            key={course}
                                            className={`px-3 py-1 rounded-full text-sm ${
                                                isDarkMode 
                                                    ? 'bg-slate-700 text-slate-300' 
                                                    : 'bg-slate-100 text-slate-600'
                                            }`}
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Timeline Line */}
                <div className={`absolute left-0 top-32 bottom-0 w-px ml-4 ${
                    isDarkMode ? 'bg-slate-700' : 'bg-slate-300'
                } hidden md:block`} />
            </div>
        </div>
    );
};