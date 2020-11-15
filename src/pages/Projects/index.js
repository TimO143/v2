import React from 'react';
import './Projects.scss';
import ProjectItem from "../../components/ProjectItem"

function Projects() {
  return (
    <section id='projects' className='project-section'>
    <div className="project-container">
    <div className='title'>
        <p>Projects</p>  
    </div>
    <div className='divider'></div>  
    <div className="projects-grid">
            <ProjectItem
            title='Pygame minigames'
            demo='https://www.youtube.com/watch?v=3o6C6I0TRFw&feature=youtu.be'
            github='https://github.com/TimO143/Project-2-Pygame'
            info='Een school project waar het de bedoeling was om een 
            groter probleem op te delen in kleinere stukken om 
            het makkelijker te maken in teamverband te werken.'
            tech={['Python','pygame']}
            />
            <ProjectItem
            title='Datavisualisatie leerlingen op school in Nederland'
            demo='https://www.youtube.com/watch?v=IKZJuK5pRWc&feature=youtu.be'
            github='https://github.com/TimO143/DataVisualisatieProject3'
            info='Een school project waarbij ik data uit een database moest halen en visualiseren.'
            tech={['C#','SQL','WindowsForms']}
            />
            <ProjectItem
            title='Keytoe Speurtocht'
            demo='https://speurtocht.keytoe.nl/'
            github='https://github.com/TimO143/SpeurtochtKeytoe'
            info='Een quiz/speurtocht om nieuwe werknemers binnen Keytoe kennis 
            te laten maken met de mensen bij Keytoe.'
            tech={['React','Node.js','Express']}
            />
            <ProjectItem
            title='Persoonlijke website v1'
            demo='https://timo143.github.io/'
            github='https://github.com/TimO143/TimO143.github.io'
            info='Eerste poging voor een persoonlijke website.'
            tech={['HTML','CSS','Bootstrap']}
            />
            <ProjectItem
            title='Persoonlijke website v2'
            demo=''
            github='https://github.com/TimO143/v2'
            info='Tweede poging voor een persoonlijke website. Ik wilde een website maken die 
            makkelijker te onderhouden zou zijn, beter uit te breiden en met een betere UI/UX.'
            tech={['React','HTML','CSS']}
            />
            <ProjectItem
            title='Chatbot over mijzelf'
            demo=''
            github='https://github.com/TimO143/Chatbot-Tim'
            info='Eigen project om te ontdekken hoe je een simpele chatbot maakt 
            die over een onderwerp kan praten.'
            tech={['Python','JSON','NLTK','Tensorflow']}
            />
            <ProjectItem
            title='Machine vision voor toegangspoorten'
            demo='https://youtu.be/6nJgGxDRgcM'
            github='https://github.com/TimO143/ProjectD-Label-A'
            info='Project voor het bedrijf Label A om te kijken of het mogelijk is 
            Machine Vision te gebruiken voor toegang te verlenen aan een evenement
             zonder tussenkomst van een medewerker.'
            tech={['Python','Neural Networks']}
            />
            <ProjectItem
            title='MonKey Webshop - Online product keystore'
            demo='https://www.youtube.com/watch?v=_CcLFfsu86c&feature=youtu.be'
            github='https://github.com/TimO143/MonKey-Webshop/tree/master/WebApplication1/WebApplication1'
            info='Een school project om een webshop te maken voor klanten met 
            volledige werking van het betaalproces, winkelen en beheer voor een administrator.'
            tech={['C#','.Net Core','Chart.js']}
            />
            <ProjectItem
            title='Travelr Reizigers App'
            demo='https://www.youtube.com/watch?v=CDp5lfLla9M&feature=youtu.be'
            github='https://github.com/TimO143/2018-TravelrApp-Project4-HR-Jaar1'
            info='Een school project om te werken met mobiele technologie reizigers 
            informatie te geven over verschillende landen op de wereld.'
            tech={['C#','Xamarin']}
            />
        </div>       
    </div>

        </section>
  );
}

export default Projects;
