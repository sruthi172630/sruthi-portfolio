import { useState, useEffect } from 'react';
// Removed unused import: import { motion } from 'framer-motion';
import Navigation from '../components/Navigation'; // Assuming components are in src/components
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // List of section IDs to track
      const sections = [
        'home', 'about', 'education', 'experience', 'projects', 
        'skills', 'certifications', 'achievements', 'contact'
      ];
      // Adjust scroll position to account for the fixed header height
      const scrollPosition = window.scrollY + 100; // Add header height + buffer

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // Check if the current scroll position is within the section's vertical bounds
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            // Once the active section is found, we can stop checking
            break;
          }
          // Special case: if scrolled all the way to the top, ensure 'home' is active
          if (window.scrollY === 0) {
             setActiveSection('home');
          }
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Also call handler once initially in case the page loads scrolled or sections are tall
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation component receives the active section state */}
      <Navigation activeSection={activeSection} />

      <main>
        {/* Each section component will render a section element with a specific id */}
        <HeroSection /> {/* Needs id="home" */}
        <AboutSection /> {/* Needs id="about" */}
        <EducationSection /> {/* Needs id="education" */}
        <ExperienceSection /> {/* Needs id="experience" */}
        <ProjectsSection /> {/* Needs id="projects" */}
        <SkillsSection /> {/* Needs id="skills" */}
        <CertificationsSection /> {/* Needs id="certifications" */}
        <AchievementsSection /> {/* Needs id="achievements" */}
        <ContactSection /> {/* Needs id="contact" */}
      </main>

      <Footer /> {/* Assuming Footer is a component */}
    </div>
  );
};

export default Index;