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
        </AlertMessage> :
        code === 500 ? <AlertMessage>
          <MdError size={22} color='red' />
          <p>Something went wrong!</p>
        </AlertMessage> :
          code === 409 ? <AlertMessage>
            <MdWarning size={22} color='yellow' />
            <p>User already exist!</p>
          </AlertMessage> :
            code === 'blank' ? <AlertMessage>
              <MdWarning size={22} color='yellow' />
              <p>All fields are required!</p>
            </AlertMessage> :
              code === 'short' ?
                <AlertMessage>
                  <MdWarning size={22} color='yellow' />
                  <p>Username atleast 4 characters!</p>
                </AlertMessage> :
                code === 'emailinvalid' ?
                  <AlertMessage>
                    <MdWarning size={22} color='yellow' />
                    <p>Please enter valid email id!</p>
                  </AlertMessage> :
                  code === 404 ?
                    <AlertMessage>
                      <MdWarning size={22} color='yellow' />
                      <p>User does not exist!</p>
                    </AlertMessage> :
                    code === 400 &&
                    <AlertMessage>
                      <MdError size={22} color='red' />
                      <p>Invalid credentials!</p>
                    </AlertMessage>
      }
    </AlertMain>
  )
}

export default Alerts
