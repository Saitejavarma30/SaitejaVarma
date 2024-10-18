import React, { useEffect } from "react";

interface TornpaperProps {
  filterName?: string;
  seed?: number;
  grungeFrequency?: number;
  grungeScale?: number;
  tornFrequency?: number;
  tornScale?: number;
}

/**
 * A React component that adds an SVG filter to the document, which is a torn paper effect.
 *
 * The component takes the following props:
 * - filterName: The name of the filter to be created. Defaults to "filter_tornpaper".
 * - seed: A random seed to be used for the turbulence and noise. Defaults to a random number.
 * - grungeFrequency: The frequency of the noise used for the grungy texture. Defaults to 0.03.
 * - grungeScale: The scale of the grungy texture. Defaults to 3.
 * - tornFrequency: The frequency of the noise used for the torn edge. Defaults to 0.05.
 * - tornScale: The scale of the torn edge. Defaults to 10.
 *
 * The component will append an SVG to the document when it mounts, and remove it when it unmounts.
 *
 * @param {Object} props The props for the component.
 * @param {string} [props.filterName="filter_tornpaper"] The name of the filter to be created.
 * @param {number} [props.seed=Math.floor(1e7 * Math.random())] A random seed to be used for the turbulence and noise.
 * @param {number} [props.grungeFrequency=0.03] The frequency of the noise used for the grungy texture.
 * @param {number} [props.grungeScale=3] The scale of the grungy texture.
 * @param {number} [props.tornFrequency=0.05] The frequency of the noise used for the torn edge.
 * @param {number} [props.tornScale=10] The scale of the torn edge.
 */
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
