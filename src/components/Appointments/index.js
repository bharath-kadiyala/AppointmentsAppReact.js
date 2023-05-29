import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentList: [],
  }

  favoriteOrNot = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isFavorite: !eachItem.isFavorite}
        }
        return eachItem
      }),
    }))
  }

  onFilter = () => {
    const {appointmentList} = this.state
    const filteredList = appointmentList.map(
      eachItemList => eachItemList.isFavorite !== false,
    )
    return filteredList
  }

  appointmentDetails = () => {
    const {appointmentList} = this.state

    return appointmentList.map(eachList => (
      <AppointmentItem
        key={eachList.id}
        appointmentList={eachList}
        favoriteOrNot={this.favoriteOrNot}
      />
    ))
  }

  onAddAppointment = event => {
    event.preventDefault()

    const {title, date} = this.state
    const newAppointment = {
      id: uuidV4(),
      title,
      date,
      isFavorite: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  getEnteredText = event => {
    this.setState({title: event.target.value})
  }

  getChangedDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {title, date} = this.state

    return (
      <div className="bg-main-con">
        <div className="card-con">
          <h1 className="title">Add Appointment</h1>
          <div className="text-con">
            <form className="form-con" onSubmit={this.onAddAppointment}>
              <div className="each-con">
                <label htmlFor="textId" className="input-text-sty">
                  TITLE
                </label>
                <input
                  id="textId"
                  type="text"
                  value={title}
                  placeholder="Title"
                  className="input-sty"
                  onChange={this.getEnteredText}
                />
              </div>
              <div className="each-con">
                <label htmlFor="dateId" className="input-text-sty">
                  DATE
                </label>
                <input
                  id="dateId"
                  type="date"
                  value={date}
                  className="date-sty"
                  onChange={this.getChangedDate}
                />
              </div>
              <button type="submit" className="btn-sty">
                Add
              </button>
            </form>
            <img
              className="img-sty"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
            />
          </div>
          <hr className="hr-sty" />
          <div className="appointment-con">
            <h1 className="appointment-sty">Appointments</h1>
            <button
              type="button"
              className="starred-sty"
              onClick={this.onFilter}
            >
              Starred
            </button>
          </div>
          <ul className="unOrder-List-con">{this.appointmentDetails()}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments
