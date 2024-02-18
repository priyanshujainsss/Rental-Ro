import Advantage from "./(components)/Home/Advantage";
import Features from "./(components)/Home/Features/Feature";
import Home from "./(components)/Home/Home";
import HomeCard from "./(components)/Home/HomeCard";
import Plans from "./(components)/Home/Plans/Plans";
import WhatsRight from "./(components)/Home/WhatsRight/WhatsRight";

export default function App() {
  return (
    <div>
      <Home />
      <HomeCard />
      <Advantage />
      <Features />
      <WhatsRight />
      <Plans />
    </div>
  );
}
