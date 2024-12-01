import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { GridGallery } from "./component/grid-gallery"
import { FormSubmit } from "./component/form-submit"
import { GuestBook } from "./component/guestbook"
import { LazyDiv } from "./component/lazyDiv"
import { useEffect, useState } from "react"
import { AudioPlayer } from "./component/audio-player"

type Post = {
  id: number
  timestamp: string
  name: string
  content: string
}

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQq9Rf9P4kSKYVb7aBhOPQRmm2aytVjSp6jvxaxiqImAnougB4L0W2S4brrw408Y4PQVd71qRoIxRab/pubhtml"


function App() {

  const [posts, setPosts] = useState<Post[]>([])

  const loadPosts = async () => {
    try {
      try {
        const res = await fetch(url);
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const table = doc.querySelector("table");
        const rows = table?.querySelectorAll("tr");
        const data: Post[] = [];
        rows?.forEach((row, index) => {
          if (index === 0) return;
          const cells = row.querySelectorAll("td");
          const post: Post = {
            id: index,
            name: cells[0].textContent?.trim() || "",
            content: cells[1].textContent?.trim() || "",
            timestamp: cells[2].textContent?.trim() || "",
          };
          data.push(post);
        });
        // remove first element
        data.shift();
        const newData = data.filter((data: any) => data?.name !== "" && data?.content !== "");
        newData.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
        setPosts(newData);
      } catch (err) {
        return;
      }
    } catch { }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const handleUpdatePosts = (newPosts: Post) => {
    const newList = [newPosts, ...posts]
    newList.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
    setPosts(newList)
  }

  return (
    <div className="background">
      <BGEffect />
      <AudioPlayer />

      <div className="card-view">
        <LazyDiv className="card-group">
          <Cover />
          <Calendar />
        </LazyDiv>

        <LazyDiv className="card-group">
          <Invitation />
          <GridGallery title="Mang Den Stories" />
        </LazyDiv>
        <LazyDiv className="card-group">
          <Gallery title="Gallery" />
        </LazyDiv>

        <LazyDiv className="card-group">
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          <GuestBook posts={posts} />
          <FormSubmit onUpdatePosts={handleUpdatePosts} />
        </LazyDiv>
      </div>
    </div>
  )
}

export default App
