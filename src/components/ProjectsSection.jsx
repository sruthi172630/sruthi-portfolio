import { ExternalLink, Github, Award, Shield, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Plant Device",
      category: "AI + IoT",
      description: "An innovative IoT device that monitors plant health using AI algorithms to provide real-time insights and recommendations for optimal plant care.",
      achievements: [
        "85% accuracy in plant health prediction",
        "Patent pending technology",
        "Real-time monitoring system"
      ],
      technologies: ["Python", "IoT", "Machine Learning", "Sensors", "AI"],
      features: [
        "Real-time soil moisture monitoring",
        "AI-powered health analysis",
        "Mobile app integration",
        "Automated watering system"
      ],
      icon: <Shield className="h-6 w-6" />, 
      status: "Patented"
    },
    {
      title: "Data Dashboard",
      category: "Full-Stack Development",
      description: "A comprehensive full-stack data visualization dashboard with secure authentication and real-time analytics capabilities.",
      achievements: [
        "Secure JWT authentication",
        "Real-time data visualization",
        "Responsive design"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Chart.js", "JWT", "Bcrypt.js"],
      features: [
        "Interactive data visualizations",
        "User authentication system",
        "Real-time data updates",
        "Export functionality"
      ],
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-blue-500", 
      status: "Completed"
    }
  ];

  const handleDemoClick = (projectTitle) => {
    console.log(`Opening demo for ${projectTitle}`);
    alert(`Live demo for "${projectTitle}" not available in this example.`);
  };

  const handleGithubClick = (projectTitle) => {
    console.log(`Opening GitHub repo for ${projectTitle}`);
     alert(`GitHub repo for "${projectTitle}" not available in this example.`);
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative projects showcasing my expertise in AI, IoT, and full-stack development.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card group"> 
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-lg ${project.color ?? ''} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                    <div className={`${project.color ? project.color.replace('bg-', 'text-') : 'text-gray-500'}`}>
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Patented'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                    {project.status === 'Patented' && (
                      <Award className="h-4 w-4 text-yellow-500" />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {project.category}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="flex-1 bg-gradient-tech hover:opacity-90"
                    onClick={() => handleDemoClick(project.title)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleGithubClick(project.title)}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
