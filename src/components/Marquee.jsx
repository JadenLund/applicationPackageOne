import Comp1 from "../images/Comp1.png";
import Comp2 from "../images/Comp2.png";
import Comp3 from "../images/Comp3.png";
import Comp4 from "../images/Comp4.png";
import Comp5 from "../images/Comp5.png";
import Comp6 from "../images/Comp6.png";
import Comp7 from "../images/Comp7.png";
import Comp8 from "../images/Comp8.png";
export default function Marquee() {
  {
    /* later organize to use a for loop for all of the image names maybe */
  }

  return (
    <div>
      <div className="bg-marq overflow-hidden flex">
        <div className="bg-white gap-u w-screen flex animate-marquee">
          {[Comp1, Comp2, Comp3, Comp4, Comp5, Comp6, Comp7, Comp8].map(
            (company, index) => (
              <img key={index} className="h-u" src={company} />
            )
          )}
        </div>
        <div className="gap-u flex w-screen animate-marquee2">
          {[Comp1, Comp2, Comp3, Comp4, Comp5, Comp6, Comp7, Comp8].map(
            (company, index) => (
              <img key={index} className="h-u" src={company} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
