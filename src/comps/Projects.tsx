import { Download, Eye, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface PortProps {
    isDarkMode: boolean;
}

interface PopupData {
    title: string;
    description: string;
    details: string[];
}

export const RenderPortfolio = ({ isDarkMode }: PortProps) => {
    const [selectedItem, setSelectedItem] = useState<PopupData | null>(null);

    const portfolioArtefacts = [
        {
            id: 5,
            title: "Work at Plan International Rwanda",
            type: "Professional Experience",
            description: "Strategic planning and community development initiatives focused on sustainable growth in Rwanda.",
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop",
            tags: ["Strategic Planning", "Community Development", "Sustainability"]
        },
        {
            id: 6,
            title: "Lead Abezabarkang Dancing Club",
            type: "Leadership Experience",
            description: "Directed cultural preservation efforts through traditional dance, organizing performances and workshops.",
            image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=250&fit=crop",
            tags: ["Cultural Leadership", "Event Organization", "Team Management"]
        },
        {
            id: 7,
            title: "Sales Manager at NexVentures",
            type: "Professional Experience",
            description: "Led sales team to achieve record revenue growth through strategic client acquisition and retention.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
            tags: ["Sales Leadership", "Revenue Growth", "Team Management"]
        },
        {
            id: 8,
            title: "Business Leadership at NexStudio Consulting",
            type: "Business Leadership",
            description: "Guided startups and SMEs to scale operations and optimize business strategies for long-term growth.",
            image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
            tags: ["Business Strategy", "Leadership", "Operational Excellence"]
        }
    ];

    const experienceDetails: Record<string, PopupData> = {
        "Work at Plan International Rwanda": {
            title: "Plann Rwanda - Strategic Development Role",
            description: "Focused on sustainable community development and strategic planning initiatives",
            details: [
                "Developed and implemented strategic plans for community development projects",
                "Collaborated with local leaders to identify growth opportunities",
                "Managed stakeholder relationships and partnership development",
                "Coordinated sustainable development initiatives across multiple regions",
                "Achieved 30% increase in project efficiency through improved planning processes"
            ]
        },
        "Lead Abezabarkang Dancing Club": {
            title: "Abezabarkang Dancing Club - Cultural Leadership",
            description: "Promoting cultural heritage through traditional dance and community engagement",
            details: [
                "Directed a team of 25+ dancers in performances and cultural events",
                "Organized workshops to teach traditional dances to youth",
                "Coordinated participation in national cultural festivals",
                "Increased club membership by 40% through community outreach",
                "Developed partnerships with cultural organizations for collaborative events"
            ]
        },
        "Sales Manager at NexVentures": {
            title: "NexVentures - Sales Management",
            description: "Drove revenue growth and market expansion through strategic sales leadership",
            details: [
                "Led a team of 12 sales professionals to exceed quarterly targets",
                "Developed and implemented new sales strategies resulting in 35% revenue growth",
                "Built and maintained key client relationships with Fortune 500 companies",
                "Trained and mentored junior sales staff, improving team performance by 25%",
                "Implemented CRM system that increased sales efficiency by 40%"
            ]
        },
        "Business Leadership at NexStudio Consulting": {
            title: "NexStudio Consulting - Business Leadership",
            description: "Advising startups and SMEs on scaling operations and improving business strategies",
            details: [
                "Developed growth strategies for 10+ startups, resulting in an average 50% revenue increase",
                "Optimized operational processes to improve efficiency and reduce costs",
                "Mentored business owners on leadership and strategic decision-making",
                "Facilitated workshops on business planning, marketing, and financial management",
                "Built partnerships with investors and industry leaders to support business growth"
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
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const popupVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    return (
        <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-full md:max-w-11/12 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`text-4xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                    Portfolio Artefacts
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`text-center mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}
                >
                    A collection of professional documents and project deliverables showcasing my leadership experience and strategic thinking.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {portfolioArtefacts.map((artefact) => (
                        <motion.div
                            key={artefact.id}
                            variants={itemVariants}
                            whileHover="hover"
                            // variants={hoverVariants}
                            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden transition-all duration-300`}
                        >
                            <div className="overflow-hidden">
                                <motion.img
                                    src={artefact.image}
                                    alt={artefact.title}
                                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                                    whileHover={{ scale: 1.05 }}
                                />
                            </div>
                            <div className="p-5">
                                <div className={`inline-block px-3 py-1 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-100'} ${isDarkMode ? 'text-white' : 'text-slate-800'} text-sm font-medium rounded-full mb-4`}>
                                    {artefact.type}
                                </div>
                                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {artefact.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed text-sm`}>
                                    {artefact.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {artefact.tags.map((tag) => (
                                        <span key={tag} className={`px-2 py-1 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} text-xs rounded`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleViewClick(artefact.title)}
                                        className={`flex items-center px-4 py-2 ${isDarkMode ? 'bg-slate-600 hover:bg-slate-700' : 'bg-slate-600 hover:bg-slate-700'} text-white rounded-lg text-sm font-medium transition-colors duration-200 flex-1 justify-center`}
                                    >
                                        <Eye className="w-4 h-4 mr-2" />
                                        View Details
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex hidden items-center px-4 py-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border rounded-lg text-sm font-medium transition-colors duration-200`}
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Popup Modal */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center p-4 z-50"
                            onClick={closePopup}
                        >
                            <motion.div
                                variants={popupVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {selectedItem.title}
                                        </h3>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={closePopup}
                                            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                        >
                                            <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                                        </motion.button>
                                    </div>

                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                                        {selectedItem.description}
                                    </p>

                                    <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Key Achievements & Responsibilities:
                                    </h4>

                                    <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {selectedItem.details.map((detail, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start"
                                            >
                                                <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-400'}`}></span>
                                                {detail}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={closePopup}
                                        className={`mt-6 px-6 py-2 ${isDarkMode ? 'bg-slate-600 hover:bg-slate-700' : 'bg-slate-600 hover:bg-slate-700'} text-white rounded-lg font-medium transition-colors duration-200`}
                                    >
                                        Close
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