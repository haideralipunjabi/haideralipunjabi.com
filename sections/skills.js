import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '../components/section'
import styles from "./skills.module.scss"

export default function Skills({skills,navbarEvent}){
    return (
        <Section title="My Backpack" id="skills" navbarEvent={navbarEvent}>
        <div className="container is-fullheight is-flex is-flex-direction-column is-align-content-center is-justify-content-space-between">
            <div className="columns is-mobile is-centered is-vcentered is-multiline">
                {
                    skills.map((skill,idx)=>
                        <div key={idx} className="column is-half-mobile is-3-tablet is-2-desktop">
                            <div className={styles.skill}>
                            <h2 className="has-text-centered has-text-primary" style={{fontSize: "7rem"}}>
                            <FontAwesomeIcon icon={skill.metadata.icon.split(",")}/>
                            </h2>
                            <h3 className="is-size-5 has-text-centered">{skill.title}</h3>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
        </Section>
    )
}