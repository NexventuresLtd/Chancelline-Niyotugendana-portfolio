import { Award, Truck, Camera, Heart, Megaphone, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

interface Timeline {
    isDarkMode: boolean;
}

export const RenderTimeline = ({ isDarkMode }: Timeline) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const timelineEvents = [
        {
            year: "2023",
            title: "Secretary, Accountant & Photographer – Flat Production",
            description: "Managed logistical planning and delivery of visual content. Oversaw accounting tasks and studio operations.",
            icon: Camera,
            achievement: "Contributed to efficiency and client satisfaction"
        },
        {
            year: "2024",
            title: "Volunteer – ALU Financial Aid Team",
            description: "Guided incoming students through services and resources to improve their campus experience.",
            icon: Heart,
            achievement: "Enhanced student support and coordination"
        },
        {
            year: "2024",
            title: "Volunteer – ALU Marketing Team",
            description: "Produced and managed photography content to promote engagement and awareness.",
            icon: Megaphone,
            achievement: "Increased promotional content quality"
        },
        {
            year: "2025",
            title: "Logistics and Finance Intern – Rwanda Biomedical Center",
            description: "Supported logistics operations including transport and stock movement. Assisted procurement processes.",
            icon: Truck,
            achievement: "Strengthened efficiency in supply tracking"
        }
    ];

    return (
        <div className={`min-h-screen py-20 px-4 relative overflow-hidden ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #64748b 0%, transparent 50%), 
                                     radial-gradient(circle at 75% 75%, #475569 0%, transparent 50%)`
                }}></div>
            </div>

            <div className="max-w-11/12 mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className={`w-12 h-0.5 ${isDarkMode ? 'bg-slate-400' : 'bg-slate-600'}`}></div>
                        <Calendar className={`w-8 h-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`} />
                        <div className={`w-12 h-0.5 ${isDarkMode ? 'bg-slate-400' : 'bg-slate-600'}`}></div>
                    </div>
                    <h2 className={`text-5xl md:text-6xl font-black mb-6 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Professional
                        <span className={`block ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            Journey
                        </span>
                    </h2>
                    <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto leading-relaxed`}>
                        Key experiences and contributions that shaped my career development
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-400 transform -translate-x-1/2 rounded-full"></div>

                    {/* Timeline Items */}
                    <div className="space-y-16 md:space-y-20">
                        {timelineEvents.map((event, index) => {
                            const Icon = event.icon;
                            const isLeft = index % 2 !== 0;
                            
                            return (
                                <div 
                                    key={index} 
                                    className={`relative flex items-center ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                                        <div className={`
                                            group relative p-8 rounded-2xl shadow-xl transition-all duration-500 border
                                            ${isDarkMode 
                                                ? 'bg-slate-800 border-slate-700 shadow-black/20' 
                                                : 'bg-white border-slate-200 shadow-black/10'
                                            }
                                            ${hoveredIndex === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
                                        `}>
                                            
                                            {/* Year Badge */}
                                            <div className={`absolute -top-4 ${isLeft ? 'left-8' : 'right-8'} z-20`}>
                                                <div className={`
                                                    px-6 py-2 rounded-full text-sm font-bold
                                                    ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-600 text-white'}
                                                    shadow-lg transform transition-transform duration-300
                                                    ${hoveredIndex === index ? 'scale-110' : ''}
                                                `}>
                                                    {event.year}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="pt-4">
                                                <h3 className={`text-2xl font-bold mb-4 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                                    {event.title}
                                                </h3>
                                                <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                    {event.description}
                                                </p>
                                                
                                                {/* Achievement Badge */}
                                                <div className={`
                                                    inline-flex items-center gap-3 px-4 py-3 rounded-xl
                                                    ${isDarkMode 
                                                        ? 'bg-slate-700 text-slate-200' 
                                                        : 'bg-slate-100 text-slate-700'
                                                    }
                                                    transition-colors duration-300
                                                `}>
                                                    <Award className="w-5 h-5" />
                                                    <span className="font-medium">{event.achievement}</span>
                                                </div>
                                            </div>

                                            {/* Decorative Elements */}
                                            <div className={`
                                                absolute inset-0 rounded-2xl opacity-10 -z-10
                                                ${isDarkMode ? 'bg-slate-600' : 'bg-slate-400'}
                                                transition-opacity duration-500
                                                ${hoveredIndex === index ? 'opacity-20' : ''}
                                            `}></div>
                                        </div>
                                    </div>

                                    {/* Central Icon */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
                                        <div className={`
                                            relative w-20 h-20 rounded-full flex items-center justify-center
                                            ${isDarkMode ? 'bg-slate-700' : 'bg-slate-600'}
                                            shadow-xl transition-all duration-500
                                            ${hoveredIndex === index ? 'scale-125 shadow-2xl' : 'hover:scale-110'}
                                        `}>
                                            <Icon className="w-10 h-10 text-white" />
                                            
                                            {/* Pulse Animation */}
                                            <div className={`
                                                absolute inset-0 rounded-full
                                                ${isDarkMode ? 'bg-slate-600' : 'bg-slate-500'} opacity-20
                                                ${hoveredIndex === index ? 'animate-ping' : ''}
                                            `}></div>
                                        </div>
                                    </div>

                                    {/* Mobile Icon */}
                                    <div className="md:hidden mb-6">
                                        <div className={`
                                            w-16 h-16 rounded-full flex items-center justify-center mx-auto
                                            ${isDarkMode ? 'bg-slate-700' : 'bg-slate-600'} shadow-lg
                                        `}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Connection Line */}
                                    <div className={`
                                        hidden md:block absolute top-1/2 w-20 h-0.5
                                        ${isDarkMode ? 'bg-slate-600' : 'bg-slate-400'} transform -translate-y-1/2
                                        ${!isLeft ? 'right-1/2 mr-10' : 'left-1/2 ml-10'}
                                    `}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-20">
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">Journey continues...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};