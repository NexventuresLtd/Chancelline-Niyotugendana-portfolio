import { BookOpen, Lightbulb, Target, TrendingUp, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface EssayProps {
    isDarkMode: boolean;
}

export const RenderEssay = ({ isDarkMode }: EssayProps) => {
    const [isReading, setIsReading] = useState(false);
    const [currentReadingSection, setCurrentReadingSection] = useState<string | null>(null);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Create refs using useRef directly
    const introRef = useRef<HTMLDivElement>(null);
    const learningRef = useRef<HTMLDivElement>(null);
    const theoriesRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const conclusionRef = useRef<HTMLDivElement>(null);

    const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('data-section') || '';
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(prev).add(id));
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all section elements
        const refs = [introRef, learningRef, theoriesRef, skillsRef, missionRef, conclusionRef];
        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    // Get all essay text for reading
    const getEssayText = (sectionId?: string) => {
        const essaySections = {
            introduction: "Reflective Leadership Essay. A comprehensive reflection on my leadership journey, growth, and future aspirations.",
            learning: "Learning Experiences That Transformed Me. My journey began with a profound realization during my first community project in 2019. I discovered that traditional top-down approaches to leadership often fail to create sustainable change. This experience taught me the power of collaborative leadership and the importance of listening before leading. The failure of my initial project became a catalyst for growth, forcing me to reevaluate my assumptions about leadership and embrace a more inclusive approach. Another transformative moment came when I had to navigate a crisis that threatened to shut down our social enterprise. This experience taught me resilience, adaptability, and the crucial skill of turning challenges into opportunities. It was during this period that I learned to lead with vulnerability, admitting when I didn't have all the answers and leveraging the collective wisdom of my team.",
            theories: "Applications of Leadership Theories. Throughout my leadership journey, I have consciously applied various leadership theories to guide my practice. Servant leadership principles have been particularly influential, shaping my belief that leaders exist to serve their teams and communities rather than the other way around. This philosophy has guided my approach to mentoring young entrepreneurs and building inclusive organizational cultures. I have also drawn heavily from transformational leadership theory, focusing on inspiring and motivating others to exceed their own self-interests for the greater good. This approach has been essential in building coalitions and partnerships that have amplified our collective impact. Additionally, situational leadership principles have helped me adapt my leadership style to different contexts and team members' needs.",
            skills: "Skills, Knowledge, and Mindset Transformation. My leadership capabilities have evolved significantly over the past five years. Initially focused on technical skills and domain expertise, I have developed a more holistic understanding of leadership that encompasses emotional intelligence, systems thinking, and cultural competency. My communication skills have been refined through countless presentations, negotiations, and difficult conversations that required empathy and clarity. Perhaps most importantly, my mindset has shifted from viewing leadership as a position of authority to understanding it as a practice of service and continuous learning. I have learned to embrace uncertainty, welcome feedback, and view failures as learning opportunities rather than setbacks. This growth mindset has enabled me to take on increasingly complex challenges and support others in their own development journeys.",
            mission: "Mission Journey and Post-Graduation Plans. My mission has always been to create sustainable positive change through innovative leadership and strategic partnerships. This mission has been the north star guiding all my professional and personal decisions. Looking ahead, I plan to expand this mission by establishing a leadership development institute focused on emerging market entrepreneurs and social innovators. Post-graduation, I intend to leverage the knowledge and network gained through my studies to scale our impact across multiple regions. My goal is to create a sustainable ecosystem that supports the next generation of leaders while continuing to address pressing social and economic challenges. This journey has taught me that true leadership is not about reaching a destination, but about continuously growing and empowering others to reach their full potential."
        };

        if (sectionId) {
            return essaySections[sectionId as keyof typeof essaySections];
        }

        return Object.values(essaySections).join(" ");
    };

    // Start or stop text-to-speech
    const toggleReadAloud = (sectionId?: string) => {
        if (isReading) {
            // Stop reading
            window.speechSynthesis.cancel();
            setIsReading(false);
            setCurrentReadingSection(null);
            return;
        }

        // Start reading
        setIsReading(true);
        if (sectionId) {
            setCurrentReadingSection(sectionId);
        }

        const text = sectionId ? getEssayText(sectionId) : getEssayText();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9; // Slightly slower for better comprehension
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = () => {
            setIsReading(false);
            setCurrentReadingSection(null);
        };

        utterance.onerror = () => {
            setIsReading(false);
            setCurrentReadingSection(null);
        };

        speechSynthesisRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    // Clean up on component unmount
    useEffect(() => {
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return (
        <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-slate-50 to-gray-100'}`}>
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
                    <div className="text-center sm:text-left">
                        <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-all duration-700 ease-out`}>
                            Reflective Leadership Essay
                        </h2>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-700 ease-out`}>
                            A comprehensive reflection on my leadership journey, growth, and future aspirations.
                        </p>
                    </div>
                    <button
                        onClick={() => toggleReadAloud()}
                        className={`mt-6 sm:mt-0 flex items-center px-5 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${isReading && !currentReadingSection
                            ? 'bg-slate-600 text-white shadow-lg'
                            : isDarkMode
                                ? 'bg-gray-800 text-slate-400 hover:bg-slate-600 hover:text-white shadow-md'
                                : 'bg-white text-slate-600 hover:bg-slate-600 hover:text-white shadow-md'
                            }`}
                    >
                        {isReading && !currentReadingSection ? (
                            <VolumeX className="w-5 h-5 mr-2" />
                        ) : (
                            <Volume2 className="w-5 h-5 mr-2" />
                        )}
                        {isReading && !currentReadingSection ? 'Stop Reading' : 'Read Aloud'}
                    </button>
                </div>

                <div className={`rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-white'} p-8 md:p-12 transition-all duration-500`}>
                    <article className="max-w-none">
                        {/* Introduction */}
                        <div
                            ref={introRef}
                            data-section="intro"
                            className={`mb-16 text-center transition-all duration-700 ease-out ${visibleSections.has('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className={`inline-flex items-center justify-center w-20 h-20 ${isDarkMode ? 'bg-gradient-to-br from-slate-700 to-slate-600' : 'bg-gradient-to-br from-slate-200 to-slate-100'} rounded-2xl mb-6 transition-all duration-500`}>
                                <BookOpen className={`w-9 h-9 ${isDarkMode ? 'text-white' : 'text-slate-600'} transition-colors duration-500`} />
                            </div>
                            <p className={`text-xl italic max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-500`}>
                                "Leadership is not about being in charge. It is about taking care of those in your charge." - Simon Sinek
                            </p>
                        </div>

                        {/* Learning Experiences Section */}
                        <section
                            ref={learningRef}
                            data-section="learning"
                            className={`mb-16 transition-all duration-700 ease-out ${visibleSections.has('learning') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                                <h3 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-0 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} flex items-center transition-colors duration-500`}>
                                    <div className={`p-2 mr-4 rounded-xl ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100'} transition-colors duration-500`}>
                                        <Lightbulb className="w-7 h-7" />
                                    </div>
                                    Learning Experiences That Transformed Me
                                </h3>
                                <button
                                    onClick={() => toggleReadAloud('learning')}
                                    className={`p-3 rounded-xl ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} transition-all duration-300 transform hover:scale-110`}
                                    aria-label={isReading && currentReadingSection === 'learning' ? 'Stop reading section' : 'Read this section aloud'}
                                >
                                    {isReading && currentReadingSection === 'learning' ? (
                                        <VolumeX className="w-5 h-5" />
                                    ) : (
                                        <Volume2 className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <div className="space-y-6">
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                        My journey began with a profound realization during my first community project in 2019. I discovered that traditional top-down approaches to leadership often fail to create sustainable change. This experience taught me the power of collaborative leadership and the importance of listening before leading.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                        The failure of my initial project became a catalyst for growth, forcing me to reevaluate my assumptions about leadership and embrace a more inclusive approach. Another transformative moment came when I had to navigate a crisis that threatened to shut down our social enterprise.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                        This experience taught me resilience, adaptability, and the crucial skill of turning challenges into opportunities. It was during this period that I learned to lead with vulnerability, admitting when I didn't have all the answers and leveraging the collective wisdom of my team.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Applications of Leadership Theories Section */}
                        <section
                            ref={theoriesRef}
                            data-section="theories"
                            className={`mb-16 transition-all duration-700 ease-out ${visibleSections.has('theories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                                <h3 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-0 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} flex items-center transition-colors duration-500`}>
                                    <div className={`p-2 mr-4 rounded-xl ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100'} transition-colors duration-500`}>
                                        <BookOpen className="w-7 h-7" />
                                    </div>
                                    Applications of Leadership Theories
                                </h3>
                                <button
                                    onClick={() => toggleReadAloud('theories')}
                                    className={`p-3 rounded-xl ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} transition-all duration-300 transform hover:scale-110`}
                                    aria-label={isReading && currentReadingSection === 'theories' ? 'Stop reading section' : 'Read this section aloud'}
                                >
                                    {isReading && currentReadingSection === 'theories' ? (
                                        <VolumeX className="w-5 h-5" />
                                    ) : (
                                        <Volume2 className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                    <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-500`}>Servant Leadership</h4>
                                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                        Servant leadership principles have been particularly influential, shaping my belief that leaders exist to serve their teams and communities rather than the other way around. This philosophy has guided my approach to mentoring young entrepreneurs and building inclusive organizational cultures.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                    <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-500`}>Transformational Leadership</h4>
                                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                        I have drawn heavily from transformational leadership theory, focusing on inspiring and motivating others to exceed their own self-interests for the greater good. This approach has been essential in building coalitions and partnerships that have amplified our collective impact.
                                    </p>
                                </div>
                            </div>
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-500`}>Situational Leadership</h4>
                                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                    Situational leadership principles have helped me adapt my leadership style to different contexts and team members' needs, ensuring that my approach is always tailored to the specific challenges and opportunities at hand.
                                </p>
                            </div>
                        </section>

                        {/* Skills and Mindset Section */}
                        <section
                            ref={skillsRef}
                            data-section="skills"
                            className={`mb-16 transition-all duration-700 ease-out ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                                <h3 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-0 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} flex items-center transition-colors duration-500`}>
                                    <div className={`p-2 mr-4 rounded-xl ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100'} transition-colors duration-500`}>
                                        <TrendingUp className="w-7 h-7" />
                                    </div>
                                    Skills, Knowledge, and Mindset Transformation
                                </h3>
                                <button
                                    onClick={() => toggleReadAloud('skills')}
                                    className={`p-3 rounded-xl ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} transition-all duration-300 transform hover:scale-110`}
                                    // aria-label={isReading && currentReadingSection === 'skills' : 'Read this section aloud'}
                                >
                                {isReading && currentReadingSection === 'skills' ? (
                                    <VolumeX className="w-5 h-5" />
                                ) : (
                                    <Volume2 className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-500`}>Technical to Holistic</h4>
                                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                    My leadership capabilities have evolved from technical expertise to a holistic understanding encompassing emotional intelligence, systems thinking, and cultural competency.
                                </p>
                            </div>
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-500`}>Communication Mastery</h4>
                                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                    My communication skills have been refined through countless presentations, negotiations, and difficult conversations that required empathy and clarity.
                                </p>
                            </div>
                        </div>
                        <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                            <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-500`}>Growth Mindset</h4>
                            <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                My mindset has shifted from viewing leadership as a position of authority to understanding it as a practice of service and continuous learning. I've learned to embrace uncertainty, welcome feedback, and view failures as learning opportunities.
                            </p>
                        </div>
                    </section>

                    {/* Mission and Future Section */}
                    <section
                        ref={missionRef}
                        data-section="mission"
                        className={`transition-all duration-700 ease-out ${visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                            <h3 className={`text-2xl md:text-3xl font-semibold mb-4 md:mb-0 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} flex items-center transition-colors duration-500`}>
                                <div className={`p-2 mr-4 rounded-xl ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-100'} transition-colors duration-500`}>
                                    <Target className="w-7 h-7" />
                                </div>
                                Mission Journey and Post-Graduation Plans
                            </h3>
                            <button
                                onClick={() => toggleReadAloud('mission')}
                                className={`p-3 rounded-xl ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} transition-all duration-300 transform hover:scale-110`}
                                aria-label={isReading && currentReadingSection === 'mission' ? 'Stop reading section' : 'Read this section aloud'}
                            >
                                {isReading && currentReadingSection === 'mission' ? (
                                    <VolumeX className="w-5 h-5" />
                                ) : (
                                    <Volume2 className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                        <div className="space-y-6">
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                    My mission has always been to create sustainable positive change through innovative leadership and strategic partnerships. This mission has been the north star guiding all my professional and personal decisions.
                                </p>
                            </div>
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                    Looking ahead, I plan to expand this mission by establishing a leadership development institute focused on emerging market entrepreneurs and social innovators.
                                </p>
                            </div>
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-750 to-gray-700' : 'bg-gradient-to-br from-slate-50 to-gray-50'} transition-all duration-500 hover:shadow-lg`}>
                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                                    Post-graduation, I intend to leverage the knowledge and network gained through my studies to scale our impact across multiple regions. My goal is to create a sustainable ecosystem that supports the next generation of leaders while continuing to address pressing social and economic challenges. This journey has taught me that true leadership is not about reaching a destination, but about continuously growing and empowering others to reach their full potential.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <div
                        ref={conclusionRef}
                        data-section="conclusion"
                        className={`mt-16 pt-12 text-center transition-all duration-700 ease-out ${visibleSections.has('conclusion') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <p className={`text-xl italic max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-500`}>
                            "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things." - Ronald Reagan
                        </p>
                    </div>
                </article>
            </div>
        </div>
        </div >
    );
};