import {
  icon,
  IconName,
  IconPrefix,
  IconProp,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function stringToIcon(iconString: string): IconProp {
  let [prefix, name] = iconString.split(" ");
  let iconName = name.slice(3);
  let iconPrefix = "fa" + prefix.slice(3, 4);

  return [iconPrefix as IconPrefix, iconName as IconName];
}
export function Icon({
  className,
  icon,
}: {
  className?: string;
  icon: string;
}) {
  return <FontAwesomeIcon className={className} icon={stringToIcon(icon)} />;
}
