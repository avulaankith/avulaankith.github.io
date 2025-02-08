import { adjustSvgViewBox } from "../utils/portfolioScripts";
import { useEffect } from "react";

function MyImage() {
  useEffect(() => {
    adjustSvgViewBox();
  });
  return (
    <div className="myimage">
      <svg
        id="sw-js-blob-svg"
        viewBox="5 5 88 88"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
            <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%" />
            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <mask id="mask1" mask-type="alpha">
          <path
            fill="url(#sw-gradient)"
            d="M20.1,-31.6C24.8,-28.3,26.4,-20.6,30.3,-13.4C34.2,-6.3,40.4,0.2,40.8,6.8C41.3,13.3,36,20,30.4,26.3C24.8,32.6,19,38.7,12.1,40.3C5.2,41.8,-2.7,38.9,-10.4,36.3C-18.2,33.7,-25.7,31.3,-29.8,26.1C-33.8,20.9,-34.2,12.9,-33.5,5.9C-32.7,-1.1,-30.9,-7.2,-27.8,-12.2C-24.7,-17.2,-20.4,-21.1,-15.6,-24.3C-10.7,-27.4,-5.4,-29.9,1.2,-31.7C7.7,-33.5,15.5,-34.8,20.1,-31.6Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth={0}
            style={{ transition: "all 0.3s ease 0s" }}
          />
        </mask>
        <g mask="url(#mask1)">
          <path
            fill="url(#sw-gradient)"
            d="M20.1,-31.6C24.8,-28.3,26.4,-20.6,30.3,-13.4C34.2,-6.3,40.4,0.2,40.8,6.8C41.3,13.3,36,20,30.4,26.3C24.8,32.6,19,38.7,12.1,40.3C5.2,41.8,-2.7,38.9,-10.4,36.3C-18.2,33.7,-25.7,31.3,-29.8,26.1C-33.8,20.9,-34.2,12.9,-33.5,5.9C-32.7,-1.1,-30.9,-7.2,-27.8,-12.2C-24.7,-17.2,-20.4,-21.1,-15.6,-24.3C-10.7,-27.4,-5.4,-29.9,1.2,-31.7C7.7,-33.5,15.5,-34.8,20.1,-31.6Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth={0}
            style={{ transition: "all 0.3s ease 0s" }}
          />
          <image
            className="newImage"
            href="images/myphoto-nobg2.png"
            x={17}
            y={15}
            height="100%"
            width="100%"
          />
        </g>
      </svg>
    </div>
  );
}

export default MyImage;
