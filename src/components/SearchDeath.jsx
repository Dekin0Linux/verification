import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../assets/Search.css";

function SearchDeath() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  const submitCode = (e) => {
    e.preventDefault();

    fetch("/birth.json")
      .then((res) => res.json())
      .then((data) => {
        let user = data.find((user) => user.entry_no === code);
        if (user) {
          navigate(`/verify/${code}`);
        } else {
          alert("Invalid Code!");
        }
      });
  };


 



  return (
    <>
      <div className="main-search">
        <div className="death-div position-relative">
          <div className="overlay w-100 h-100 bg-black bg-opacity-50"></div>
          <div className="position-absolute top-50 start-50 translate-middle  text-white d-md-flex text-center d-block align-items-center gap-md-2">
            <div>
              <img src={logo} alt="" className="img-fluid" />
            </div>
            <h2 className="fw-bold display-5">
              Ghana Births and Deaths Registry
            </h2>
          </div>
        </div>

        <div className="input-div py-md-3 py-2 d-flex justify-content-center align-items-center">
          <div className="switchCard px-2 ">
            <div
              className="row py-4 rounded g-0 g-2 p-2"
              style={{ background: "#FAF8F8" }}
            >
              <div className="col-6">
                <div className="bg-white p-md-4 p-3 btns rounded shadow text-center btn-1" onClick={()=>navigate('/birth')}>
                  Check for Birth
                </div>
              </div>

              <div className="col-6">
                <div className="bg-white p-md-4 p-3 btns btn-2 rounded text-center border">
                  Check for Death
                </div>
              </div>
            </div>

            {/* form container */}
            <div className="p-4 m-0 p-0 mt-3 rounded" style={{background:"#2E2C26",color:"white"}}>
              <div>
                <h5 className="mb-0">Birth Certificate Verification System</h5>
                <small className="fs-5 text-white p-0 m-0">
                  Death Certificate Verification System
                  details below
                </small>

                <div className="py-md-3 py-2">
                  <form onSubmit={submitCode}>
                    <div className="row m-0 p-0 g-3">
                      <div className="col-md-8 m-0 ps-md-0 ">
                        <div className="p-0">
                          <input
                            type="text"
                            placeholder="Enter Number"
                            onChange={(e) => setCode(e.target.value)}
                            className="inputs rounded"
                          />
                        </div>
                      </div>

                      <div className="col-md-4 m-0 p-0">
                        <button
                          type="submit"
                          className="w-100 m-0 p-0 p-2 verify-btn text-white fw-bold rounded"
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* SCAN QR CODE */}
              <div className="m-0 p-0 py-1">
                <p className=" text-white">
                  Do not have a certificate number? <br /> Scan your QR code or
                  scan with finger print to get access
                </p>
                <button
                  className="w-100 text-white rounded fw-bold lead"
                  style={{ background: "#427561" }}
                >
                  Scan QR Code
                </button>
              </div>

              <div className="m-0 p-0 py-1">
                <p className="text-center">Or</p>
                <button
                  className="w-100 text-white rounded fw-bold lead m-0"
                  style={{ background: "#427561" }}
                >
                  Scan Finger Print
                </button>
                <p className=" text-muted">
                  Having issues? Contact our customer service for more details.
                </p>
              </div>

              <p className="text-center text-muted"> &amp;copyrights 2023 - GHANA.GOV</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDeath;
