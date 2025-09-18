import { Heart, Users, Target, Lightbulb, TrendingUp, Database, Mic, Users2, Target as LeadershipIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface AboutProps {
    isDarkMode: boolean;
}

export const RenderAbout = ({ isDarkMode }: AboutProps) => {
    const aboutCards = [
        {
            id: 1,
            title: "Transformation of Skills and Mindset",
            description: "Developing practical skills and a resilient, adaptable mindset through hands-on learning.",
            details: "Throughout my journey, I have gained practical skills such as problem-solving, critical analysis, and collaboration. I have also deepened my knowledge in leadership and systems thinking, which has helped me better understand complex challenges. Most importantly, my mindset has shifted: I have become more resilient, adaptable, and open to different perspectives, allowing me to face challenges with confidence.",
            icon: Heart,
            category: "Growth"
        },
        {
            id: 2,
            title: "Leadership Theory Application",
            description: "Applying servant and adaptive leadership in real-world situations.",
            details: "During transformational learning experiences, I applied leadership theories such as servant leadership when focusing on supporting my peers, and adaptive leadership when navigating uncertainty. These theories didn't stay in textbooks; I used them to guide my actions and decisions in group projects, presentations, and mission-related work.",
            icon: Users,
            category: "Leadership"
        },
        {
            id: 3,
            title: "Connection to Mission and Future",
            description: "Linking learning experiences to career aspirations and community impact.",
            details: "The insights I've gained directly connect to my mission journey, strengthening my clarity of purpose. Post-graduation, I aspire to expand my work in creating impact through my NGO, while also pursuing opportunities to influence systems at a higher level. My learning journey has given me the foundation to combine passion with strategy.",
            icon: TrendingUp,
            category: "Mission"
        },
        {
            id: 4,
            title: "Supporting Underserved Communities",
            description: "Providing education, healthcare and basic needs to children in rural areas.",
            details: "My mission is to support abandoned children and their families outside Kigali, where there's a significant support gap. I aim to provide education, healthcare, basic needs, and loving care to help these children break the cycle of poverty and create a brighter future for themselves.",
            icon: Target,
            category: "Vision"
        }
    ];

    const skillsData = [
        {
            id: 1,
            title: "Technical Skills",
            description: "Financial management, logistics, procurement, project coordination, content creation, photography, and graphic design.",
            icon: Database,
            category: "Technical"
        },
        {
            id: 2,
            title: "Public Speaking",
            description: "Confident in presenting ideas and engaging diverse audiences with strategic planning abilities.",
            icon: Mic,
            category: "Communication"
        },
        {
            id: 3,
            title: "Teamwork & Engagement",
            description: "Experienced in collaborating with communities and stakeholders with strong engagement skills.",
            icon: Users2,
            category: "Collaboration"
        },
        {
            id: 4,
            title: "Leadership & Soft Skills",
            description: "Strategic planning, adaptability, resilience, creativity, and stakeholder management.",
            icon: LeadershipIcon,
            category: "Leadership"
        }
    ];

    const containerVariants: Variants = {
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardHoverVariants: Variants = {
        hover: {
            y: -4,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-full lg:max-w-11/12 mx-auto">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-shrink-0 max-auto"
                        >
                            <img
                                src="logos/chance3.jpeg"
                                alt="Leadership Portrait"
                                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-xl"
                            />
                        </motion.div>

                        {/* Right Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
                            >
                                About My Journey
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-4xl`}
                            >
                                My learning journey has been one of growth, challenge, and transformation. 
                                Reflecting on it allows me to clearly see how much I have evolved regarding 
                                skills, knowledge, and mindset.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-4xl mt-4`}
                            >
                                <strong>My mission: </strong>
                                is to support abandoned children and their families. I aim to provide education, 
                                healthcare, basic needs, and loving care to underserved children in rural areas, 
                                addressing the significant support gap outside Kigali. By doing so, I hope to help 
                                these children break the cycle of poverty and create a brighter future for themselves.
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-8 mb-16"
                >
                    {aboutCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.id}
                                variants={itemVariants}
                                whileHover="hover"
                                className="group cursor-pointer"
                            >
                                <motion.div
                                    variants={cardHoverVariants}
                                    className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} 
                                        rounded-xl p-8 h-full transition-all duration-300`}
                                >
                                    {/* Header */}
                                    <div className="flex items-start mb-6">
                                        <div className={`flex-shrink-0 w-12 h-12 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-500'} 
                                            rounded-xl flex items-center justify-center mr-4`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-lg mb-3
                                                ${isDarkMode
                                                    ? 'bg-slate-800/40 text-slate-200'
                                                    : 'bg-slate-100 text-slate-700'
                                                }`}>
                                                {card.category}
                                            </span>
                                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                                                {card.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-semibold mb-4 text-lg`}>
                                        {card.description}
                                    </p>

                                    {/* Details */}
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                        {card.details}
                                    </p>

                                    {/* Subtle bottom divider */}
                                    <div className={`mt-6 w-full h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Skills Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
                        >
                            Skills & Competencies
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}
                        >
                            Through my experiences, I've developed a diverse skill set that enables me to create meaningful impact in underserved communities.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {skillsData.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.id}
                                    variants={itemVariants}
                                    whileHover="hover"
                                    className="group cursor-pointer"
                                >
                                    <motion.div
                                        variants={cardHoverVariants}
                                        className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} 
                                            rounded-xl p-8 h-full transition-all duration-300`}
                                    >
                                        {/* Header */}
                                        <div className="flex items-start mb-6">
                                            <div className={`flex-shrink-0 w-12 h-12 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-500'} 
                                                rounded-xl flex items-center justify-center mr-4`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-lg mb-3
                                                    ${isDarkMode
                                                        ? 'bg-slate-800/40 text-slate-200'
                                                        : 'bg-slate-100 text-slate-700'
                                                    }`}>
                                                    {skill.category}
                                                </span>
                                                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                                                    {skill.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                            {skill.description}
                                        </p>

                                        {/* Subtle bottom divider */}
                                        <div className={`mt-6 w-full h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Language Proficiency */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className={`mb-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} 
                        rounded-xl p-8 text-center`}
                >
                    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                        Language Proficiency
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-800/40 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
                            Kinyarwanda (Native)
                        </div>
                        <div className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-800/40 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
                            English (Expert)
                        </div>
                        <div className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-800/40 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
                            French (Beginner)
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={`text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} 
                        rounded-xl p-8`}
                >
                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-500'} rounded-full 
                        flex items-center justify-center mx-auto mb-6`}>
                        <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                        My Leadership Philosophy
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed max-w-3xl mx-auto`}>
                        Looking back, I see a journey that has transformed not only what I know but also who I am becoming. 
                        My career path and mission goals are clearer because of the skills, insights, and leadership practices 
                        I have developed. I am committed to carrying this growth forward, using it to shape my leadership style 
                        and to make a lasting impact in the communities I serve.
                    </p>
                    <div className={`mt-6 inline-flex items-center px-6 py-3 rounded-xl
                        ${isDarkMode
                            ? 'text-slate-400 bg-gray-700/50'
                            : 'text-slate-700 bg-slate-50'
                        }`}>
                        <Target className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Committed to supporting abandoned children and breaking cycles of poverty</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};