import styles from "./projectCard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import parse, { attributesToProps, domToReact } from "html-react-parser"

const options = {
    replace: ({name,attribs,children}) => {
        if(name==='a' && attribs && attribs.href){
            const props = attributesToProps(attribs);
            return <a {...props} target="_blank" rel="noopener noreferrer">{domToReact(children)}</a>
        }
        if(name==='p'){
          return domToReact(children)
        }
    }
}
export default function ProjectCard({ project, className }) {
  return (
    <div className="card is-flex is-flex-direction-column is-justify-content-space-between" style={{ height: "100%"}}>
      <header className="card-header">
        <p className="card-header-title">{project.title}</p>
      </header>
      <div className="card-content">
        <div className="content" style={{overflowWrap:"anywhere"}}>
            {parse(project.content,options)}
            <div className={classNames("tags mt-2",styles.tags)}>
            {
                project.metadata.tags.map(tag=>
                    <span key={tag.icon.split(",")[1]} class="tag is-rounded has-text-weight-semibold" data-type={tag.icon.split(",")[1]}>
                        <span className="icon"><FontAwesomeIcon icon={tag.icon.split(",")}/></span>
                        <span>{tag.name}</span>
                    </span>
                )
            }
            </div>
        </div>
      </div>
      <footer
        className="card-footer"
      >
        {project.metadata.buttons.map((button) => (
          <a
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-footer-item"
            key={button.name}
            atl={button.name}
          >
            <span className="icon">
              <FontAwesomeIcon icon={button.icon.split(",")} />
            </span>
            <span>{button.name}</span>
          </a>
        ))}
      </footer>
    </div>
  );
}
