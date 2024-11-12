import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../store"

export const Information = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card information">
      <h2 className="english">Thông tin</h2>
      <div className="info-card">
        <div className="label">Tư gia Nam</div>
        <div className="content">
          10 giờ 30 phút
          <br />
          장소: 지하 1층 연회장
        </div>
      </div>

      <div className="info-card">
        <div className="label">Thể hiện tấm lòng của bạn</div>
        <div className="content">
          Rất khó để tham dự nên tôi không thể trực tiếp chúc mừng bạn.
          <br />
          Tôi đã bao gồm số tài khoản vì lợi ích của bạn.
          <br />
          Chúng tôi yêu cầu sự hiểu biết của bạn.
        </div>

        <div className="break" />

        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              header: <div className="title">Số tài khoản của chú rể</div>,
              content: (
                <>
                  {GROOM_INFO.filter(({ account }) => !!account).map(
                    ({ relation, name }) => (
                      <div className="account-info" key={relation}>
                        <div>
                          <div className="name">
                            <span className="relation">{relation}</span> {name}
                          </div>
                        </div>
                      </div>
                    ),
                  )}
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
          Xem số tài khoản chú rể
        </Button>
        <div className="break" />
        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              header: <div className="title">Số tài khoản của cô dâu</div>,
              content: (
                <>
                  {BRIDE_INFO.filter(({ account }) => !!account).map(
                    ({ relation, name, account }) => (
                      <div className="account-info" key={relation}>
                        <div>
                          <div className="name">
                            <span className="relation">{relation}</span> {name}
                          </div>
                          <div>{account}</div>
                        </div>
                        <Button
                          className="copy-button"
                          onClick={async () => {
                            if (account) {
                              try {
                                navigator.clipboard.writeText(account)
                                alert(account + "\n복사되었습니다.")
                              } catch {
                                alert("복사에 실패했습니다.")
                              }
                            }
                          }}
                        >
                          Sao chép
                        </Button>
                      </div>
                    ),
                  )}
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
          Xem số tài khoản của cô dâu
        </Button>
      </div>
    </LazyDiv>
  )
}
