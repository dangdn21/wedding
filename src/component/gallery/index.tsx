import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ReactComponent as ArrowLeft } from "../../image/angle-left-sm.svg"
import { LazyDiv } from "../lazyDiv"
import { Button } from "../button"
import { useModal } from "../store"
import { Gallery as ReactGridGallery } from "react-grid-gallery";


import image1 from "../../image/image1.jpg"
import image2 from "../../image/image2.jpg"
import image3 from "../../image/image3.jpg"
import image4 from "../../image/image4.jpg"
import image5 from "../../image/image5.jpg"
import image6 from "../../image/image6.jpg"
import image7 from "../../image/image7.jpg"
import image8 from "../../image/image8.jpg"
import image9 from "../../image/image9.jpg"
import image10 from "../../image/image10.jpg"
import image11 from "../../image/image11.jpg"
import image12 from "../../image/image12.jpg"
import image13 from "../../image/image13.jpg"
import image14 from "../../image/image14.jpg"
import image15 from "../../image/image15.jpg"
import image16 from "../../image/image16.jpg"
import image17 from "../../image/image17.jpg"
import image18 from "../../image/image18.jpg"
import image19 from "../../image/image19.jpg"

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
]

const GridImages = [
  {
    src: image2,
    width: 320,
    height: 212,
    alt: "gallery"
  },
  {
    src: image4,
    width: 320,
    height: 212,
    alt: "gallery"
  },
  {
    src: image5,
    width: 320,
    height: 212,
    alt: "gallery"
  },
  {
    src: image3,
    width: 320,
    height: 212,
    alt: "gallery"
  },
  {
    src: image2,
    width: 320,
    height: 212,
    alt: "gallery"
  },
  {
    src: image4,
    width: 320,
    height: 212,
    alt: "gallery"
  },
  {
    src: image5,
    width: 320,
    height: 212,
    alt: "gallery"
  },
  {
    src: image3,
    width: 320,
    height: 212,
    alt: "gallery"
  },

]

export const Gallery = ({ title }: { title: string}) => {
  const { openModal, closeModal } = useModal()

  return (
    <LazyDiv className="card gallery" style={{margin: "auto", width: "100%"}}>
      <h2 className="english">{title}</h2>
      <div style={{
        maxWidth: "60%",
        margin: "auto",
      }}>
        <ReactGridGallery images={GridImages} enableImageSelection={false} />

      </div>
      <div className="break" />

      <Button
        onClick={() =>
          openModal({
            className: "all-photo-modal",
            closeOnClickBackground: true,
            header: <div className="title">Gallery Photos</div>,
            content: (
              <>
                <div className="photo-list">
                  {IMAGES.map((image, idx) => (
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
