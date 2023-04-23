import { cn } from "@/lib/utils";
import { partnerData } from "@/public/data/businessTravel";
import { FunctionComponent } from "react";

interface PartnerProps {}

const Partner: FunctionComponent<PartnerProps> = () => {
  return (
    <div className=" hidden md:block mt-4">
      <div className="font-medium text-xl leading-6 text-primary dark:text-white">
        合作伙伴
      </div>
      <div className="mt-4  overflow-hidden flex flex-row">
        {partnerData.map((i, index) => (
          <div
            className="grid grid-cols-1 lg:grid-cols-3 w-full h-full"
            key={index}
          >
            <a
              href={i.href}
              className={cn(
                "w-20  h-8 inline-block bg-partner bg-no-repeat text-xs leading-7  m-auto"
              )}
              style={{
                backgroundPosition: i.position,
              }}
            ></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
