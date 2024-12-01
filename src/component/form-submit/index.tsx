import { useState, useEffect } from "react"

import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"

const scriptUrl = "https://script.google.com/macros/s/AKfycbwBLFd78eedxj9m3UyMd4RUaudaP6T7m1jVrz58uhJcCGDwehzo0uz-daMOXgEjJUfXAw/exec"


export const FormSubmit = ({ onUpdatePosts }: any) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    datetime: new Date().getTime()
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.content) {
      alert("Vu lòng điền đầy đủ thông tin");
      return;
    }

    setLoading(true);
    const newData = {
      id: 0,
      name: formData.name,
      content: formData.content,
      timestamp: new Date().getTime().toString()
    }
    onUpdatePosts(newData)
    const newForm = new FormData();
    newForm.append('name', newData.name);
    newForm.append('content', newData.content);
    newForm.append('datetime', newData.timestamp);
    fetch(scriptUrl, { method: 'POST', body: newForm })
      .then(res => {
        setLoading(false);
        setFormData({
          name: '',
          content: '',
          datetime: new Date().getTime()
        })
      })
      .catch(err => {
        setLoading(false);
      })
  };

  return (
    <LazyDiv className="card information">
      <div className="info-card" style={{
        width: "100%",
        margin: "40px auto"
      }}>
        <div className="label">Gửi lời chúc</div>
        <form onSubmit={handleSubmit}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            marginBottom: "24px"
          }}>
            <label htmlFor="name">Họ & Tên:</label>
            <input
              style={{
                width: "100%",
                height: 44,
                fontSize: 16,
                borderRadius: 8,
                border: "1px solid #c28080",
                padding: "8px"
              }}
              disabled={loading}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px"
          }}>
            <label htmlFor="content">Nội dung:</label>
            <textarea
              style={{
                width: "100%",
                height: 200,
                fontSize: 16,
                borderRadius: 8,
                border: "1px solid #c28080",
                padding: "8px"
              }}
              disabled={loading}
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "12px"
          }}>
            <Button style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }} type="submit" disabled={loading}>
              {loading && (
                <div style={{
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
                    <circle fill="none" stroke="#c28080" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48" />
                    <line fill="none" stroke-linecap="round" stroke="#c28080" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                      <animateTransform
                        attributeName="transform"
                        dur="2s"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite" />
                    </line>
                    <line fill="none" stroke-linecap="round" stroke="#c28080" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                      <animateTransform
                        attributeName="transform"
                        dur="15s"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite" />
                    </line>
                  </svg>
                </div>
              )}
             
              Gửi lời chúc <span role="img" aria-label="heart">❤️</span>
            </Button>
          </div>
        </form>
      </div>

    </LazyDiv>
  )
}
