import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import accra from '../assets/Accra_Central_Accra.png'
import "../assets/Search.css"

function Search() {
  const [code, setCode] = useState('')
  const navigate = useNavigate()

  const submitCode = (e) => {

    e.preventDefault()

    fetch('/birth.json')
      .then(res => res.json())
      .then(data => {
        let user = data.find(user => user.entry_no === code)
        if (user) {
          navigate(`/verify/${code}`)
        } else {
          alert('Invalid Code!')
        }

      })

  }



  return (
    <>
      <div className="main-search">
        <div className="image-div"></div>

        <div className="input-div">
          <div>
            <div className="row    p-1 ">
              <div className="col-6  checkForBirth">
                <p className="check-text">Check for Birth</p>
              </div>
              <div className="col-6  checkForDeath">
                <p className="check-text">Check for Birth</p>
              </div>
            </div>
            <div className="form-input">
              <div className="form-text">
                <p>
                  <span className="fw-bold">Birth Certificate Verification System</span> <br />
                  Get access to your certificates by <br />
                  filling in the details below
                </p>
              </div>
              <from>
                <div className="row ">
                  <div className="col-6">
                    <input type="text" placeholder='Enter Number' className="input-verify"/>
                  </div>
                  <div className="col-6">
                  <button type="button" className="button-verify">Verify</button>
                  </div>
                </div>
              </from>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Search