import React from 'react'
import { Gallery } from "react-grid-gallery";
import { LazyDiv } from "../lazyDiv"

import image1 from "../../image/mang-den/1.jpg"
import image2 from "../../image/mang-den/2.jpg"
import image3 from "../../image/mang-den/3.jpg"
import image4 from "../../image/mang-den/4.jpg"
import image5 from "../../image/mang-den/5.jpg"

const images = [
  {
    src: image2,
    width: 320,
    height: 212,
    alt: "Mang Den Stories"
  },
  {
    src: image4,
    width: 320,
    height: 212,
    alt: "Mang Den Stories"
  },
  {
    src: image5,
    width: 320,
    height: 212,
    alt: "Mang Den Stories"
  },
  {
    src: image3,
    width: 320,
    height: 212,
    alt: "Mang Den Stories"
  },
];

interface Props {
  title: string
}

export const GridGallery = ({ title }: Props) => {
  return (
    <LazyDiv className="card gallery">
      <h2 className="english">{title}</h2>
      <div className="carousel-wrapper" style={{ height: "100%", width: "100%"}}>
        <img src={image1} alt="Mang Den Stories" style={{ width: "100%", height: "100%" }} />
        <Gallery images={images} enableImageSelection={false} />
      </div>
    </LazyDiv>
  )
}

export default GridGallery