import Comp1 from "../images/Comp1.png";
import Comp2 from "../images/Comp2.png";
import Comp3 from "../images/Comp3.png";
import Comp4 from "../images/Comp4.png";
import Comp5 from "../images/Comp5.png";
import Comp6 from "../images/Comp6.png";
import Comp7 from "../images/Comp7.png";
import Comp8 from "../images/Comp8.png";
export default function Marquee() {
  return (
    <div className="bg-marq overflow-hidden flex rounded-xl">
      <div className="gap-u px-h flex-none flex animate-marquee">
        {[Comp1, Comp2, Comp3, Comp4, Comp5, Comp6, Comp7, Comp8].map(
          (company, index) => (
            <img key={index} className="h-u" src={company} />
          )
        )}
      </div>
      <div className="px-h gap-u flex-none flex animate-marquee2">
        {[Comp1, Comp2, Comp3, Comp4, Comp5, Comp6, Comp7, Comp8].map(
          (company, index) => (
            <img key={index} className="h-u" src={company} />
          )
        )}
      </div>
    </div>
  );
}
