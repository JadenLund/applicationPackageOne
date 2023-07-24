import Company1 from "../images/Company1.png";
import Company2 from "../images/Company2.png";
import Company3 from "../images/Company3.png";
import Company4 from "../images/Company4.png";
import Company5 from "../images/Company5.png";
import Company6 from "../images/Company6.png";
import Company7 from "../images/Company7.png";
import Company8 from "../images/Company8.png";
export default function Marquee() {
  {
    /* later organize to use a for loop for all of the image names maybe */
  }

  return (
    <div className="bg-marq relative flex h-w overflow-hidden">
      <div className=" py-12 animate-marquee whitespace-nowrap flex items-center justify-evenly object-scale-down">
        <img src={Company1} />
        <img src={Company2} />
        <img src={Company3} />
        <img src={Company4} />
        <img src={Company5} />
        <img src={Company6} />
        <img src={Company7} />
        <img src={Company8} />
      </div>
      <div className="py-12 animate-marquee whitespace-nowrap flex items-center justify-evenly object-scale-down">
        <img src={Company1} />
        <img src={Company2} />
        <img src={Company3} />
        <img src={Company4} />
        <img src={Company5} />
        <img src={Company6} />
        <img src={Company7} />
        <img src={Company8} />
      </div>
    </div>
  );
}
