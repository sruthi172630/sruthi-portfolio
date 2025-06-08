import { Briefcase, Calendar, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "YHills",
      position: "AI Intern",
      period: "June 2024 - July 2024",
      type: "Internship",
      achievements: ["Improved model accuracy by 20%"],
      description: "Worked on AI model optimization and machine learning algorithms to enhance performance and accuracy.",
      skills: ["Machine Learning", "Python", "Data Analysis"],
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-blue-500" 
    },
    {
      company: "Blackbuck Engineers",
      position: "GenAI Intern",
      period: "June 2024 - July 2024",
      type: "Internship",
      achievements: ["Increased engagement by 30%"],
      description: "Developed generative AI solutions to improve user engagement and create innovative applications.",
      skills: ["Generative AI", "Deep Learning", "Python"],
      icon: <TrendingUp className="h-6 w-6" />, 
      color: "bg-green-500" 
    },
    {
      company: "Raptor Club",
      position: "Club Member", 
      period: "March 2025 - Present",
      type: "Leadership", 
      achievements: ["Organized AI/ML hackathons"],
      description: "Active member organizing and participating in AI and machine learning hackathons and technical events.",
      skills: ["Event Management", "AI/ML", "Leadership"],
      icon: <Users className="h-6 w-6" />, 
      color: "bg-purple-500" 
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey through internships and leadership roles in AI and technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="tech-card group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${exp.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                    <div className={`${exp.color.replace('bg-', 'text-')}`}>
                      {exp.icon}
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    exp.type === 'Internship'
                      ? 'bg-blue-100 text-blue-800' 
                      : exp.type === 'Leadership'
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-gray-100 text-gray-800' 
                  }`}>
                    {exp.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {exp.position}
                </h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-3">
                  {exp.company}
                </h4>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" /> 
                  {exp.period}
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>
                {exp.achievements && exp.achievements.length > 0 && ( 
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-green-600 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-2" /> 
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.skills && exp.skills.length > 0 && ( 
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Skills Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;