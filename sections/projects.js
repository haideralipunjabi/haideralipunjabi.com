import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectCard from '../components/projectCard'
import Section from '../components/section'

export default function Projects({projects,githubData,navbarEvent}){
    return(
        <Section title="Projects" id="projects" navbarEvent={navbarEvent}>
        <div className="container is-fullheight is-flex is-flex-direction-column is-align-content-center is-justify-content-space-between">
            <div className="columns is-centered is-multiline">
                <Box title={githubData.repoCount} subtitle="Repositories" icon={["fas","book-open"]}/>
                <Box title={githubData.stargazers} subtitle="Stargazers" icon={["fas","star"]}/>
                <Box title={githubData.forks} subtitle="Forks" icon={["fas","code-branch"]}/>
                {
                    projects.map((project,idx)=>
                        <div key={idx} className="column is-6-tablet is-4-desktop">
                            <ProjectCard project={project}/>
                        </div>
                    )
                }
            </div>
        </div>
        </Section>
    
    )
}

function Box({title,subtitle,icon}){
    return (
        <div className="column is-one-third">
                <div className="box has-background-secondary">
                <FontAwesomeIcon className="is-pulled-right is-size-2" icon={icon}/>
                    <p className="title">{title}</p>
                    <p className="subtitle">{subtitle}</p>
                </div>
            </div>
    )
}