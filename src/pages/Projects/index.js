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
            demoId='3o6C6I0TRFw'
            isVideo={true}
            github='https://github.com/TimO143/Project-2-Pygame'
            info='Een school project waar het de bedoeling was om een 
            groter probleem op te delen in kleinere stukken om 
            het makkelijker te maken in teamverband te werken.'
            tech={['Python','pygame']}
            />
            <ProjectItem
            title='Datavisualisatie leerlingen op school in Nederland'
            demoId='IKZJuK5pRWc'
            isVideo={true}
            github='https://github.com/TimO143/DataVisualisatieProject3'
            info='Een school project waarbij ik data uit een database moest halen en visualiseren.'
            tech={['C#','SQL','WindowsForms']}
            />
            <ProjectItem
            title='Keytoe Speurtocht'
            demoId='https://speurtocht.keytoe.nl/'
            isVideo={false}
            github='https://github.com/TimO143/SpeurtochtKeytoe'
            info='Een quiz/speurtocht om nieuwe werknemers binnen Keytoe kennis 
            te laten maken met de mensen bij Keytoe.'
            tech={['React','Node.js','Express']}
            />
            <ProjectItem
            title='Persoonlijke website v1'
            demoId='https://timo143.github.io/'
            isVideo={false}
            github='https://github.com/TimO143/TimO143.github.io'
            info='Eerste poging voor een persoonlijke website.'
            tech={['HTML','CSS','Bootstrap']}
            />
            <ProjectItem
            title='Persoonlijke website v2'
            demoId=''
            isVideo={true}
            github='https://github.com/TimO143/v2'
            info='Tweede poging voor een persoonlijke website. Ik wilde een website maken die 
            makkelijker te onderhouden zou zijn, beter uit te breiden en met een betere UI/UX.'
            tech={['React','HTML','CSS / Sass']}
            />
            <ProjectItem
            title='Chatbot over mijzelf'
            demoId=''
            isVideo={true}
            github='https://github.com/TimO143/Chatbot-Tim'
            info='Eigen project om te ontdekken hoe je een simpele chatbot maakt 
            die over een onderwerp kan praten.'
            tech={['Python','JSON','NLTK','Tensorflow']}
            />
            <ProjectItem
            title='Machine vision voor toegangspoorten'
            demoId='6nJgGxDRgcM'
            isVideo={true}
            github='https://github.com/TimO143/ProjectD-Label-A'
            info='Project voor het bedrijf Label A om te kijken of het mogelijk is 
            Machine Vision te gebruiken voor toegang te verlenen aan een evenement
             zonder tussenkomst van een medewerker.'
            tech={['Python','Neural Networks']}
            />
            <ProjectItem
            title='MonKey Webshop - Online product keystore'
            demoId='_CcLFfsu86c'
            isVideo={true}
            github='https://github.com/TimO143/MonKey-Webshop/tree/master/WebApplication1/WebApplication1'
            info='Een school project om een webshop te maken voor klanten met 
            volledige werking van het betaalproces, winkelen en beheer voor een administrator.'
            tech={['C#','.Net Core','Chart.js']}
            />
            <ProjectItem
            title='Travelr Reizigers App'
            demoId='CDp5lfLla9M'
            isVideo={true}
            github='https://github.com/TimO143/2018-TravelrApp-Project4-HR-Jaar1'
            info='Een school project om te werken met mobiele technologie reizigers 
            informatie te geven over verschillende landen op de wereld.'
            tech={['C#','Xamarin']}
            />
            <ProjectItem
            title='Afstudeerstage Kruispunt simulatie'
            demoId='ZazmSJ0nz8c'
            isVideo={true}
            github=''
            info="Het doel van het afstudeerproject was om een prototype te maken van een 
            kruispunt in een simulatie met real-time data van objecten zoals auto's, verkeerslichten 
            en personen."
            tech={['C#','Blender',"Angular","Unity","Computer Vision","WebGL"]}
            />
        </div>       
    </div>

        </section>
  );
}

export default Projects;