import React, { useEffect } from "react";

interface TornpaperProps {
  filterName?: string;
  seed?: number;
  grungeFrequency?: number;
  grungeScale?: number;
  tornFrequency?: number;
  tornScale?: number;
}

const Tornpaper: React.FC<TornpaperProps> = ({
  filterName = "filter_tornpaper",
  seed = Math.floor(1e7 * Math.random()), // random seed
  grungeFrequency = 0.03,
  grungeScale = 3,
  tornFrequency = 0.05,
  tornScale = 10,
}) => {
  // Hook to append the SVG to the document when the component mounts
  useEffect(() => {
    const svgNamespace = "http://www.w3.org/2000/svg";
    let svgElement = document.createElementNS(svgNamespace, "svg");

    svgElement.style.cssText =
      "position:fixed;top:0;left:0;width:0;height:0;z-index:-1;";
    svgElement.innerHTML = `
      <filter id="${filterName}">
        <feTurbulence type="fractalNoise" baseFrequency="${grungeFrequency}" result="paper_noise" numOctaves="10" seed="${seed}" />
        <feDiffuseLighting in="paper_noise" lighting-color="white" surfaceScale="${grungeScale}" result="paper">
          <feDistantLight azimuth="45" elevation="60" />
        </feDiffuseLighting>
        <feTurbulence baseFrequency="${tornFrequency}" type="turbulence" numOctaves="10" seed="${seed}" result="edge_noise" />
        <feGaussianBlur stdDeviation="0.5" in="SourceGraphic" />
        <feMorphology operator="erode" radius="5" />
        <feOffset dx="-2" dy="-2" />
        <feDisplacementMap scale="${tornScale}" xChannelSelector="B" yChannelSelector="G" in2="edge_noise" result="edge" />
        <feComposite in="paper" in2="edge" operator="atop" result="result_rough" />
        <feComposite in="SourceGraphic" in2="edge" operator="atop" result="result_sg" />
        <feBlend mode="multiply" in="result_rough" in2="result_sg" />
      </filter>`;

    document.body.appendChild(svgElement);

    // Cleanup function to remove the SVG when the component unmounts
    return () => {
      document.body.removeChild(svgElement);
    };
  }, [
    filterName,
    seed,
    grungeFrequency,
    grungeScale,
    tornFrequency,
    tornScale,
  ]);

  return null; // Since this component is adding SVG to the document, nothing is returned to the JSX
};

export default Tornpaper;
