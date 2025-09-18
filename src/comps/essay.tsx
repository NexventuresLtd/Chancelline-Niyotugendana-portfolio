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
            introduction: "My Learning Journey: A Reflection. My learning journey has been a meaningful process of growth, where I acquired knowledge, developed essential skills, and transformed my mindset. This journey gave me opportunities to put theory into practice, especially through leadership, and helped me connect my personal mission with my academic and professional aspirations. Reflecting on it allows me to see how I have grown clearly, the key experiences that shaped me, and how these lessons will guide my future.",
            learning: "Transformation of Skills, Knowledge, and Mindsets. One of the most important transformations I experienced was in the development of my skills, knowledge, and mindset. I strengthened practical skills such as problem-solving, communication, teamwork, and presentation. These were not only academic gains but also life skills that helped me collaborate effectively and present ideas with confidence. My knowledge also expanded, especially in leadership theories, systems thinking, and social innovation. These areas gave me a new way to analyze complex challenges and see connections between issues, stakeholders, and long-term solutions. The greatest shift, however, was in my mindset. I moved from focusing only on immediate tasks to adopting resilience, adaptability, and openness to different perspectives. This mindset shift gave me the confidence to face challenges as opportunities for learning rather than obstacles.",
            theories: "Specific Learning Experiences and Leadership Theory Application. Along the way, certain learning experiences stood out as truly transformational. Group projects, for instance, were moments where I practiced inclusivity and collaboration. I applied servant leadership by listening to peers, encouraging quieter members, and making sure everyone's input was valued. This not only strengthened our teamwork but also improved the quality of our outcomes. At other times, when plans changed suddenly, I leaned on adaptive leadership. Instead of resisting or feeling frustrated, I guided my team to reframe the situation, find new strategies, and move forward with confidence. These experiences taught me that leadership is not about control but about empowering others, creating space for contributions, and guiding people through uncertainty. Another highlight was working on mission-related artefacts such as the Impact Gaps Canvas. This project required me to deeply analyze the systemic issues affecting abandoned children in rural Rwanda, map out the stakeholders, and propose meaningful solutions. It was a turning point for me because it connected theory to practice and helped me see how academic learning could directly support my mission. Through this experience, I applied systems thinking and transformational leadership by not only identifying problems but also envisioning long-term change and inspiring others to see what is possible.",
            skills: "Connection to Mission Journey, Career Aspirations, and Future Plans. These experiences connect directly to my mission journey and career aspirations. After graduation, I plan to expand my NGO, Chance for All, to break the cycle of child abandonment in rural communities. The insights, skills, and mindset I gained during my learning journey will help me design sustainable interventions and scale our impact. My career goal is to create systemic change through education, healthcare, and mentorship for vulnerable children. The leadership theories I practiced will shape my leadership style grounded in empathy, adaptability, and vision, so that I can inspire others and lead effectively in dynamic environments.",
            mission: "Conclusion. In conclusion, my learning journey has been transformative in every sense. It has strengthened my skills, broadened my knowledge, and reshaped my mindset. It also allowed me to apply leadership theories in real-life contexts, preparing me to be a reflective and adaptable leader. Most importantly, it clarified my purpose and reinforced my mission, giving me the confidence to move forward with impact. I am committed to carrying these lessons into my career, leading with empathy and vision, and continuing to create change in the communities I serve."
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
                                            My Learning Journey: A Reflection
                                        </h1>
                                        <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-2`}>
                                            By Niyotugendana Chancelline
                                        </p>
                                    </div>
                                </div>
                                
                                <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed max-w-2xl`}>
                                    A reflective essay on my transformative learning journey, leadership development, and mission to create sustainable change.
                                </p>
                                
                                <div className="flex items-center gap-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <Clock className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                                        <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                            6 min read
                                        </span>
                                    </div>
                                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                    <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                        Personal Growth & Leadership
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
                                "Leadership and learning are indispensable to each other."
                            </blockquote>
                            <cite className={`block mt-4 text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                — John F. Kennedy
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
                                        Transformation of Skills, Knowledge, and Mindsets
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
                                        One of the most important transformations I experienced was in the development of my skills, knowledge, and mindset. I strengthened practical skills such as <strong>problem-solving, communication, teamwork, and presentation</strong>. These were not only academic gains but also life skills that helped me collaborate effectively and present ideas with confidence.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        My knowledge also expanded, especially in <strong>leadership theories, systems thinking, and social innovation</strong>. These areas gave me a new way to analyze complex challenges and see connections between issues, stakeholders, and long-term solutions.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        The greatest shift, however, was in my mindset. I moved from focusing only on immediate tasks to adopting <strong>resilience, adaptability, and openness to different perspectives</strong>. This mindset shift gave me the confidence to face challenges as opportunities for learning rather than obstacles.
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
                                        Learning Experiences and Leadership Theory Application
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
                            
                            <div className="space-y-6 mb-8">
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        Along the way, certain learning experiences stood out as truly transformational. Group projects, for instance, were moments where I practiced inclusivity and collaboration. I applied <strong>servant leadership</strong> by listening to peers, encouraging quieter members, and making sure everyone's input was valued. This not only strengthened our teamwork but also improved the quality of our outcomes.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        At other times, when plans changed suddenly, I leaned on <strong>adaptive leadership</strong>. Instead of resisting or feeling frustrated, I guided my team to reframe the situation, find new strategies, and move forward with confidence. These experiences taught me that leadership is not about control but about empowering others, creating space for contributions, and guiding people through uncertainty.
                                    </p>
                                </div>
                            </div>
                            
                            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                <h3 className={`font-bold text-xl mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} flex items-center gap-2`}>
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    Impact Gaps Canvas Project
                                </h3>
                                <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                    Another highlight was working on mission-related artefacts such as the Impact Gaps Canvas. This project required me to deeply analyze the systemic issues affecting abandoned children in rural Rwanda, map out the stakeholders, and propose meaningful solutions. It was a turning point for me because it connected theory to practice and helped me see how academic learning could directly support my mission. Through this experience, I applied systems thinking and transformational leadership by not only identifying problems but also envisioning long-term change and inspiring others to see what is possible.
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
                                        Connection to Mission Journey and Future Plans
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
                            
                            <div className="space-y-6">
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        These experiences connect directly to my mission journey and career aspirations. After graduation, I plan to expand my NGO, <strong>Chance for All</strong>, to break the cycle of child abandonment in rural communities. The insights, skills, and mindset I gained during my learning journey will help me design sustainable interventions and scale our impact.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        My career goal is to create <strong>systemic change</strong> through education, healthcare, and mentorship for vulnerable children. The leadership theories I practiced will shape my leadership style grounded in empathy, adaptability, and vision, so that I can inspire others and lead effectively in dynamic environments.
                                    </p>
                                </div>
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
                                        Conclusion
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
                                        In conclusion, my learning journey has been <strong>transformative in every sense</strong>. It has strengthened my skills, broadened my knowledge, and reshaped my mindset. It also allowed me to apply leadership theories in real-life contexts, preparing me to be a reflective and adaptable leader.
                                    </p>
                                </div>
                                <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-slate-700/40 border-slate-600' : 'bg-slate-50/70 border-slate-200'} border backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                        Most importantly, it clarified my purpose and reinforced my mission, giving me the confidence to move forward with impact. I am committed to carrying these lessons into my career, <strong>leading with empathy and vision</strong>, and continuing to create change in the communities I serve.
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
                                "Education is the most powerful weapon which you can use to change the world."
                            </blockquote>
                            <cite className={`block text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                — Nelson Mandela
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
                                            Founder, Chance for All
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