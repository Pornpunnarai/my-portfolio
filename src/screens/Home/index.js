import React from 'react';
import Layout from '../../components/Layout';
import SectionHero from '../../components/SectionHero';
import SectionAbout from '../../components/SectionAbout';
import SectionExperience from '../../components/SectionExperience';
import SectionSkills from '../../components/SectionSkills';
import SectionProjects from '../../components/SectionProjects';
import SectionContact from '../../components/SectionContact';

const HomeScreen = () => (
  <Layout>
    <SectionHero />
    <SectionAbout />
    <SectionExperience />
    <SectionSkills />
    <SectionProjects />
    <SectionContact />
  </Layout>
);

export default HomeScreen;
