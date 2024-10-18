import React from "react";
import LanguageComponent from "../LanguageComponent/index.tsx";
import {
  CardContainer,
  CardLocation,
  CardSubTitle,
  CardText,
  CardTextUl,
  CardTitle,
} from "./styles.ts";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string[];
  location: string;
  company: string;
};
/**
 * A Card component that displays a company, title, location, and
 * description. The description is rendered as an unordered list.
 *
 * @param {string} title The title of the card.
 * @param {string[]} description The description of the card, rendered as an unordered list.
 * @param {string} location The location of the card.
 * @param {string} company The company of the card.
 */
const Card: React.FC<CardProps> = ({
  title,
  description,
  location,
  company,
}) => {
  return (
    <>
      <CardContainer>
        <CardTitle>{company}</CardTitle>
        <CardSubTitle>{title}</CardSubTitle>
        <CardLocation>{location}</CardLocation>
      </CardContainer>
    </>
  );
};

export default Card;
