import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { GuestBook } from "./component/guestbook"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import ReactAudioPlayer from 'react-audio-player';


function App() {
  return (
    <div className="background">
      <BGEffect />
      <div
        style={{
          zIndex: 9999,
          position: "fixed",
          bottom: 0,
        }}
      >
        <ReactAudioPlayer
          src="/wedding/music/sound.mp3"
          autoPlay
          controls
          loop
        />
      </div>
      
      <div className="card-view">
        <LazyDiv className="card-group">
          <Cover />
          <Invitation />
        </LazyDiv>

        <LazyDiv className="card-group">
          <Calendar />
          <Gallery />
        </LazyDiv>

        <LazyDiv className="card-group">
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          <Information />
          <GuestBook />
        </LazyDiv>

        <ShareButton />
      </div>
    </div>
  )
}

export default App
