import React,{useState,useEffect} from "react";
import { Link,useLocation } from "react-router-dom";


function Buttons() {
    const [active,setActive] = useState('birth')
    let location = useLocation();

    useEffect(() => {
        // Update the active state based on the current location
        if (location.pathname === "/birth") {
          setActive("birth");
        } else if (location.pathname === "/death") {
          setActive("death");
        }
    }, [location.pathname]);


  return (
    <div
      className="row py-4 rounded g-0 g-2 p-2"
      style={{ background: "#FAF8F8" }}
    >
      <div className="col-6"  >
        <Link to={'/birth'} onClick={()=>setActive("birth")}>
            <div className={`p-md-4 p-3 btns rounded text-center ${ active == 'birth' ? 'btn-1' : 'btn-1-off'} `} >
            Check for Birth
            </div>
        </Link>
        
      </div>

      <div className="col-6" >
        <Link to={'/death'} onClick={()=>setActive("death")}>
            <div className={` p-md-4 p-3 btns rounded text-center ${active == 'death' ? 'btn-2' : 'btn-2-off'}  `} >
            Check for Death
            </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Buttons;
