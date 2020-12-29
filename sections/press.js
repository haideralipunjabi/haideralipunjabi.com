import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageCard from '../components/imageCard'
import Section from '../components/section'

export default function Press({pressData,navbarEvent}){

    pressData.forEach(item=>{
        item.link = item.metadata.link;
    })
    return (
        <Section title="Press" id="press"  noScroll={true} navbarEvent={navbarEvent}>
        <div className="container is-fullheight is-flex is-flex-direction-column is-align-content-center is-justify-content-space-between">
            <div className="columns is-centered is-multiline">
                {pressData.map((item,idx)=>
                    <div key={idx} className="column is-6-tablet is-4-desktop">
                        <ImageCard data={item} unoptimized={true}/>
                    </div>
                    )}
            </div>
        </div>
        </Section>
    
    )
}
