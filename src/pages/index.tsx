import Youtube from "@/components/Youtube";
import Footer from "@/components/footer";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import Discover from "@/components/Discover";
import Article from "@/components/Article";
import Navbar from "@/components/Navbar";





export default function Home() {
  return (
    <div>
      <Navbar/>
      <Youtube/>
      <AppleCardsCarouselDemo/>
     <Discover/>
     <Article/>
      <Footer/>
    </div>
  );
}
