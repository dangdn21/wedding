import { Map } from "./map"
import { LazyDiv } from "../lazyDiv"
import { Button } from "../button"
import ImageNhaTrai from "../../image/address/1.jpg"
import ImageNhaGai from "../../image/address/2.jpg"


export const Location = () => {

  const handleOpenMap = ({ lat, lng }: any) => () => {
    // ask allow get current location

    try {

      navigator.permissions
        .query({
          name: "geolocation"
        })
        .then(permission => {
          if (permission.state === "granted") {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
              const { latitude, longitude } = coords
              window.open(
                `https://www.google.com/maps/dir/${latitude},${longitude}/${lat},${lng}`
              )
            })
          }

          if (permission.state === "prompt") {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
              const { latitude, longitude } = coords
              window.open(
                `https://www.google.com/maps/dir/${latitude},${longitude}/${lat},${lng}`
              )
            })
          }

          if (permission.state === "denied") {
            window.open(
              `https://www.google.com/maps/dir/${lat},${lng}`
            )
          }

          permission.onchange = () => {
            if (permission.state === "granted") {
              navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords
                window.open(
                  `https://www.google.com/maps/dir/${latitude},${longitude}/${lat},${lng}`
                )
              })
            }

            if (permission.state === "prompt") {
              navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords
                window.open(
                  `https://www.google.com/maps/dir/${latitude},${longitude}/${lat},${lng}`
                )
              })
            }

            if (permission.state === "denied") {
              window.open(
                `https://www.google.com/maps/dir/${lat},${lng}`
              )
            }
          }
        })
    } catch (error) {
      console.error(error)
    }

  }



  return (
    <>
      <LazyDiv className="card location">
        <div className="addr">
          <span style={{ fontWeight: 700, textTransform: "uppercase", fontSize: 24 }}>Nhà Trai</span>
          <div>
            Khai Tiệc: 10:30 AM
          </div>
          <div className="detail" style={{ fontSize: "14px "}}>
            Thôn Định Thành, xã Hoà Định Đông,  huyện Phú Hoà, Phú Yên
          </div>
        </div>
        <img src={ImageNhaTrai} alt="Nhà Trai" />

        <div className="break" />
        <Button type="button" style={{ cursor: "pointer" }} onClick={handleOpenMap({
          lat: 13.035982061058538,
          lng: 109.21992555193266
        })}>
          Chỉ đường
        </Button>
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="addr">
          <span style={{ fontWeight: 700, textTransform: "uppercase", fontSize: 24 }}>Nhà Gái</span>
          <div>
            Khai Tiệc: 16:00 AM
          </div>
          <div className="detail" style={{ fontSize: "14px " }}>
            Khu phố Định Thọ 1, TT Phú Hoà, huyện Phú Hoà, Phú Yên
          </div>
        </div>
        <img src={ImageNhaGai} alt="Nhà Gái" />
        <div className="break" />
        <Button type="button" style={{ cursor: "pointer" }} onClick={handleOpenMap({
          lat: 13.020028975132343,
          lng: 109.2133490012639
        })}>
          Chỉ đường
        </Button>
      </LazyDiv>
    </>
  )
}
