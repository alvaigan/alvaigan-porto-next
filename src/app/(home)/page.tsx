import { Headline } from "../components/home/Headline";
import { HomeContent } from "../components/home/HomeContent";
import { WindowedLine } from "../components/home/WindowedLine";
import { NavBar } from "../components/navbar/NavBar";

export default function Home() {
  return (
    <div>
      <WindowedLine />
      <div className="main-container overflow-hidden">
        <NavBar />
        <Headline />
        <HomeContent />
      </div>
    </div>
  );
}
