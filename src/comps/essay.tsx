import { BookOpen, Lightbulb, Target, TrendingUp, Volume2, VolumeX, Clock, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface EssayProps {
    isDarkMode: boolean;
}

export const RenderEssay = ({ isDarkMode }: EssayProps) => {
    const [isReading, setIsReading] = useState(false);
    const [currentReadingSection, setCurrentReadingSection] = useState<string | null>(null);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const [readingProgress, setReadingProgress] = useState(0);

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

    // Reading progress tracker
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            setReadingProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
            window.speechSynthesis.cancel();
            setIsReading(false);
            setCurrentReadingSection(null);
            return;
        }

        setIsReading(true);
        if (sectionId) {
            setCurrentReadingSection(sectionId);
        }

        const text = sectionId ? getEssayText(sectionId) : getEssayText();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
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

    useEffect(() => {
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'}`}>
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-slate-500 to-slate-600 transition-all duration-300"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            <div className="py-20 px-4">
                <div className="max-w-11/12 mx-auto">
                    {/* Header Section */}
                    <div className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/80 border-slate-200'} backdrop-blur-sm border rounded-3xl p-8 md:p-12 mb-12 `}>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                        <User className={`w-8 h-8 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} />
                                    </div>
                                    <div>
                                        <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                            Reflective Leadership Essay
                                        </h1>
                                        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-2`}>
                                            By Niyotugendana Chancelline
                                        </p>
                                    </div>
                                </div>
                                
                                <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed max-w-2xl`}>
                                    A comprehensive reflection on my leadership journey, personal growth, and future aspirations in creating sustainable positive change.
                                </p>
                                
                                <div className="flex items-center gap-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <Clock className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                                        <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                            8 min read
                                        </span>
                                    </div>
                                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                    <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                        Leadership Development
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <button
                                    onClick={() => toggleReadAloud()}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isReading && !currentReadingSection
                                            ? 'bg-slate-600 text-white'
                                            : isDarkMode
                                                ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-600 hover:text-white'
                                    } shadow-xl`}
                                >
                                    {isReading && !currentReadingSection ? (
                                        <VolumeX className="w-5 h-5" />
                                    ) : (
                                        <Volume2 className="w-5 h-5" />
                                    )}
                                    <span className="font-semibold">
                                        {isReading && !currentReadingSection ? 'Stop Reading' : 'Read Essay'}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Essay Content */}
                    <article className={`${isDarkMode ? 'bg-slate-800/30 border-slate-700' : 'bg-white/70 border-slate-200'} backdrop-blur-sm border rounded-3xl p-8 md:p-12 `}>
                        {/* Quote Introduction */}
                        <div
                            ref={introRef}
                            data-section="intro"
                            className={`mb-16 text-center transition-all duration-700 ease-out ${visibleSections.has('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className={`inline-flex items-center justify-center w-20 h-20 ${isDarkMode ? 'bg-gradient-to-br from-slate-700 to-slate-600' : 'bg-gradient-to-br from-slate-200 to-slate-300'} rounded-3xl mb-8`}>
                                <BookOpen className={`w-9 h-9 ${isDarkMode ? 'text-white' : 'text-slate-700'}`} />
                            </div>
                            <blockquote className={`text-2xl italic font-medium max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                "Leadership is not about being in charge. It is about taking care of those in your charge."
                            </blockquote>
                            <cite className={`block mt-4 text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                — Simon Sinek
                            </cite>
                        </div>

                        {/* Learning Experiences Section */}
                        <section
                            ref={learningRef}
                            data-section="learning"
                            className={`mb-16 transition-all duration-700 ease-out ${visibleSections.has('learning') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                                <div className="flex items-center gap-4 mb-4 md:mb-0">
                                    <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                        <Lightbulb className={`w-8 h-8 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                                    </div>
                                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Learning Experiences That Transformed Me
                                    </h2>
                                </div>
                                <button
                                    onClick={() => toggleReadAloud('learning')}
                                    className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'} transition-all duration-300 transform hover:scale-110`}
                                    aria-label={isReading && currentReadingSection === 'learning' ? 'Stop reading section' : 'Read this section aloud'}
                                >
                                    {isReading && currentReadingSection === 'learning' ? (
                                        <VolumeX className="w-6 h-6" />
                                    ) : (
                                        <Volume2 className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                            
                            <div className="space-y-6">
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        My journey began with a profound realization during my first community project in 2019. I discovered that traditional top-down approaches to leadership often fail to create sustainable change. This experience taught me the power of collaborative leadership and the importance of <strong>listening before leading</strong>.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        The failure of my initial project became a <strong>catalyst for growth</strong>, forcing me to reevaluate my assumptions about leadership and embrace a more inclusive approach. Another transformative moment came when I had to navigate a crisis that threatened to shut down our social enterprise.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        This experience taught me <strong>resilience, adaptability</strong>, and the crucial skill of turning challenges into opportunities. It was during this period that I learned to lead with vulnerability, admitting when I didn't have all the answers and leveraging the collective wisdom of my team.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Leadership Theories Section */}
                        <section
                            ref={theoriesRef}
                            data-section="theories"
                            className={`mb-16 transition-all duration-700 ease-out ${visibleSections.has('theories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                                <div className="flex items-center gap-4 mb-4 md:mb-0">
                                    <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                        <BookOpen className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    </div>
                                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Applications of Leadership Theories
                                    </h2>
                                </div>
                                <button
                                    onClick={() => toggleReadAloud('theories')}
                                    className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'} transition-all duration-300 transform hover:scale-110`}
                                >
                                    {isReading && currentReadingSection === 'theories' ? (
                                        <VolumeX className="w-6 h-6" />
                                    ) : (
                                        <Volume2 className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <h3 className={`font-bold text-xl mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} flex items-center gap-2`}>
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        Servant Leadership
                                    </h3>
                                    <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        Servant leadership principles have been particularly influential, shaping my belief that leaders exist to serve their teams and communities. This philosophy has guided my approach to mentoring young entrepreneurs and building inclusive organizational cultures.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <h3 className={`font-bold text-xl mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} flex items-center gap-2`}>
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        Transformational Leadership
                                    </h3>
                                    <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        I have drawn heavily from transformational leadership theory, focusing on inspiring others to exceed their self-interests for the greater good. This approach has been essential in building coalitions and partnerships.
                                    </p>
                                </div>
                            </div>
                            
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                <h3 className={`font-bold text-xl mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} flex items-center gap-2`}>
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    Situational Leadership
                                </h3>
                                <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
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
                                <div className="flex items-center gap-4 mb-4 md:mb-0">
                                    <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                        <TrendingUp className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                                    </div>
                                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Skills, Knowledge, and Mindset Transformation
                                    </h2>
                                </div>
                                <button
                                    onClick={() => toggleReadAloud('skills')}
                                    className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'} transition-all duration-300 transform hover:scale-110`}
                                >
                                    {isReading && currentReadingSection === 'skills' ? (
                                        <VolumeX className="w-6 h-6" />
                                    ) : (
                                        <Volume2 className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <h3 className={`font-bold text-xl mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Technical to Holistic</h3>
                                    <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        My leadership capabilities have evolved from technical expertise to a holistic understanding encompassing emotional intelligence, systems thinking, and cultural competency.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <h3 className={`font-bold text-xl mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Communication Mastery</h3>
                                    <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        My communication skills have been refined through countless presentations, negotiations, and difficult conversations that required empathy and clarity.
                                    </p>
                                </div>
                            </div>
                            
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                <h3 className={`font-bold text-xl mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Growth Mindset</h3>
                                <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                    My mindset has shifted from viewing leadership as a position of authority to understanding it as a practice of service and continuous learning. I've learned to embrace uncertainty, welcome feedback, and view failures as learning opportunities.
                                </p>
                            </div>
                        </section>

                        {/* Mission and Future Plans Section */}
                        <section
                            ref={missionRef}
                            data-section="mission"
                            className={`mb-16 transition-all duration-700 ease-out ${visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                                <div className="flex items-center gap-4 mb-4 md:mb-0">
                                    <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                        <Target className={`w-8 h-8 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
                                    </div>
                                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Mission Journey and Post-Graduation Plans
                                    </h2>
                                </div>
                                <button
                                    onClick={() => toggleReadAloud('mission')}
                                    className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'} transition-all duration-300 transform hover:scale-110`}
                                >
                                    {isReading && currentReadingSection === 'mission' ? (
                                        <VolumeX className="w-6 h-6" />
                                    ) : (
                                        <Volume2 className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                            
                            <div className="space-y-6">
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        My mission has always been to create <strong>sustainable positive change</strong> through innovative leadership and strategic partnerships. This mission has been the north star guiding all my professional and personal decisions.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        Looking ahead, I plan to expand this mission by establishing a <strong>leadership development institute</strong> focused on emerging market entrepreneurs and social innovators, leveraging the knowledge and network gained through my studies.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        Post-graduation, I intend to scale our impact across multiple regions, creating a sustainable ecosystem that supports the next generation of leaders while addressing pressing social and economic challenges. This journey has taught me that <strong>true leadership</strong> is not about reaching a destination, but about continuously growing and empowering others to reach their full potential.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion Quote */}
                        <div
                            ref={conclusionRef}
                            data-section="conclusion"
                            className={`mt-16 pt-12 text-center border-t ${isDarkMode ? 'border-slate-600' : 'border-slate-300'} transition-all duration-700 ease-out ${visibleSections.has('conclusion') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-slate-700 to-slate-600' : 'bg-gradient-to-br from-slate-200 to-slate-300'} rounded-2xl mb-6`}>
                                <Target className={`w-7 h-7 ${isDarkMode ? 'text-white' : 'text-slate-700'}`} />
                            </div>
                            <blockquote className={`text-2xl italic font-medium max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-4`}>
                                "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things."
                            </blockquote>
                            <cite className={`block text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                — Ronald Reagan
                            </cite>
                            
                            {/* Author signature */}
                            <div className="mt-12 pt-8 border-t border-slate-300 dark:border-slate-600">
                                <div className={`inline-flex items-center gap-4 px-6 py-3 rounded-2xl ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-100/70'} backdrop-blur-sm`}>
                                    <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} flex items-center justify-center`}>
                                        <User className={`w-6 h-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`} />
                                    </div>
                                    <div className="text-left">
                                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                            Niyotugendana Chancelline
                                        </p>
                                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                            Leadership Development Student
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};