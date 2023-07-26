import React ,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import Cert from '../components/Cert'
import birthdata from '../components/birth.json'


function Doc() {
  const {entry} = useParams()
  const [cert,setCert] = useState({})

  useEffect(()=>{
    getCert()
  },[])

  const getCert = ()=>{
    // fetch('/birth.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //       let user =data.find(user =>user.entry_no === entry)
    //       if(user){
    //         setCert(user)
    //       }else{
    //         alert('Invalid Code!')
    //       }
        
    // })

    let user = birthdata.birth.find((user) => user.entry_no == entry  ||   user.child_name == entry);
    if (user) {
    
        setCert(user)
      } else {
        swal({
          title: "Invalid Number",
          text: "Please check your number and try again",
          icon: "error",
          button: "Cancel",
        });
    }
  }

  return (
    <div className='container-lg p-md-3 p-2'>
        <Cert selectedData={cert}/>
    </div>
  )
}

export default Doc