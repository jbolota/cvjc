import { useState } from 'react';
import { HeaderCv } from  './components/HeaderCv';
import { KnowMoreCv  } from  './components/KnowMoreCv';
import { ExperienceCv } from  './components/ExperienceCv';
import { EducationCv } from  './components/EducationCv';
import { TechStack } from  './components/TechStack';
import { SkillsLanguageCv } from  './components/SkillsLanguageCv';
import { HeaderCvInfo, KnowMoreCvInfo, Experience, Education, ExtraInfo, TeckStack } from './types/types';

import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFillSunFill,BsMoonStarsFill } from 'react-icons/bs';
import './styles/main.scss';

function App() {

  const [theme, setTheme] = useState('light'); 
  
  const headerinfo: HeaderCvInfo = 
   {
    id: '1',
    name: 'João Francisco Carvalho',
    role: 'IT / Developer',
    email: 'jfcarvalho@remotepartner.co',
    address: 'Viseu, Portugal',
    phone: 938138297,
    datebirth: '20/12/1988',
    nationality: 'Portuguese',
    urlLinkdin: 'https://www.linkedin.com/in/joaochico/',
  }

  const knowmore: KnowMoreCvInfo = {
    id: '2',
    title: 'KNOWMORE',
    info: 'I started my computer training in 2005, through a technical-vocational course. I attended the course of Electronic Engineering and Telecommunications at the University of Aveiro between the years 2009 / 2011. Since 2015 I work remotely as a Programmer, the programming languages that accompany me until today are C ++, PHP and Javascript. The last projects I had involved I developed in ReactJS. Activities I do extra work, besides being part of a non-profit cultural association. I like modelling clay, creating my characters and painting canvases.'
  }

  const experiences: Experience[] = [
    {
      id:'exp1',
      datestart: 'September 2020',
      dateend: ' ',
      role: 'Frontend Developer',
      company: 'Remote Partner - Digital Agency',
      place: 'Remote',
      task: 'Ensure all frontend development of the agency'
    },
    {
      id:'exp2',
      datestart: 'September 2020',
      dateend: 'April 2020',
      role: 'Frontend Developer',
      company: 'Finiclasse - Concessionário automóvel',
      place: 'Viseu',
      task: 'Development of new web channel and used vehicle sales platform. Development of JSON API in order to link frontend with third party content manager'
    },
    {
      id:'exp3',
      datestart: 'February 2016',
      dateend: 'December 2019',
      role: 'Fullstack Developer',
      company: 'MNW - Digital Agency',
      place: 'Remote',
      task: 'Main project: Renovation of the entire Portuguese Swimming Federation computer system. Development of an autonomous system for updating the results of all official tests Development of official FPN app'
    },
    {
      id:'exp4',
      datestart: 'August 2018',
      dateend: 'October 2018',
      role: 'Frontend Developer',
      company: 'WayNext - Digital Agency',
      place: 'Remote',
      task: 'Development of "App RTP Arquivo" - Android and iOS'
    },
    {
      id:'exp5',
      datestart: 'April 2012',
      dateend: ' May 2014',
      role: 'Frontend Developer',
      company: 'SYnergia - Associação Juvenil',
      place: 'Braga',
      task: 'European youth volunteer coordinator. European Youth Exchange Coordinator Youth in Action Program. Development and coordination of the project "TOCA - Work of a Cultural and Associative Workshop".'
    }
  ];

  const educations: Education[] =
  [
    {
      id: 'edu1',
      datestart: '2019',
      dateend : '2022',
      course: 'Tecnologia e Design de Multimédia',
      school : 'Superior School of Technology and Management of Viseu'
    },
    {
      id: 'edu2',
      datestart: '2015',
      dateend : '2016',
      course: 'Mobile and Tablet Programming',
      school : 'RESTART | Institute of Creativity, Arts and New Technologies'
    },
    {
      id: 'edu3',
      datestart: '2009',
      dateend : '2011',
      course: 'Electronic and Telecommunications Engineering',
      school : 'Univerisidade de Aveiro'
    },
    {
      id: 'edu4',
      datestart: '2005',
      dateend : '2008',
      course: 'Computer systems management and programming technician',
      school : 'Escola Profissional de Braga'
    },
  ]

  const skills: ExtraInfo[] =[
    {
      id: 'skill1',
      info: 'Versatile'
    },
    {
      id: 'skill2',
      info: 'Vision, Energy and Resilience'
    },
    {
      id: 'skill3',
      info: 'Responsibility, Planning and Organization',
    },
    {
      id: 'skill4',
      info: 'Multitasking'
    },
    {
      id: 'skill5',
      info: 'Team spirit'
    }
  ]

  const languages: ExtraInfo[] = [
    {
      id: 'lang1',
      info: 'English  | C1'
    },
    {
      id: 'lang2',
      info: 'Spanish  | B1'
    }
  ]

  const techstack: TeckStack[] =[
    {
      id: 'tech1',
      icon: SiJavascript
    },
    {
      id: 'tech3',
      icon: SiTypescript
    },
    {
      id: 'tech2',
      icon: FaReact
    },
    {
      id: 'tech4',
      icon: DiCss3
    },
    {
      id: 'tech5',
      icon: AiFillHtml5
    }
  ]
   return (
    <div className={theme}>
      <div className='background'>
        {
          theme === 'light' ?
            <BsFillSunFill size="50" className='switch-theme' onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')} />
          :
            <BsMoonStarsFill color="white" size="50" className='switch-theme' onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')} />
        }
       
        <HeaderCv item={headerinfo} />
        <KnowMoreCv item={knowmore}/>
        <ExperienceCv items={experiences} />
        <EducationCv items = {educations}/>
        <SkillsLanguageCv skills={skills} languages={languages} /> 
        <TechStack items={techstack} />
      </div>
    </div>
   )
}

export default App;
