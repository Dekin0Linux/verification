
// import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import birthdata from '../components/birth.json'
import { useNavigate } from 'react-router-dom';

function Qrcode() {
  const [scanResult, setScanResult] = useState(null); 
  const navigate = useNavigate()



  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 5,
    });
    
    scanner.render(success, error);

  

    function success(result) {
      let user = birthdata.birth.find((user) => user.link == result) ; //check if code link exists
      if(user){
        scanner.clear();
        setScanResult(result);
        window.location.href= `${result}`

      }else {
        swal({
          title: "Invalid Number",
          text: "Please check your number and try again",
          icon: "error",
          button: "Cancel",
        });
        navigate('/')
        error()
    }
     
    }

    function error() {
      console.log();
    }
  }, []);

  return (
    <div className="App">
       <h5>Qr code scanning</h5>
      {scanResult
        ? <div> Success: <a href={scanResult}>{scanResult}</a></div>
        : <div id="reader"></div>
      } 
    </div>
  );
}

export default Qrcode;