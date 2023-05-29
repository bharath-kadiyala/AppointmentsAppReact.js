import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentList, favoriteOrNot} = props
  const {title, date, isFavorite, id} = appointmentList

  const isFavApp = () => {
    favoriteOrNot(id)
  }

  const unFavoriteImg =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const favoriteImg =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const getImgUrl = isFavorite ? favoriteImg : unFavoriteImg

  //   console.log(format(new Date(2021, 19, 07), 'dd MMMM yyyy, EEEE'))

  const convertedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  return (
    <li className="eachList-item">
      <div className="text-con">
        <p className="appointment-title">{title}</p>
        <button
          type="button"
          onClick={isFavApp}
          className="star-btn"
          data-testid="star"
        >
          <img src={getImgUrl} alt="star" className="star-sty" />
        </button>
      </div>
      <p className="appointment-date-sty">Date: {convertedDate}</p>
    </li>
  )
}

export default AppointmentItem
