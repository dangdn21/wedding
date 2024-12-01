import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../store"


export const FormSubmit = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card information">
      <div className="info-card">
        <div className="label">Gửi lời chúc</div>
        <div className="content">
          <textarea placeholder="Nhập thông tin" />
        </div>
        <div className="break" />
        <button className="submit">Gửi</button>
      </div>

    </LazyDiv>
  )
}
