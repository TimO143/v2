import React from 'react';
import './ArtProjects.scss';
import ArtProjectItem from "../../components/ArtProjectItem"
import ImageArtProjectItem from "../../components/ImageArtProjectItem"

// images
import chessboard from '../../assets/images/RenderedChessBoard.jpg';
import bedroomEvee from '../../assets/images/BedroomEvee.jpg'
import bedroomCycles from '../../assets/images/BedroomCycles.jpg'
import pbrHouse from '../../assets/images/House.jpg'

function ArtProjects() {
  return (
    <section id='art-projects' className='art-project-section'>
    <div className="art-project-container">
    <div className='title'>
        <p>Blender3D Animation Projects</p>  
    </div>
    <div className='divider'></div>  
    <div className="art-projects-grid">  
            <ArtProjectItem
            title='Donut Blender3D'
            demoId='DlwisD4siYM'
            isVideo={true}           
            info="1ste animatie project in Blender. Geleerd om Blender interface te gebruiken voor sculpting, animatie en 3D mesh te maken/bewerken."
            tech={['Blender']}
            />
            <ArtProjectItem
            title='Jelly Animatie'
            demoId='wHAg7jnsN_U'
            isVideo={true}           
            info="2de animatie project in Blender. Geleerd om modifiers zoals Screw, Shrink wrap te gebruiken, werken met Curve objecten en animeren rond een parent object."
            tech={['Blender']}
            />  
            <ArtProjectItem
            title='Snowball roll'
            demoId='mnbjxVtdkQY'
            isVideo={true}           
            info="3de animatie project in Blender. Geleerd om te werken met Rigid bodies, Dynamic paint modifier en shader editor."
            tech={['Blender']}
            />          
            <ArtProjectItem
            title='Looping Spiral'
            demoId='Wf7Na4gV2XM'
            isVideo={true}           
            info="4de animatie project in Blender. Geleerd hoe de graph editor werkt en bezier curve/lineair curves voor animaties aan te passen. Ook geleerd hoe belangrijk seams zijn voor UV modelling."
            tech={['Blender']}
            />
            <ArtProjectItem
            title='Dolphin Dynamic Paint Waves'
            demoId='YWknRa4IrF4'
            isVideo={true}           
            info="5de animatie project in Blender. Geleerd om een Model te maken vanaf referentie foto's (Dolfijn), mirror modifier, UV mapping, Dynamic paint, keyframing, shader editor en HDRI omgeving voor licht."
            tech={['Blender']}
            />
            <ArtProjectItem
            title='Card Shuffle'
            demoId='WMG2WKtTKWI'
            isVideo={true}           
            info="6de animatie project in Blender. Geleerd om op schaal te werken, UV mapping van de kaarten, origin verplaatsen voor deform modifier, commands om workflow te verbeteren (Repeat Last)"
            tech={['Blender']}
            />
            <ArtProjectItem
            title='Futuristic Loop'
            demoId='ZwIenp96Plc'
            isVideo={true}           
            info="7de animatie project in Blender. Geleerd om te werken met Geometry Nodes, shader editor, video editing, animatie keyframing, array modifier, Camera settings en Render settings (bloom, motion blur)."
            tech={['Blender']}
            />
            <ArtProjectItem
            title='Verjaardag van mijn broer'
            demoId='8ZbKFJskbDo'
            isVideo={true}           
            info="8ste animatie project in Blender. Eigen inspiratie en creativiteit om een animatie te maken met de thema's Verjaardag, Star Wars en Lego."
            tech={['Blender']}
            />
            <ArtProjectItem
            title='Highlighted Bubbles Geometry Nodes'
            demoId='vA8Z2e1GaWU'
            isVideo={true}           
            info="9de animatie project in Blender. Geometry Nodes om bubbles te maken die bewegen langs een curve."
            tech={['Blender']}
            />
            <ArtProjectItem
            title='Bubbles Geometry Nodes'
            demoId='Q9EfGpJDatA'
            isVideo={true}           
            info="Andere versie van Geometry Nodes om bubbles te maken die bewegen langs een curve."
            tech={['Blender']}
            />
            <ArtProjectItem
            title='House Construction Animation'
            demoId='Md2P_4AM1OU'
            isVideo={true}           
            info="10de animatie project in Blender. Huis model van CGTrader, Gebruik gemaakt van particle systeem om gras te maken samen met weight paint en particle edit. Animation node add-on voor de animatie."
            tech={['Blender']}
            />   
            <ArtProjectItem
            title='Glow in the Dark Hockey Domino'
            demoId='yeLndtxuTNs'
            isVideo={true}           
            info="11de animatie project in Blender. Rigid Body, multiple cameras, Object instancing met curve modifier, Key frame animating "
            tech={['Blender']}
            />   
            <ArtProjectItem
            title='Rubiks Cube'
            demoId='7s23lYfzQgE'
            isVideo={true}           
            info="12de animatie project in Blender. Modelling and animating. "
            tech={['Blender']}
            />   


        </div>  
        <div className='title'>
        <p>Blender3D Image Projects</p>  
        </div>
        <div className='divider'></div>  
    <div className="art-projects-grid">  
            <ImageArtProjectItem
            title='Chessboard'
            imagepath={chessboard}
            alt="Chessboard"
            info="Modellen zelf gemaakt met behulp van referentie fotos. Geleerd hoe je door loop cuts, extrude, scale en rotate modellen kan maken, compositie, licht en metaball voor wolken.  "
            tech={['Blender']}
            />
            <ImageArtProjectItem
            title='Bedroom Evee'
            imagepath={bedroomEvee}
            alt="Bedroom"
            info="Cloth simulation, Bump maps, displacement, roughness textures, ambient occlusion, normal maps, Sculpting, Hair particles, irradiance volume, Principled volume world texture, modelling carpet/bed/cushions. Changing materials with Shader editor. "
            tech={['Blender']}
            />
            <ImageArtProjectItem
            title='Bedroom Cycles'
            imagepath={bedroomCycles}
            alt="Bedroom"
            info="Cloth simulation, Bump maps, displacement, roughness textures, ambient occlusion, normal maps, Sculpting, Hair particles, irradiance volume, Principled volume world texture, modelling carpet/bed/cushions. Changing materials with Shader editor. "
            tech={['Blender']}
            />
            <ImageArtProjectItem
            title='Photorealism House'
            imagepath={pbrHouse}
            alt="PBRHouse"
            info="Poging om een huis er realistisch uit te laten zien door gebruik te maken van archimesh, PBR materials in seperate RGB channels, Fluid simulation with foam, low poly rocks, displacement/solidify/ modifiers, Boolean modifiers, Curve geometry for railings."
            tech={['Blender']}
            />
        </div>    

    </div>

        </section>
  );
}

export default ArtProjects;