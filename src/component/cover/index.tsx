import { BRIDE, GROOM, WEDDING_DATE } from "../../const"
import coverImage from "../../image/background.jpg"
import { LazyDiv } from "../lazyDiv"

export const Cover = () => {

  return (
    <LazyDiv className="card cover">
      <div className="subtitle">Save the date for the wedding of</div>
      <div className="names">
      </div>
      <div className="image-wrapper">
        <img src={coverImage} alt="sample" />
      </div>
      {/* <div style={{
        zIndex: 9999
      }}>

        <a className="btn btn-outline-light btn-sm shadow rounded-pill px-3 my-2" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MzdsNmtjNnU0MG5mcTluOWQ0OGcxazJlMmUgZG9hbm5nb2NkYW5nMTk5NkBt&tmsrc=doanngocdang1996%40gmail.com" rel="noreferrer">
          <i className="fa-solid fa-calendar-check me-2"></i>Save The Date
        </a>
      </div> */}
    </LazyDiv>
  )
}
