import { useEffect, useRef } from 'react'
import ScrollDown from '../components/scrollDown'
import {useOnScreen} from "./CustomHooks";
export default function Section({title,children,id, noScroll, navbarEvent}){
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    useEffect(()=>{
        if(isVisible && navbarEvent){
            navbarEvent(id);   
        }
    },[isVisible])
    return(
        <section ref={ref} className="hero is-fullheight-with-navbar" id={id}>
        {title && <h1 className="is-size-1 has-text-centered has-text-primary">{title}</h1>}
        <div className="hero-body">
                {children}
        </div>
        {!noScroll && <ScrollDown onClick={()=>{
            ref.current.nextSibling.scrollIntoView();
        }}/>}
        </section>
    )
}