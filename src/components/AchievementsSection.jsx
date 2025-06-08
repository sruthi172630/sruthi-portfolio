  import { Trophy, Medal, Star, Users, Calendar, Target } from 'lucide-react';
  import { Card, CardContent } from '@/components/ui/card';

  const AchievementsSection = () => {
    const achievements = [
      {
        title: "Shastra Challenge - Top 50",
        category: "Competition",
        description: "Secured position in top 50 participants in the prestigious Shastra Challenge, demonstrating excellence in technical problem-solving and innovation.",
        date: "2024",
        type: "Technical Competition", 
        icon: <Trophy className="h-6 w-6" />, 
        color: "bg-yellow-500", 
        rank: "Top 50" 
      },
      {
        title: "Nation Building Finalist",
        category: "National Competition",
        description: "Reached the finalist stage in the Nation Building competition, showcasing innovative solutions for societal challenges and sustainable development.",
        date: "2024",
        type: "Innovation Challenge",
        icon: <Medal className="h-6 w-6" />, 
        color: "bg-blue-500",
        rank: "Finalist"
      },
      {
        title: "3-Day Web Design Workshop",
        category: "Learning Achievement",
        description: "Successfully completed an intensive 3-day web design workshop, enhancing skills in modern web development and design principles.",
        date: "2024",
        type: "Workshop Completion",
        icon: <Star className="h-6 w-6" />, 
        color: "bg-green-500",
        rank: "Completed"
      }
    ];
    const stats = [
      {
        number: "8.06",
        label: "Current CGPA",
        description: "Academic Excellence",
        icon: <Target className="h-5 w-5" /> 
      },
      {
        number: "3+",
        label: "Competitions",
        description: "Participated & Won",
        icon: <Trophy className="h-5 w-5" /> 
      },
      {
        number: "2",
        label: "Internships",
        description: "Professional Experience",
        icon: <Users className="h-5 w-5" /> 
      },
      {
        number: "5+",
        label: "Certifications",
        description: "Professional Development",
        icon: <Medal className="h-5 w-5" /> 
      }
    ];

    return (
      <section id="achievements" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and accomplishments that showcase my dedication to excellence and continuous growth in technology and academics.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="tech-card text-center"> 
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <div className="text-blue-600">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold text-blue-600 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="tech-card group"> 
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${achievement.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                      <div className={`${achievement.color.replace('bg-', 'text-')}`}>
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        achievement.rank === 'Top 50'
                          ? 'bg-yellow-100 text-yellow-800'
                          : achievement.rank === 'Finalist'
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800' 
                      }`}>
                        {achievement.rank}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">
                      {achievement.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-3 w-3 mr-1" /> 
                      {achievement.date}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">
                      {achievement.category}
                    </span>
                    <div className="flex items-center text-gray-400">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16">
            <Card className="tech-card">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-tech rounded-full"> 
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership & Community</h3>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Beyond individual achievements, I actively contribute to the tech community through my role as a
                  Raptor Club member, organizing AI/ML hackathons and technical events. I believe in collaborative
                  learning and sharing knowledge to build a stronger technology ecosystem.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Events Organized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">Participants Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">3+</div>
                    <div className="text-sm text-gray-600">Languages Spoken</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  };

  export default AchievementsSection;