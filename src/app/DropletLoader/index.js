import React, { useEffect } from "react";
import "./index.scss";
// import CustomWiggle from "../_source/CustomWiggle3.min";
import { gsap } from "gsap/all";

useEffect(() => {
  const script = document.createElement("script");
  script.src = "../_source/CustomWiggle3.min.js";
  script.async = true;
  document.body.appendChild(script);

  let select = (s) => document.querySelector(s),
    selectAll = (s) => document.querySelectorAll(s),
    mainSVG = select("#mainSVG");

  let e = CustomWiggle.create("", { wiggles: 1, type: "easeOut" });
  gsap.set("svg", {
    visibility: "visible",
  });
  gsap.set(".dot", {
    transformOrigin: "50% 50%",
    attr: {
      cx: "random(350, 450)",
      cy: 440,
      r: "random(4, 20)",
    },
  });
  gsap.set(".outsideDot", {
    transformOrigin: "50% 50%",
    attr: {
      cx: "random(370, 420)",
      cy: 420,
      r: "random(3, 19)",
    },
  });
  let tl1 = gsap.timeline();
  tl1
    .to(".dots1 .dot", {
      duration: "random(2,8)",
      attr: {
        cy: "random(-220, -320)",
      },
      stagger: {
        each: 0.16,
        repeat: -1,
        repeatRefresh: false,
      },
      ease: "sine.in",
    })
    .seek(100);

  let tl2 = gsap.timeline();
  tl2
    .to(".dots2 .dot", {
      duration: "random(2,5)",
      attr: {
        cy: "random(-220, -320)",
      },
      stagger: {
        each: 0.16,
        repeat: -1,
        repeatRefresh: false,
      },
      ease: "sine.in",
    })
    .seek(100);

  let tl3 = gsap.timeline();
  tl3
    .to(".dots3 .dot", {
      duration: "random(6,12)",
      attr: {
        cy: "random(-220, -320)",
      },
      stagger: {
        each: 0.16,
        repeat: -1,
        repeatRefresh: false,
      },
      ease: "sine.in",
    })
    .seek(100);

  let tl4 = gsap.timeline();
  tl4
    .to(".dots4 .dot", {
      duration: "random(3,9)",
      attr: {
        cy: "random(-220, -320)",
      },
      stagger: {
        each: 0.16,
        repeat: -1,
        repeatRefresh: false,
      },
      ease: "sine.in",
    })
    .seek(100);
  gsap.to({}, { ease: e });
  let tl5 = gsap.timeline();
  tl5
    .to(".dots5 .outsideDot", {
      duration: "random(3,9)",
      attr: {
        cy: "random(-220, -320)",
        r: 0,
      },
      stagger: {
        each: 0.16,
        repeat: -1,
        repeatRefresh: false,
      },
      ease: "power2.in",
    })
    .seek(100);

  gsap
    .to(".outline", {
      duration: gsap.utils.wrap([7, 6.1, 5.2]),
      svgOrigin: "400 300",
      rotation: gsap.utils.wrap([-360, -360]),
      ease: "linear",
      stagger: {
        each: 1,
        repeat: -1,
      },
    })
    .seek(200);
  //ScrubGSAPTimeline(tl)
  //gsap.globalTimeline.timeScale(0.25)
  return () => {
    document.body.removeChild(script);
  };
});

