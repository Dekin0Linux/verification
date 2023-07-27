import React from "react";
import "../assets/Registery.css";
import ghana from "../assets/ghana.png";
import finger from "../assets/fingeer.png";






function Cert({ selectedData }) {

 
 
  return (
    <div className="">
      <div className="row">
        <div className="col-md-2 d-none d-md-block"></div>

        {/* certificate content starts here */}
        <div
          className="col-12 col-md-8 border"
          style={{ backgroundColor: "#e2fff4" }}
        >
          <div className="row py-5 title-item align-items-center">
            <div className="idNumbar col-3 ">
              <p className="data-text text-center">
                A<span className="data-code">{selectedData.code_A}</span>
              </p>
            </div>

            <div className="ghana-image col-6 text-center align-item-center">
              <img
                src={ghana}
                alt="image-ghana"
                className="img-fluid w-50"
                
              />
            </div>

            <div className="Numbar col-3 ">
              <p className="num-text text-center ">
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
              Registry:  {selectedData.registry}
            </div>
          </div>

          <div className="row">
            <div className="col-3 col-xs-3 border  fw-bold   text-center align-item-center p-4">
              CHILD's NAME <br />{" "}
            </div>
            <div className="col-6 col-xs-4 border Name-text p-2">
              {selectedData.child_name}
            </div>
            <div className="col-3 col-xs-3 m-0 p-0 border">
              <div className="fw-bold border-bottom p-2">Sex</div>
              {/* <hr /> */}
              <div className="Gen-text p-2">{selectedData.sex}</div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3 col-6 order-1 order-md-1 code-xs-3 text-center fw-bold m-0">
              <p className="pt-md-3 my-md-0">FATHER</p>
              <img src={finger} className="finger img-fluid w-100" />
            </div>

            <div className="col-md-6 col-12 order-3 order-md-2 ">
              <div className="row ">
                <div className="col-md-4 col-4 fw-bold border p-2">Name:</div>
                <div className="col-md-8 col-8 border p-2">
                  {selectedData.father_name}
                </div>

                <div className="col-md-4 col-4 fw-bold border p-2">Occupation</div>
                <div className="col-md-8 col-8 border p-2">
                  {selectedData.father_occupation}
                </div>

                <div className="col-md-4 col-4 fw-bold border p-2">Nationality</div>
                <div className="col-md-8 col-8 border p-2">
                  {selectedData.father_Nationality}
                </div>

                <div className="col-md-4 col-4 fw-bold border p-2">Religion:</div>
                <div className="col-md-8 col-8 border p-2">
                  {selectedData.father_religion}
                </div>

                <div className="col-md-4 col-4 fw-bold border p-2">Maiden Name</div>
                <div className="col-md-8 col-8 border p-2" w-4>
                 <p> {selectedData.maiden_name}</p>
                </div>

                <div className="col-md-4 col-4 fw-bold border p-2">Nationality</div>
                <div className="col-md-8 col-8 border p-2">
                  {selectedData.maiden_Nationality}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 order-2 order-md-3 text-center align-item-center border-start p-2 m-0 p-0">
              <img src={selectedData.qr_code} className="qr-code" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-4 border fw-semibold p-2">
              When Born
            </div>
            <div className="col-md-9 col-8 border Data-born p-2">
              {selectedData.When_Born}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3 col-4 border fw-semibold p-2">
              Where Born
              <br />
              (write address in full)
            </div>
            <div className="col-md-9 col-8 border Data-born p-2">
              {selectedData.where_Born}
            </div>
          </div>

          <div className="row ">
            <div className="col-md-3 col-4 border fw-bold p-2">
              INFORMANT
              <br />
              (Name in full Relationship to the child, if any)
            </div>
            <div className="col-md-9 col-8 border Data-born p-2">
              {selectedData.informant}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3 col-4 border fw-bold p-2">
              Date of Registration
            </div>
            <div className="col-md-9 col-8 border Data-born p-2">
              {selectedData.data_of_registrtion}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-3 col-4 border fw-bold p-2">
              Signature of Registration
            </div>
            <div className="col-md-9 col-8 border Data-born p-2">
              {selectedData.signature_of_registration}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-4 border fw-bold p-2">Margin</div>
            <div className="col-md-9 col-8 border Data-born p-2  text-wrap" >
           <p  className="text-wrap overflow-auto"  style={{width:"100%"}}> {selectedData.margin}</p>
            </div>
          </div>

          <div className="my-4  registrar-area ">
            <small>
              I <span className="down-data">JOHN YAO AGBEKO</span> Registrar of
              Births and Deaths for Ghana do hereby certify that the foregoing
              is a true copy of the entry No
              <span className="down-data">3501</span> in the Registe of Births
              fo <span className="down-data">LIBRATION ROAD</span> in the
              <span className="down-data">
                SEKONDI TAKORADI METOPOLITAN ASSEMBLY, WESTERN
              </span>{" "}
            </small>
            <small>
              Registration District in Ghana, and Register is now legally in my
              custody. <br />
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
  );
}

export default Cert;
