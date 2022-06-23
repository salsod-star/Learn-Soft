import React from "react";
import CardComponent from "../../../components/cardComponent";

import html5Image from "../../../images/html5.png";
import CSS3Image from "../../../images/css3-png-transparent.png";
import JsImage from "../../../images/javascript.jpg";
import reactImage from "../../../images/logo.svg";

const cardData = [
  {
    id: 1,
    cardImgURL: html5Image,
    cardImgName: "Html5",
    cardHeader: "HTML5",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus tenetur illo accusantium dolores quos!",
  },

  {
    id: 2,
    cardImgURL: CSS3Image,
    cardImgName: "CSS3",
    cardHeader: "CSS3",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus tenetur illo accusantium dolores quos!",
  },
  {
    id: 3,
    cardImgURL: JsImage,
    cardImgName: "JavaScript",
    cardHeader: "JavaScript",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus tenetur illo accusantium dolores quos!",
  },
  {
    id: 4,
    cardImgURL: reactImage,
    cardImgName: "React",
    cardHeader: "ReactJS",
    cardText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus tenetur illo accusantium dolores quos!",
  },
];

function FeaturesBody() {
  return (
    <div className="card-container">
      {cardData.map((cardInfo) => {
        return <CardComponent key={cardInfo.id} cardInfo={cardInfo} />;
      })}
    </div>
  );
}

export default FeaturesBody;
