import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Data Analytics Certification",
      provider: "SimpliLearn",
      description: "Comprehensive course covering data analysis techniques, statistical methods, and data visualization tools.",
      skills: ["Data Analysis", "Statistics", "Data Visualization", "Excel", "Python"],
      date: "2024", 
      color: "bg-blue-500", 
      icon: "📊" 
    },
    {
      title: "Google Cloud & Analytics",
      provider: "Google Cloud",
      description: "Professional certification in cloud computing services and analytics solutions on Google Cloud Platform.",
      skills: ["Google Cloud Platform", "Cloud Analytics", "BigQuery", "Data Warehousing"],
      date: "2024",
      color: "bg-green-500",
      icon: "☁️"
    },
    {
      title: "Data Visualization Insights",
      provider: "Tata",
      description: "Advanced certification focusing on data visualization best practices and creating meaningful insights from data.",
      skills: ["Data Visualization", "Business Intelligence", "Dashboard Design", "Storytelling with Data"],
      date: "2024",
      color: "bg-purple-500",
      icon: "📈"
    }
  ];
  const handleViewCertification = (title) => {
    console.log(`Viewing certification: ${title}`);
    alert(`Viewing certificate for "${title}" is not implemented in this example.`);
  };

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in data science, cloud computing, and analytics.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="tech-card group"> 
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${cert.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" /> 
                    {cert.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-4 w-4 text-yellow-500" /> 
                  <span className="font-semibold text-blue-600">{cert.provider}</span>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {cert.description}
                </p>
                {cert.skills && cert.skills.length > 0 && ( 
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
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
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-300"
                  onClick={() => handleViewCertification(cert.title)}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Card className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-4xl mx-auto tech-card"> {/* Uses tech-card for hover effect */}
            <CardContent className="p-0"> 
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Development</h3>
              <p className="text-gray-600 leading-relaxed">
                These certifications represent my commitment to continuous learning and professional development
                in the rapidly evolving fields of data science, cloud computing, and analytics. Each certification
                has equipped me with practical skills and industry-recognized expertise that I apply to real-world projects.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500"> {/* Added flex-wrap */}
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span>Industry Recognized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span>Recently Acquired</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-green-500" />
                  <span>Verifiable</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;