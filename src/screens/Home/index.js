import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import SectionHero from '../../components/SectionHero';
import SectionAbout from '../../components/SectionAbout';
import SectionExperience from '../../components/SectionExperience';
import SectionSkills from '../../components/SectionSkills';
import SectionProjects from '../../components/SectionProjects';
import SectionContact from '../../components/SectionContact';

const HomeScreen = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      <SectionHero />
      <SectionAbout />
      <SectionExperience />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
    </Layout>
  );
};

export default HomeScreen;
