import React from 'react';
import './Projects.scss';

import ProjectItem from "../../components/ProjectItem"



function Projects() {
  return (
    <section id='projects' className='project-container'>
    <div className='title'>
        <p>Projects</p>   
        <hr className='divider'></hr>          
    </div>
    <div className='project-content'>      
        <ProjectItem 
            name='Pygame minigames'
            link='testlink'
            info='Een school project waar het de bedoeling was om een 
            groter probleem op te delen in kleinere stukken om 
            het makkelijker te maken in teamverband te werken.'
            used={['Python','pygame']}
        />
        <ProjectItem 
            name='Datavisualisatie leerlingen op school in Nederland'
            link='testlink'
            info='Een school project waarbij ik data uit een database moest halen en visualiseren.'
            used={['C#','SQL','WindowsForms']}
        />
        <ProjectItem 
            name='Keytoe Speurtocht'
            link='https://speurtocht.keytoe.nl/'
            info='Een quiz/speurtocht om nieuwe werknemers binnen Keytoe kennis te laten maken met de mensen bij Keytoe.'
            used={['React','Node.js','Express']}
        /> 
        <ProjectItem 
            name='Chatbot over mijzelf'
            link='testlink'
            info='Eigen project om te ontdekken hoe je een simpele chatbot maakt die over een onderwerp kan praten.'
            used={['Python','JSON','NLTK','Tensorflow']}
        />   
        <ProjectItem 
            name='Machine vision voor toegangspoorten'
            link='testlink'
            info='Project voor het bedrijf Label A om te kijken of het mogelijk is Machine Vision te gebruiken
            voor toegang te verlenen aan een evenement zonder tussenkomst van een medewerker.'
            used={['Python','Neural Networks']}
        />
        <ProjectItem 
            name='MonKey Webshop - Online product keystore'
            link='testlink'
            info='Een school project om een webshop te maken voor klanten met volledige werking van het betaalproces, winkelen en beheer voor een administrator.'
            used={['C#','.Net Core','Chart.js']}
        />
        <ProjectItem 
            name='Travelr Reizigers App'
            link='testlink'
            info='Een school project om te werken met mobiele technologie reizigers 
            informatie te geven over verschillende landen op de wereld.'
            used={['C#','Xamarin']}
        /> 
    </div>            
</section>
  );
}

export default Projects;
