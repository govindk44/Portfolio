import React from "react";
import { Div } from "./HeroBgAnimationStyle";

const HeroBgAnimation = () => (
  <Div>
    <svg viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.1">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437Z"
          stroke="url(#paint0_radial)"
        />
      </g>

      <ellipse cx="295.027" cy="193.118" rx="1.073" ry="1.074" fill="#945DD6">
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>

      <path d="M294.685 193.474L268.932 219.258" stroke="url(#paint3_linear)">
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>

      <ellipse cx="476.525" cy="363.313" rx="1.074" ry="1.073" fill="#13ADC7">
        <animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>

      <path d="M476.171 362.952L450.417 337.168" stroke="url(#paint11_linear)">
        <animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>

      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
          <stop offset="0.2" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="paint3_linear" x1="295.043" y1="193.116" x2="269.975" y2="218.154" gradientUnits="userSpaceOnUse">
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint11_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse">
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </Div>
);

export default HeroBgAnimation;
