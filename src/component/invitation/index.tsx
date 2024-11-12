import { Fragment } from "react/jsx-runtime"
import {
  BRIDE,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../../component/store"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { ReactComponent as PhoneIcon } from "../../image/phone-flip-icon.svg"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>

      <div className="break" />
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

      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM}
      </div>
      <div className="name">
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE}
      </div>

      <div className="break" />

      <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">Thông tin liên hệ</div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {GROOM_INFO.map(({ relation, name, phone }) => (
                    <Fragment key={relation}>
                      <div className="relation">{relation}</div>
                      <div>{name}</div>
                      <div>
                        <PhoneIcon
                          className="flip icon"
                          onClick={() => {
                            window.open(`tel:${phone}`, "_self")
                          }}
                        />
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div className="contact-info">
                  {BRIDE_INFO.map(({ relation, name, phone }) => (
                    <Fragment key={relation}>
                      <div className="relation">{relation}</div>
                      <div>{name}</div>
                      <div>
                        <PhoneIcon
                          className="flip icon"
                          onClick={() => {
                            window.open(`tel:${phone}`, "_self")
                          }}
                        />
                      </div>
                    </Fragment>
                  ))}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                Đóng
              </Button>
            ),
          })
        }}
      >
        Thông tin liên hệ
      </Button>
    </LazyDiv>
  )
}
