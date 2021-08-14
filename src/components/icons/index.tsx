import MapPin from "./map-pin.svg";

const iconMap = {
  "map-pin": MapPin,
};

interface IconProps {
  name: string;
  height?: string;
  width?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Icon = ({
  name,
  width = "24px",
  height = width,
  color = "#000000",
  className,
  onClick,
}: IconProps) => {
  const props = { width, height, color, className, onClick };
  // @ts-ignore
  let IconP = iconMap[name];
  return <IconP {...props} />;
};

export default Icon;
