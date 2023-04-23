import Footers from "./ui/footers";
import BusinessTravel from "./ui/businessInfo/businessTravel";
import SafeGuard from "./ui/businessInfo/safeGuard";
import Join from "./ui/businessInfo/join";
import Partner from "./ui/businessInfo/parter";
import Nav from "./ui/businessInfo/nav";

export const BussinessInfo = () => {
  return (
    <div className="max-w-[1180px] content-center">
      <BusinessTravel />
      <SafeGuard />
      <Join />
      <Partner />
      <Nav />
      <Footers />
    </div>
  );
};
