import Navbar from "../components/navbar";
import { getData} from "../lib/api";
import Footer from "../components/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { NextSeo } from 'next-seo';

export default function Links({socials,links}) {

  return (
    <>
    <NextSeo
      title="Links - Haider Ali Punjabi"
    />  
    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
    <Navbar active={"links"}/>
    <section className="section navbar-margin-top">
        <div className="container">
            <header>
            <figure className="image has-text-centered mb-2">
            <picutre>
                    <source srcSet="/profile.webp" type="image/webp"/>
                    <source srcSet="/profile.png" type="image/png"/>
                    <img style={{width: "128px",height: "128px",marginRight: "auto",marginLeft: "auto"}} src="/profile.png" alt="Picture of Author" className="is-rounded"/>
            </picutre>
            </figure>
            <h1 className="title is-size-4 mt-2 has-text-centered">
            Haider Ali Punjabi
            </h1>
            </header>
            <div className="container buttons mt-6">
                {
                    links.map((link,idx)=>{
                        return(
                            <a href={link.metadata.url} style={{backgroundColor: link.metadata.background_color, color: link.metadata.foreground_color}} target="_blank" rel="noopener noreferrer" className="button ellipse is-fullwidth is-rounded">
                                {link.metadata.icon && <span className="icon"><FontAwesomeIcon icon={link.metadata.icon.split(",")}/></span>}
                                <span className="ellipse">{link.title}</span>
                                </a>
                        )
                    })
                }
            </div>
            <div className="container is-flex is-flex-wrap-wrap	 is-justify-content-center ">
          {socials.map((social,idx) => (
            <a
              href={social.metadata.link}
              alt={social.title}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
              key={idx}
            >
              <span className="is-size-2">
                <FontAwesomeIcon icon={social.metadata.icons.split(",")} />
              </span>
            </a>
          ))}
        </div>
        </div>
        </section>
    <Footer/>
    </div>
    </>
  )
}

export async function getStaticProps(context) {
  const links = (await getData("links")) || []
  const socials = (await getData("socials")) || []
  return {
    props: {
        socials,
        links
    }
  }
}