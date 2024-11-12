import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/vi"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("vi")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2024-12-06 10:00", "Asia/Ho_Chi_Minh")
export const WEDDING_DATE_BRIDGE = dayjs.tz("2024-12-06 10:30", "Asia/Ho_Chi_Minh")
export const WEDDING_DATE_GROOM = dayjs.tz("2024-12-06 16:00", "Asia/Ho_Chi_Minh")
export const HOLIDAYS = [15]

export const BRIDE = "NGÂN GIANG"
export const BRIDE_TITLE = "THỨ NỮ"
export const BRIDE_FATHER = "NGÔ ĐẮC QUANH"
export const BRIDE_MOTHER = "TRẦN THỊ THU HẰNG"
export const BRIDE_INFO = [
  {
    relation: "Cô dâu",
    name: BRIDE,
    phone: "0326515415",
    account: "국민은행 819210137793",
  },
]

export const GROOM = "NGỌC ĐĂNG"
export const GROOM_TITLE = "ÚT NAM"
export const GROOM_FATHER = "ĐOÀN ĐỊNH"
export const GROOM_MOTHER = "NGUYỄN THỊ TRÀ THUỲ"
export const GROOM_INFO = [
  {
    relation: "Chú rể",
    name: GROOM,
    phone: "0969911253",
    account: "국민은행 819210137793",
  },
]
