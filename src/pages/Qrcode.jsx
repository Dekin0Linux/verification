
// import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';

function Qrcode() {
  const [scanResult, setScanResult] = useState(null); 

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 5,
    });
    
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error() {
      console.log();
    }
  }, []);

  return (
    <div className="App">
       <h1>Qr code scanning in React</h1>
      {scanResult
        ? <div> Success: <a href={scanResult}>{scanResult}</a></div>
        : <div id="reader"></div>
      } 
    </div>
  );
}

export default Qrcode;