import { Award, Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

interface Timeline {
    isDarkMode: boolean;
}

export const RenderTimeline = ({ isDarkMode }: Timeline) => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(timelineRef, { once: true, amount: 0.1 });
    const controls = useAnimation();

    const timelineEvents = [
        {
            year: "2019",
            title: "Founded First Social Enterprise",
            description: "Launched a social enterprise focused on providing digital literacy training to underserved communities.",
            icon: Lightbulb,
            achievement: "Served 500+ community members"
        },
        {
            year: "2020",
            title: "Leadership Development Program",
            description: "Completed intensive leadership certification and began mentoring young entrepreneurs.",
            icon: Award,
            achievement: "Mentored 25+ entrepreneurs"
        },
        {
            year: "2021",
            title: "Strategic Partnership Initiative",
            description: "Established partnerships with 3 major organizations to expand community impact.",
            icon: Users,
            achievement: "3x program reach expansion"
        },
        {
            year: "2023",
            title: "Innovation Lab Launch",
            description: "Created an innovation lab to support tech startups in emerging markets.",
            icon: Target,
            achievement: "15 startups accelerated"
        },
        {
            year: "2024",
            title: "Regional Leadership Recognition",
            description: "Received regional award for entrepreneurial leadership and community impact.",
            icon: TrendingUp,
            achievement: "Regional Excellence Award"
        }
    ];

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const hoverVariants: Variants = {
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const iconVariants: Variants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto w-full lg:max-w-11/12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Leadership Journey Timeline
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}
                    >
                        Key milestones and achievements in my entrepreneurial leadership journey.
                    </motion.p>
                </div>

                <div className="relative" ref={timelineRef}>
                    {/* Timeline line */}
                    <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 md:translate-x-0 
                        ${isDarkMode ? 'bg-gradient-to-b from-slate-500 to-slate-700' : 'bg-gradient-to-b from-slate-300 to-slate-500'}`}></div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="space-y-4"
                    >
                        {timelineEvents.map((event, index) => {
                            const Icon = event.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex flex-col md:flex-row items-start relative"
                                >

                                    {/* Content card */}
                                    <motion.div
                                        variants={hoverVariants}
                                        whileHover="hover"
                                        className={`ml-0 md:ml-8 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'} 
                                        rounded-xl p-6
                                        ${isDarkMode
                                                ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white'
                                                : 'bg-gradient-to-r from-white to-gray-50 text-gray-900'
                                            }`}
                                    >
                                        {/* Timeline dot with animation */}
                                        <motion.div
                                            variants={iconVariants}
                                            whileHover="hover"
                                            className={`flex items-center justify-center w-12 h-12 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-500'} 
                                                    rounded-full z-10 relative mx-auto md:mx-0 mb-4 md:mb-0`}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {event.title}
                                            </h3>
                                            <span className={`inline-block px-3 py-1 mt-2 sm:mt-0 text-sm font-medium rounded-full 
                                                ${isDarkMode
                                                    ? 'bg-slate-700 text-white'
                                                    : 'bg-slate-100 text-slate-800'
                                                }`}>
                                                {event.year}
                                            </span>
                                        </div>
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 leading-relaxed`}>
                                            {event.description}
                                        </p>
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                                            ${isDarkMode
                                                ? 'bg-gray-700 text-slate-300'
                                                : 'bg-slate-50 text-slate-700'
                                            }`}>
                                            <Award className="w-4 h-4 mr-2" />
                                            {event.achievement}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};