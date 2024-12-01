import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ReactComponent as ArrowLeft } from "../../image/angle-left-sm.svg"
import { LazyDiv } from "../lazyDiv"
import { Button } from "../button"
import { useModal } from "../store"
import { Gallery as ReactGridGallery } from "react-grid-gallery";


import image1 from "../../image/gallery/image1.jpg"
import image2 from "../../image/gallery/image2.jpg"
import image3 from "../../image/gallery/image3.jpg"
import image4 from "../../image/gallery/image4.jpg"
import image5 from "../../image/gallery/image5.jpg"
import image6 from "../../image/gallery/image6.jpg"
import image7 from "../../image/gallery/image7.jpg"
import image8 from "../../image/gallery/image8.jpg"
import image9 from "../../image/gallery/image9.jpg"
import image10 from "../../image/gallery/image10.jpg"
import image11 from "../../image/gallery/image11.jpg"
import image12 from "../../image/gallery/image12.jpg"
import image13 from "../../image/gallery/image13.jpg"
import image14 from "../../image/gallery/image14.jpg"
import image15 from "../../image/gallery/image15.jpg"
import image16 from "../../image/gallery/image16.jpg"
import image17 from "../../image/gallery/image17.jpg"
import image18 from "../../image/gallery/image18.jpg"
import image19 from "../../image/gallery/image19.jpg"
import image20 from "../../image/gallery/image20.jpg"
import image21 from "../../image/gallery/image21.jpg"
import image22 from "../../image/gallery/image22.jpg"
import image23 from "../../image/gallery/image23.jpg"
import image24 from "../../image/gallery/image24.jpg"
import image25 from "../../image/gallery/image25.jpg"
import image26 from "../../image/gallery/image26.jpg"
import image27 from "../../image/gallery/image27.jpg"
import image28 from "../../image/gallery/image28.jpg"
import image29 from "../../image/gallery/image29.jpg"
import image30 from "../../image/gallery/image30.jpg"
import image31 from "../../image/gallery/image31.jpg"
import image32 from "../../image/gallery/image32.jpg"
import image33 from "../../image/gallery/image33.jpg"
import image34 from "../../image/gallery/image34.jpg"
import image35 from "../../image/gallery/image35.jpg"
import image36 from "../../image/gallery/image36.jpg"
import image37 from "../../image/gallery/image37.jpg"
// import image38 from "../../image/gallery/image38.jpg"
import image39 from "../../image/gallery/image39.jpg"
import image40 from "../../image/gallery/image40.jpg"
import image41 from "../../image/gallery/image41.jpg"
// import image42 from "../../image/gallery/image42.jpg"
import image43 from "../../image/gallery/image43.jpg"


const IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  // image38,
  image39,
  image40,
  image41,
  // image42,
  image43,
]
// random images 
const RandomImages = IMAGES.sort(() => Math.random() - 0.5)


const GridImages = [
  {
    src: image6,
    width: 800,
    height: 600,
    alt: "gallery"
  },
  {
    src: image18,
    width: 600,
    height: 400,
    alt: "gallery"
  },
  {
    src: image10,
    width: 800,
    height: 800,
    alt: "gallery"
  },
  {
    src: image14,
    width: 480,
    height: 480,
    alt: "gallery"
  },
  {
    src: image17,
    width: 320,
    height: 400,
    alt: "gallery"
  },
  {
    src: image19,
    width: 320,
    height: 400,
    alt: "gallery"
  },
  {
    src: image37,
    width: 400,
    height: 400,
    alt: "gallery"
  },
  {
    src: image25,
    width: 400,
    height: 400,
    alt: "gallery"
  },

]

export const Gallery = ({ title }: { title: string }) => {
  const { openModal, closeModal } = useModal()

  return (
    <LazyDiv className="card gallery" style={{ margin: "auto", width: "100%" }}>
      <h2 className="english">{title}</h2>
      <div className="carousel-wrapper" style={{
        maxWidth: "500px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "auto",
      }}>
        <ReactGridGallery images={GridImages} enableImageSelection={false} />
      </div>
      <div className="break" />
      <div className="break" />
      <Button
        style={{
          width: "fit-content",
          margin: "auto",
        }}
        onClick={() =>
          openModal({
            className: "all-photo-modal",
            closeOnClickBackground: true,
            header: <div className="title">Gallery Photos</div>,
            content: (
              <>
                <div className="photo-list">
                  {RandomImages.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${idx}`}
                      draggable={false}
                    />
                  ))}
                </div>
                <div className="break" />
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                Đóng
              </Button>
            ),
          })
        }
      >
        Còn nữa...
      </Button>
      <div className="break" />
      <div className="break" />
      <div className="break" />
    </LazyDiv>
  )
}
