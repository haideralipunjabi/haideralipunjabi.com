import {
  IconName,
  IconPrefix,
  IconProp,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
function stringToIcon(iconString: string): IconProp {
  const [prefix, name] = iconString.split(" ");
  const iconName = name.slice(3);
  const iconPrefix = "fa" + prefix.slice(3, 4);

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

export function SocialIcon({
  link,
  icon,
  name,
  className,
}: {
  link: string;
  icon: string;
  name: string;
  className?: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer me"
      aria-label={name}
      className={classNames("w-max text-center text-3xl  md:text-4xl", className)}
    >
      <Icon
        className="text-accent-primary transition-transform duration-100 hover:scale-110"
        icon={icon}
      />
    </a>
  );
}