export const Loader = () => {
  return (
    <svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <filter id="drop" x="-100%" y="-100%" width="250%" height="250%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feOffset dx="0" dy="60" result="offsetblur" />
          <feFlood id="glowAlpha" floodColor="#555" floodOpacity="0.12" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="drop2" x="-100%" y="-100%" width="250%" height="250%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feOffset dx="0" dy="6" result="offsetblur" />
          <feFlood id="glowAlpha" floodColor="#555" floodOpacity="0.51" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
            result="cm"
          />
          <feBlend />
        </filter>
        <linearGradient
          id="grad1"
          gradientUnits="userSpaceOnUse"
          x1="400"
          y1="100"
          x2="400"
          y2="600"
        >
          <stop offset="0" style={{ stopColor: "#059FF6" }} />
          <stop offset="1" style={{ stopColor: "#0369F3" }} />
        </linearGradient>
        <path id="copyright-cg" d="" />
        <linearGradient
          id="grad2"
          gradientUnits="userSpaceOnUse"
          x1="400"
          y1="200"
          x2="400"
          y2="400"
        >
          <stop offset="0" style={{ stopColor: "#059FF6" }} />
          <stop offset="1" style={{ stopColor: "#0408A7" }} />
        </linearGradient>
        <linearGradient
          id="grad3"
          gradientUnits="userSpaceOnUse"
          x1="400"
          y1="500"
          x2="400"
          y2="600"
        >
          <stop offset="0" style={{ stopColor: "#059FF6" }} />
          <stop offset="1" style={{ stopColor: "#0369F3" }} />
        </linearGradient>

        <linearGradient
          id="grad4"
          gradientUnits="userSpaceOnUse"
          x1="400"
          y1="200"
          x2="400"
          y2="300"
        >
          <stop offset="0" style={{ stopColor: "#02DBFE" }} />
          <stop offset="1" style={{ stopColor: "#0369F3" }} />
        </linearGradient>

        <linearGradient
          id="grad5"
          gradientUnits="userSpaceOnUse"
          x1="400"
          y1="100"
          x2="400"
          y2="600"
        >
          <stop offset="0" style={{ stopColor: "#0369F3" }} />
          <stop offset="1" style={{ stopColor: "#02DBFE" }} />
        </linearGradient>

        <clipPath id="mainMask">
          <circle cx="400" cy="300" r="100" />
        </clipPath>

        <clipPath id="otherMask">
          <rect x="300" y="0" width="200" height="400" rx="100" ry="100" />
        </clipPath>
      </defs>

      <g filter="url(#drop)">
        <g id="whole" clipPath="url(#mainMask)">
          <g className="dots1" filter="url(#goo)" fill="url(#grad1)">
            <circle
              className="outline"
              cx="400"
              cy="300"
              r="90"
              fill="none"
              stroke="#0369F3"
              strokeWidth="23"
              strokeDasharray="160 65"
            />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
          </g>

          <g className="dots2" filter="url(#goo)" fill="url(#grad2)">
            <circle
              className="outline"
              cx="400"
              cy="300"
              r="90"
              fill="none"
              stroke="#0408A7"
              strokeWidth="23"
              strokeDasharray="160 40"
            />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
          </g>

          <g className="dots3" filter="url(#goo)" fill="url(#grad3)">
            <circle
              className="outline"
              cx="400"
              cy="300"
              r="90"
              fill="none"
              stroke="url(#grad3)"
              strokeWidth="23"
              strokeDasharray="240 "
            />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
          </g>

          <g className="dots4" filter="url(#goo)" fill="url(#grad4)">
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
            <circle className="dot" cx="0" cy="0" r="20" />
          </g>
        </g>
      </g>
      <g filter="url(#drop2)">
        <g clipPath="url(#otherMask)">
          <g className="dots5" fill="url(#grad2)" filter="url(#goo)">
            <circle className="outsideDot" cx="0" cy="0" r="20" />
            <circle className="outsideDot" cx="0" cy="0" r="20" />
            <circle className="outsideDot" cx="0" cy="0" r="20" />
            <circle className="outsideDot" cx="0" cy="0" r="20" />
            <circle className="outsideDot" cx="0" cy="0" r="20" />
            <circle className="outsideDot" cx="0" cy="0" r="20" />
            <circle className="outsideDot" cx="0" cy="0" r="20" />
            <circle className="outsideDot" cx="0" cy="0" r="20" />
            <circle className="outsideDot" cx="0" cy="0" r="20" />
          </g>
        </g>
      </g>
    </svg>
  );
};
