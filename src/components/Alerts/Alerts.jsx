import React from 'react'
import { AlertMain, AlertMessage } from './alerts.styles'
import { MdError, MdDone, MdWarning } from "react-icons/md";

function Alerts({ code }) {
  return (
    <AlertMain>
      {code === 200 ?
        <AlertMessage>
          <MdDone size={22} color='green' />
          <p>User created successfully!</p>
        </AlertMessage> : code === 500 ? <AlertMessage>
          <MdError size={22} color='red' />
          <p>Something went wrong!</p>
        </AlertMessage> : code === 409 && <AlertMessage>
          <MdWarning size={22} color='yellow' />
          <p>User already exist!</p>
        </AlertMessage>}
    </AlertMain>
  )
}

export default Alerts
