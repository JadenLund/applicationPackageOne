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
    <div className="marquee bg-marq overflow-hidden flex">
      <div className="marquee-content flex animate-marquee">
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
      </div>
      <div className="marquee-content flex animate-marquee">
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company2} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
        <div className="justify-between">
          <img className="marquee-item h-v block w-z" src={Company1} />
        </div>
      </div>
    </div>
  );
}
