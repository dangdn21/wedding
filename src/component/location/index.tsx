import { Map } from "./map"
import { LazyDiv } from "../lazyDiv"
import { Button } from "../button"


export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <div className="addr">
          Nhà Trai
          <div className="detail">
            thôn Định Thành, xã Hoà Định Đông,
          </div>
          <div className="detail">
            huyện Phú Hoà, Phú Yên
          </div>
        </div>
        <Map />
        <div className="break" />
        <Button>
          Chỉ đường
        </Button>
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="addr">
          Nhà Gái
          <div className="detail">
            Khu phố Định Thọ 1, TT Phú Hoà,
          </div>
          <div className="detail">
            huyện Phú Hoà, Phú Yên
          </div>
        </div>
        <Map />
        <div className="break" />
        <Button>
          Chỉ đường
        </Button>
      </LazyDiv>
    </>
  )
}
