import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      institution: "Ramachandra College of Engineering",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      period: "2022 - 2026",
      score: "CGPA: 8.06",
      description: "Focusing on AI, machine learning, data science, and related technologies.",
      status: "Current", 
      color: "bg-blue-500" 
    },
    {
      institution: "Vidya Vikas Junior College",
      degree: "Intermediate Education",
      period: "2020 - 2022",
      score: "Score: 860",
      description: "Completed intermediate education with focus on science and mathematics.",
      status: "Completed",
      color: "bg-green-500"
    },
    {
      institution: "Vidya Vikas EM High School",
      degree: "Secondary Education",
      period: "2019 - 2020",
      score: "Score: 534",
      description: "Completed secondary education with strong foundation in core subjects.",
      status: "Completed",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey through different institutions, building a strong foundation in technology and science.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 hidden lg:block"></div>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block"></div>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="tech-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${edu.color} bg-opacity-10`}>
                            <GraduationCap className={`h-6 w-6 ${edu.color.replace('bg-', 'text-')}`} />
                          </div>
                          <div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              edu.status === 'Current'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800' 
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.institution}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-3">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-4 w-4 text-yellow-500" /> 
                        <span className="font-medium text-gray-700">{edu.score}</span>
                      </div>
                      <p className="text-gray-600">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;