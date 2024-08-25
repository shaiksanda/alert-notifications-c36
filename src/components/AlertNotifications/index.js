// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {RiErrorWarningFill} from 'react-icons/ri'
import {IoMdWarning} from 'react-icons/io'
import {MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 style={{margin: '4px', color: 'dodgerblue', textAlign: 'center'}}>
          Alert Notifications
        </h1>
        <Notification>
          <div className="notification-card background-success notification-background-success">
            <AiFillCheckCircle style={{color: 'dodgerblue'}} />
            <div>
              <h1 className="heading" style={{color: 'dodgerblue'}}>
                Success
              </h1>
              <p className="content">
                You can access all the files in the folder
              </p>
            </div>
            <GrFormClose style={{backgroundColor: 'dodgerblue'}} />
          </div>
        </Notification>
        <Notification>
          <div className="notification-card background-failure notification-background-failure">
            <RiErrorWarningFill style={{color: '#ff0b37'}} />
            <div>
              <h1 className="heading" style={{color: '#ff0b37'}}>
                Error
              </h1>
              <p className="content">
                Sorry you are not authorized to have access
                <br />
                to delete the file
                <br />
              </p>
            </div>
            <GrFormClose style={{backgroundColor: '#ff0b37'}} />
          </div>
        </Notification>
        <Notification>
          <div className="notification-card background-warning notification-background-warning">
            <IoMdWarning style={{color: 'yellow'}} />
            <div>
              <h1 className="heading" style={{color: 'yellow'}}>
                Warning
              </h1>
              <p className="content">
                Viewers of this file can see comments and
                <br /> suggestions
              </p>
            </div>
            <GrFormClose style={{backgroundColor: 'yellow'}} />
          </div>
        </Notification>
        <Notification>
          <div className="notification-card background-info notification-background-info">
            <MdInfo style={{color: 'blue'}} />
            <div>
              <h1 className="heading" style={{color: 'blue'}}>
                Info
              </h1>
              <p className="content">
                Anyone on the internet can view these files
              </p>
            </div>
            <GrFormClose style={{backgroundColor: 'blue'}} />
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
