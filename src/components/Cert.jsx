import React from 'react'
import '../assets/Registery.css'
import ghana from '../assets/ghana.png'

function Cert({selectedData}) {
  return (
    <div className="">
        <div className="row">
          <div className="col-md-2 d-none d-md-block"></div>

          {/* certificate content starts here */}
          <div className="col-12 col-md-8" style={{ backgroundColor: "#e2fff4" }}>
            <div className="row py-5  title-item align-items-center">

              <div className="idNumbar col-3 ">
                <p className="data-text">
                  A<span className="data-code">{selectedData.code_A}</span>
                </p>
              </div>

              <div className="ghana-image col-6 text-center align-item-center">
                <img src={ghana} alt="image-ghana" className="coatofarms img-fluid" width={'250px'}/>
              </div>

              <div className="Numbar col-3">
                <p className="num-text">
                  No:<span className="num-code">{selectedData.num_code}</span>
                </p>
              </div>

            </div>
            <div className="title col-12">
              <h5>CERTIFIED COPY OF ENTRY IN REGISTER OF BIRTHS</h5>
            </div>

            <div className="row top-row">
              <div className="col-md-6 col-4  border entry-num fw-bold p-2">
                Entry No: {selectedData.entry_no}
              </div>
              <div className="col-md-6  col-8 border entry-num fw-bold p-2">
                Registry:{selectedData.registry}
              </div>
            </div>
            
            <div className="row">
              <div className="col-3 col-xs-3 border  fw-bold   text-center align-item-center p-4">
                CHILD's NAME <br />{" "}
              </div>
              <div className="col-6 col-xs-4 border Name-text p-4">
                {selectedData.child_name}
              </div>
              <div className="col-3 col-xs-3 border">
                <div className="fw-bold ">Sex</div>
                <hr />
                <div className="Gen-text">{selectedData.sex}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 code-xs-3 border text-center align-item-center fw-bold ">
                FATHER
                <img src={''} className="finger" />
              </div>
              <div className="col-2  col-xs-3 father-text">
                <div className=" p-2 fw-bold  "> Name:</div>
                <div className=" p-2 fw-bold ">Occupation</div>
                <div className="p-2 fw-bold ">Nationality</div>
                <div className="p-2 fw-bold ">Religion:</div>
                <div className="p-2 fw-bold ">Maiden Name</div>
                <div className="p-2 fw-bold ">Nationality</div>
              </div>
              <div className="col-4 border father-name">
                <div className="p-2">{selectedData.father_name}</div>
                <div className="p-2">{selectedData.father_occupation}</div>
                <div className="p-2">{selectedData.father_religion}</div>
                <div className="p-2">{selectedData.father_Nationality}</div>
                <div className="p-2">{selectedData.maiden_name}</div>
                <div className="p-2">{selectedData.maiden_Nationality}</div>
              </div>
              <div className="col-3   text-center align-item-center py-3">
                <img src={''} className="qr-code" />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-3 col-6 border fw-semibold p-2 text-center">When Born</div>
              <div className="col-md-9 col-6 border Data-born">
                {selectedData.When_Born}
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-6 border fw-semibold ">
                Where Born
                <br />
                (write address in full)
              </div>
              <div className="col-md-9 col-6 border Data-born">
                {selectedData.where_Born}
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4 border fw-semibold ">
                INFORMANT
                <br />
                (Name in full Relationship to the child, if any)
              </div>
              <div className="col-md-9 col-8 border Data-born">
                {selectedData.informant}
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4 border fw-bold ">Date of Registration</div>
              <div className="col-md-9 col-8 border Data-born">
                {selectedData.data_of_registrtion}
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4 border fw-bold ">
                Signature of Registration
              </div>
              <div className="col-md-9 col-8 border Data-born">
                {selectedData.signature_of_registration}
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4 border fw-bold ">Margin</div>
              <div className="col-md-9 col-8 border Data-born">
                {selectedData.margin}
              </div>
            </div>
            <div className="my-4  registrar-area ">
              <small>
                I <span className="down-data">JOHN YAO AGBEKO</span> Registrar
                of Births and Deaths for Ghana do hereby certify that the
                foregoing is a true copy of the entry No
                <span className="down-data">3501</span> in the Registe of Births
                fo <span className="down-data">LIBRATION ROAD</span> in the
                <span className="down-data">
                  SEKONDI TAKORADI METOPOLITAN ASSEMBLY, WESTERN
                </span>{" "}
              </small>
              <small>
                Registration District in Ghana, and Register is now legally in
                my custody. <br />
                Given under my hand and seal in Accra in Ghana this{" "}
                <span className="down-data">28TH</span> day of{" "}
                <span className="down-data">OCTOBER 2015</span>
              </small>
            </div>

            {/* Certifiate content ends here */}
          </div>

          <div className="col-2 d-none d-md-block"></div>
        </div>
      </div>
  )
}

export default Cert