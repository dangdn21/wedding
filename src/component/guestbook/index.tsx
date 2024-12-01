import { dayjs } from "../../const"
import { LazyDiv } from "../lazyDiv"

interface Post {
  id: number
  timestamp: string
  name: string
  content: string
}


export const GuestBook = ({ posts }: { posts: Post[]}) => {

  return (
    <LazyDiv className="card guestbook">
      <h2 className="english">Guest Book</h2>

      <div className="break" />
      <div style={{
        maxHeight: "400px",
        overflow: "auto",
      }}>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="heading">
            </div>
            <div className="body">
              <div className="title">
                <div className="name">{post.name}</div>
                <div className="date" style={{
                  textTransform: "capitalize",
                }}>
                  {dayjs(new Date(Number(post.timestamp))).format("dddd, HH:mm DD/MM/YYYY")}
                </div>
              </div>
              <div className="content">{post.content}</div>
            </div>
          </div>
        ))}
      </div>
     

      <div className="break" />
    </LazyDiv>
  )
}