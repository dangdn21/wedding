import { LazyDiv } from "../lazyDiv"
import coverImage from "../../image/cover.jpg"
import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: coverImage,
    width: 120,
    height: 120,
    alt: "Mang Den Stories"
  },
  {
    src: coverImage,
    width: 120,
    height: 120,
    alt: "Mang Den Stories"
  },
  {
    src: coverImage,
    width: 120,
    height: 120,
    alt: "Mang Den Stories"
  },
];

export const Invitation = () => {
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>

      <div className="content">Vượt qua bao thử thách,</div>
      <div className="content">Vượt bao khó khăn là mỗi bước ta gần nhau,</div>
      <div className="content">Giận hờn ta lại tìm cách tha thứ,</div>
      <div className="content">Những giây phút không dễ dàng lại khiến tình yêu vững vàng hơn,</div>
      <div className="break" />
      <div className="content">Giây phút này chúng ta đứng bên nhau,</div>
      <div className="content">Sẵn sàng cho một tương lại chung.</div>
      <div className="content">Một khởi đầu mới, trọn vẹn, hạnh phúc</div>
      <div className="break" />
      <div className="content">Chúc tình yêu chúng ta bền vững, hạnh phúc trọn đời.</div>

      <div className="break" />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Gallery images={images} />
      </div>
     
    </LazyDiv>
  )
}
