import { FunctionComponent } from "react";
import * as AllIcons from "@ant-design/icons";

interface IconProps {
  name: keyof typeof AllIcons
  className: any
}

const Icon: FunctionComponent<IconProps> = ({name, className}) => {
  const Comp = AllIcons[name] as any;
  return ( 
    <Comp className={className}/>
  );
}

export default Icon;