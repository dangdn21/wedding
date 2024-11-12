import { Map } from "./map"
import { LazyDiv } from "../lazyDiv"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <div className="addr">
          Nhà Trai
          <div className="detail">
            Định Thành, Hoà Định Đông Phú Hoà Phú Yên
          </div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="addr">
          Nhà Gái
          <div className="detail">
            Định Thành, Hoà Định Đông Phú Hoà Phú Yên
          </div>
        </div>
        <Map />
      </LazyDiv>
    </>
  )
}
