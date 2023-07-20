import React,{useState} from "react";
import { useNavigate ,NavLink } from "react-router-dom";


function Buttons() {
    const [active,setActive] = useState('birth')
    const navigate = useNavigate()

    const activeTab = (tabname)=>{
        setActive(tabname);
        console.log(tabname)
        if(tabname == 'birth'){
            navigate('/birth');
        }else{
            navigate('/death');
        }
       
    }

  return (
    <div
      className="row py-4 rounded g-0 g-2 p-2"
      style={{ background: "#FAF8F8" }}
    >
      <div className="col-6" onClick={()=>activeTab('birth') } >
        <div className={`bg-white p-md-4 p-3 btns rounded text-center ${active === 'birth' ? 'btn-1' : ''}` }>
          Check for Birth
        </div>
      </div>

      <div className="col-6" onClick={()=>activeTab('death')}>
        <div className={` p-md-4 p-3 btns rounded text-center ${active === 'death' ? 'btn-2' : ''}`}>
          Check for Death
        </div>
      </div>
    </div>
  );
}

export default Buttons;
