import { GraduationCap, Code, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />, 
      title: "AI Enthusiast",
      description: "Passionate about artificial intelligence and machine learning technologies"
    },
    {
      icon: <Code className="h-8 w-8 text-purple-600" />, 
      title: "Full-Stack Developer",
      description: "Experienced in both frontend and backend development"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-green-600" />, 
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving skills"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Global Perspective",
      description: "Multilingual with Telugu, Hindi, and English proficiency"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated B.Tech student with a passion for AI and Data Science,
            currently pursuing my degree from 2022-2026.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none"> 
              <p className="text-gray-700 leading-relaxed">
                I'm Yuva Sai Sruthi Kucharlapati, a passionate B.Tech student specializing in
                Artificial Intelligence and Data Science at Ramachandra College of Engineering.
                My journey into technology began with a curiosity about how machines can learn
                and make intelligent decisions.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Throughout my academic journey, I've maintained a strong CGPA of 8.06 while
                actively participating in internships and projects that have enhanced my
                practical skills in AI, machine learning, and full-stack development.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My interests extend beyond academics to exploring cutting-edge AI technologies,
                reading tech blogs, and participating in hackathons. I believe in continuous
                learning and applying theoretical knowledge to solve real-world problems.
              </p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Languages I Speak</h3>
              <div className="flex flex-wrap gap-3">
                {['Telugu', 'Hindi', 'English'].map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="tech-card"> 
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;