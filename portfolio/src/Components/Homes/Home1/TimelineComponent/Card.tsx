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
