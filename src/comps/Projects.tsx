import { Download, Eye, X, ExternalLink, Calendar, MapPin, Building, GraduationCap, Target, Heart, Users, Camera, BookOpen } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface PortProps {
    isDarkMode: boolean;
}

interface PopupData {
    title: string;
    description: string;
    details: string[];
    duration?: string;
    location?: string;
}

export const RenderPortfolio = ({ isDarkMode }: PortProps) => {
    const [selectedItem, setSelectedItem] = useState<PopupData | null>(null);

    const portfolioArtefacts = [
        {
            id: 1,
            title: "Logistics and Finance Intern – Rwanda Biomedical Center",
            type: "Professional Experience",
            description: "Supported logistics operations and procurement processes to strengthen efficiency in supply tracking.",
            image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop",
            tags: ["Logistics", "Procurement", "Supply Chain", "Finance"],
            duration: "Jan 2025 – Mar 2025",
            location: "Kigali, Rwanda"
        },
        {
            id: 2,
            title: "Secretary, Accountant & Photographer – Flat Production",
            type: "Professional Experience",
            description: "Managed logistical planning, accounting tasks, and visual content delivery for studio operations.",
            image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=400&h=250&fit=crop",
            tags: ["Accounting", "Logistics", "Photography", "Operations"],
            duration: "Jan 2023 – Dec 2023",
            location: "Kigali, Rwanda"
        },
        {
            id: 3,
            title: "Volunteer – ALU Financial Aid Team",
            type: "Volunteer Experience",
            description: "Guided incoming students through services and resources to improve campus experience.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
            tags: ["Student Support", "Coordination", "Guidance", "Service"],
            duration: "Jan 2024 – Present",
            location: "African Leadership University"
        },
        {
            id: 4,
            title: "Volunteer – ALU Marketing Team",
            type: "Volunteer Experience",
            description: "Produced and managed photography content to promote engagement and awareness.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
            tags: ["Photography", "Content Creation", "Marketing", "Engagement"],
            duration: "Sept 2024 – Present",
            location: "African Leadership University"
        },
        {
            id: 5,
            title: "Bachelor of Science in Entrepreneurial Leadership",
            type: "Education",
            description: "3rd year student majoring in Education & Healthcare pathways at African Leadership University.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
            tags: ["Education", "Healthcare", "Entrepreneurship", "Leadership"],
            duration: "May 2023 – Present",
            location: "African Leadership University"
        },
        {
            id: 6,
            title: "CPA Student – ICPAR",
            type: "Education",
            description: "Pursuing CPA certification with focus on Strategy, Leadership, and Corporate Finance.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
            tags: ["Accounting", "Finance", "Strategy", "Certification"],
            duration: "Apr 2025 – Present",
            location: "Institute of Certified Public Accountants of Rwanda"
        },
        {
            id: 7,
            title: "Chance for All Foundation",
            type: "Project & Achievement",
            description: "Founded and developed a mission to support abandoned children in rural Rwanda.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop",
            tags: ["Non-profit", "Child Welfare", "Community", "Leadership"],
            duration: "2023 – Present",
            location: "Rural Rwanda"
        },
        {
            id: 8,
            title: "MTN Iwacu Muzika Festival",
            type: "Project & Achievement",
            description: "Coordinated and assisted in production for nationwide music festival events.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
            tags: ["Event Coordination", "Production", "Photography", "Team Management"],
            duration: "2024 & 2025",
            location: "Nationwide, Rwanda"
        }
    ];

    const experienceDetails: Record<string, PopupData> = {
        "Logistics and Finance Intern – Rwanda Biomedical Center": {
            title: "Logistics and Finance Intern – Rwanda Biomedical Center",
            description: "Supported critical logistics operations and procurement processes to enhance healthcare service efficiency",
            duration: "Jan 2025 – Mar 2025",
            location: "Kigali, Rwanda",
            details: [
                "Supported logistics operations including transport coordination and stock movement management",
                "Assisted procurement processes and maintained vendor communication channels",
                "Strengthened efficiency in supply tracking systems across multiple departments",
                "Contributed to streamlining inventory management processes",
                "Gained hands-on experience in healthcare logistics and financial operations"
            ]
        },
        "Secretary, Accountant & Photographer – Flat Production": {
            title: "Secretary, Accountant & Photographer – Flat Production",
            description: "Managed diverse responsibilities across administration, finance, and creative content production",
            duration: "Jan 2023 – Dec 2023",
            location: "Kigali, Rwanda",
            details: [
                "Managed logistical planning and delivery of visual content for various projects",
                "Oversaw accounting tasks and maintained financial records for studio operations",
                "Handled photography assignments and content creation for clients",
                "Contributed to operational efficiency and enhanced client satisfaction",
                "Balanced multiple roles including administration, finance, and creative work"
            ]
        },
        "Volunteer – ALU Financial Aid Team": {
            title: "Volunteer – ALU Financial Aid Team",
            description: "Supported incoming students through financial services and resource guidance",
            duration: "Jan 2024 – Present",
            location: "African Leadership University",
            details: [
                "Guided incoming students through available financial services and resources",
                "Improved campus experience through personalized support and coordination",
                "Assisted students in understanding financial aid options and requirements",
                "Contributed to creating a supportive environment for new students",
                "Developed strong communication and student support skills"
            ]
        },
        "Volunteer – ALU Marketing Team": {
            title: "Volunteer – ALU Marketing Team",
            description: "Created engaging visual content to promote university events and initiatives",
            duration: "Sept 2024 – Present",
            location: "African Leadership University",
            details: [
                "Produced and managed photography content for various university campaigns",
                "Created engaging visual materials to promote student engagement",
                "Supported marketing initiatives through content creation and management",
                "Collaborated with team members on promotional strategies",
                "Enhanced university's visual presence through quality photography"
            ]
        },
        "Bachelor of Science in Entrepreneurial Leadership": {
            title: "Bachelor of Science in Entrepreneurial Leadership",
            description: "Pursuing comprehensive education in entrepreneurial leadership with focus on education and healthcare",
            duration: "May 2023 – Present",
            location: "African Leadership University",
            details: [
                "3rd year student majoring in Education & Healthcare pathways",
                "Relevant coursework: Creativity & Innovation, Systems Thinking, Financial Management",
                "Additional studies: Business Management, Reflective Thinking, Building Startups",
                "Developing strategic thinking and leadership capabilities",
                "Gaining practical entrepreneurial skills through project-based learning"
            ]
        },
        "CPA Student – ICPAR": {
            title: "CPA Student – Institute of Certified Public Accountants of Rwanda",
            description: "Pursuing professional accounting certification with strategic focus",
            duration: "Apr 2025 – Present",
            location: "ICPAR, Rwanda",
            details: [
                "Currently pursuing CPA certification program",
                "Relevant courses: Strategy & Leadership, Corporate Finance, Business Law",
                "Studying Strategic Performance Management and advanced accounting principles",
                "Developing professional expertise in accounting and financial management",
                "Preparing for comprehensive accounting certification examinations"
            ]
        },
        "Chance for All Foundation": {
            title: "Chance for All Foundation - Founder",
            description: "Established foundation to support abandoned children through holistic interventions",
            duration: "2023 – Present",
            location: "Rural Rwanda",
            details: [
                "Founded and developed mission to support abandoned children in rural Rwanda",
                "Designed and implemented holistic interventions for child welfare",
                "Built community partnerships to support foundation initiatives",
                "Developed strategic plans for sustainable impact and growth",
                "Strengthened resilience and clarified purpose through hands-on leadership"
            ]
        },
        "MTN Iwacu Muzika Festival": {
            title: "MTN Iwacu Muzika Festival - Coordinator & Assistant Director",
            description: "Supported nationwide music festival production and coordination",
            duration: "2024 & 2025",
            location: "Nationwide, Rwanda",
            details: [
                "Worked with Flat Production across Rwanda as Coordinator and Assistant Director",
                "Supported live video feeding, photography, and production throughout the festival",
                "Coordinated teams and ensured smooth operations during events",
                "Contributed to successful nationwide festival execution",
                "Gained experience in large-scale event management and coordination"
            ]
        }
    };

    const handleViewClick = (title: string) => {
        if (experienceDetails[title]) {
            setSelectedItem(experienceDetails[title]);
        }
    };

    const closePopup = () => {
        setSelectedItem(null);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const popupVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <div className={`min-h-screen py-16 px-4 relative ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${isDarkMode ? 'bg-slate-800/20' : 'bg-slate-200/50'} blur-3xl`}></div>
                <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${isDarkMode ? 'bg-slate-800/20' : 'bg-slate-200/50'} blur-3xl`}></div>
            </div>

            <div className="max-w-11/12 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-200 text-slate-700 border border-slate-300'}`}
                    >
                        <span className="w-2 h-2 bg-slate-500 rounded-full mr-2 animate-pulse"></span>
                        Professional Portfolio
                    </motion.div>
                    <h2 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Experience
                        <span className={`block text-transparent bg-clip-text ${isDarkMode ? 'bg-gradient-to-r from-slate-500 to-gray-500' : 'bg-gradient-to-r from-slate-600 to-gray-600'}`}>
                            & Achievements
                        </span>
                    </h2>
                    <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        A comprehensive collection of professional experiences, education, and projects that demonstrate
                        diverse skills and commitment to excellence across multiple domains.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {portfolioArtefacts.map((artefact) => (
                        <motion.div
                            key={artefact.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className={`group relative ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden">
                                <motion.img
                                    src={artefact.image}
                                    alt={artefact.title}
                                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-slate-900/80 via-transparent to-transparent' : 'bg-gradient-to-t from-black/30 via-transparent to-transparent'}`}></div>

                                {/* Type Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-white/90 text-slate-700'}`}>
                                        {artefact.type}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Meta Info */}
                                <div className="flex items-center gap-3 mb-2 text-xs">
                                    <div className={`flex items-center ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {artefact.duration}
                                    </div>
                                </div>

                                <h3 className={`text-lg font-bold mb-2 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {artefact.title}
                                </h3>

                                <p className={`mb-4 leading-relaxed text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {artefact.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {artefact.tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`px-2 py-1 text-xs font-medium rounded ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'}`}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleViewClick(artefact.title)}
                                        className={`group/btn cursor-pointer flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex-1 ${isDarkMode ? 'bg-slate-600 hover:bg-slate-500 text-white' : 'bg-slate-600 hover:bg-slate-500 text-white'}`}
                                    >
                                        <Eye className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform duration-200" />
                                        Details
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enhanced Popup Modal */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                            onClick={closePopup}
                        >
                            <motion.div
                                variants={popupVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-xl border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className={`px-6 py-4 border-b ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`}>
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                                {selectedItem.title}
                                            </h3>
                                            {selectedItem.duration && selectedItem.location && (
                                                <div className="flex items-center gap-4 text-sm">
                                                    <div className={`flex items-center ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        {selectedItem.duration}
                                                    </div>
                                                    <div className={`flex items-center ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                        <MapPin className="w-3 h-3 mr-1" />
                                                        {selectedItem.location}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={closePopup}
                                            className={`p-1 rounded-full transition-colors duration-200 ${isDarkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
                                        >
                                            <X className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 overflow-y-auto max-h-[70vh]">
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className={`text-base leading-relaxed mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                    >
                                        {selectedItem.description}
                                    </motion.p>

                                    <motion.h4
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                                    >
                                        Key Responsibilities & Achievements
                                    </motion.h4>

                                    <div className="space-y-3">
                                        {selectedItem.details.map((detail, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                                className={`flex items-start p-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}
                                            >
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 bg-slate-500`}>
                                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                                </div>
                                                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                                                    {detail}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={closePopup}
                                        className={`mt-6 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${isDarkMode ? 'bg-slate-600 hover:bg-slate-500 text-white' : 'bg-slate-600 hover:bg-slate-500 text-white'}`}
                                    >
                                        Close Details
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}