import LeftSidebar from "@/components/organisms/LeftSidebar";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import RightSidebar from "@/components/organisms/RitghtSidebar";



export default function Home() {
  return (
   <div className="flex justify-between bg-accent ">
      <LeftSidebar/>
      <PortfolioSection/>
      <RightSidebar/>
   </div>
  );
}
