import Image from "next/image";
import parse, { attributesToProps, domToReact } from "html-react-parser"
const options = {
  replace: ({name,attribs,children}) => {
      if(name==='a' && attribs && attribs.href){
          const props = attributesToProps(attribs);
          return <a alt="External Link" {...props} target="_blank" rel="noopener noreferrer">{domToReact(children)}</a>
      }
      if(name==='p'){
        return <> {domToReact(children)}</>
      }
  }
}

export default function ImageCard({ data,unoptimized }) {
  return (
    <div className="card" style={{ height: "100%"}}>
    <div className="card-image">
      <figure className="image is-fullwidth">
        <img src={data.image||data.metadata.image} alt={data.name||data.title}/>
      </figure>
    </div>
    <div className="card-content">
        <a href={data.link||data.metadata.link} target="_blank" rel="noopener noreferrer" alt={data.name||data.title}>
        <p className="title">{data.name||data.title}</p>
        {data.content && <p className="subtitle has-text-justified">{parse(data.content,options)}</p>}
        </a>
    </div>
  </div>
  );
}
