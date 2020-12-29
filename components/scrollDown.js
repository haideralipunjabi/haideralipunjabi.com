import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import styles from "./scrollDown.module.scss";
export default function ScrollDown({onClick}){
    return(
        <div className={classNames("has-text-centered","mb-3","is-hidden-touch",styles.scrollDown)}>
            <span onClick={onClick} className="is-size-4 has-text-primary has-text-centered"><FontAwesomeIcon icon={["fas","arrow-down"]}/></span>
        </div>
    )
}