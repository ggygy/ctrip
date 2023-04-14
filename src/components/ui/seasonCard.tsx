import Image from "next/image";
import { FunctionComponent } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
interface SeasonCardProps {
  title: string;
  pic: string;
}

const SeasonCard: FunctionComponent<SeasonCardProps> = (props) => {
  const { title, pic } = props;
  return (
    <div className="border bg">
      <div className="flex flex-wrap">
        <Image src={pic} alt="" width={96} height={71} />
        <div>{title}</div>
        <div>
          <RightCircleOutlined />
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;