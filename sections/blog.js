import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageCard from '../components/imageCard'
import Section from '../components/section'

export default function Blog({blogData,navbarEvent}){
    return (
        <Section title="Blog Posts" id="blogs" navbarEvent={navbarEvent}>
        <div className="container is-fullheight is-flex is-flex-direction-column is-align-content-center is-justify-content-space-between">
            <div className="columns is-centered is-multiline">
                {blogData.map((blog,idx)=>
                    <div key={idx} className="column is-6-tablet is-4-desktop">
                        <ImageCard data={blog.data}/>
                    </div>
                    )}
            <div className="column buttons is-full-tablet is-4-desktop has-text-centered">
                <Button title="Read my articles on my Blog" icon={["fas","globe-asia"]} link="https://blog.haideralipunjabi.com"/>
                <Button title="Read my articles on Medium" icon={["fab","medium"]} link="https://medium.com/@haideralipunjabi"/>
                <Button title="Read my articles on Dev.to" icon={["fab","dev"]} link="https://dev.to/haideralipunjabi/"/>
                </div>
            </div>
        </div>
        </Section>
    
    )
}

function Button({title,link,icon}){
    return(
             <a alt={title} className="button is-fullwidth is-rounded" href={link} target="_blank" rel="noopener noreferrer">
                <span className="icon is-large"><FontAwesomeIcon icon={icon}/></span>
                <span>{title}</span>
            </a>
    )
}