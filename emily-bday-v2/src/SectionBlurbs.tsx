import aug from "./images/0august.jpeg";
import dec from "./images/0december.jpeg";
import feb from "./images/0feb.jpeg";
import jan from "./images/0jan.jpeg";
import july from "./images/0july.jpeg";
import june from "./images/0june.jpeg";
import mar from "./images/0march.jpeg";
import may from "./images/0may.jpeg";
import nov from "./images/0nov.jpeg";
import oct from "./images/0oct.jpeg";
import apr from "./images/0april.jpeg";
import sept from "./images/0sept.jpeg";

export type SectionInfo = {
  image: string;
  month: string;
  text: string;
};

  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  \nisi ut aliquip ex ea commodo consequat.
`;

  export const sections: SectionInfo[] = [
    {
      image: july,
      month: "July",
      text: lorem,
    },
    {
      image: aug,
      month: "August",
      text: lorem,
    },
    {
      image: sept,
      month: "September",
      text: lorem,
    },
    {
      image: oct,
      month: "October",
      text: lorem,
    },
    {
      image: nov,
      month: "November",
      text: lorem,
    },
    {
      image: dec,
      month: "December",
      text: lorem,
    },
    {
      image: jan,
      month: "January",
      text: lorem,
    },
    {
      image: feb,
      month: "February",
      text: lorem,
    },
    {
      image: mar,
      month: "March",
      text: lorem,
    },
    {
      image: apr,
      month: "April",
      text: lorem,
    },
    {
      image: may,
      month: "May",
      text: lorem,
    },
    {
      image: june,
      month: "June",
      text: lorem,
    },
  ];