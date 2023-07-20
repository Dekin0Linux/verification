// import React,{useState} from 'react'
// import {useNavigate} from 'react-router-dom'

// function Search() {
//     const [code,setCode] = useState('')
//     const navigate = useNavigate()

//     const submitCode = (e)=>{

//         e.preventDefault()

//         fetch('/birth.json')
//         .then(res=>res.json())
//         .then(data=>{
//           let user =data.find(user =>user.entry_no === code)
//           if(user){
//             navigate(`/verify/${code}`)
//           }else{
//             alert('Invalid Code!')
//           }
        
//         })
        
//     }


    
//   return (
//     <div>
//         <form onSubmit={submitCode}>
//             <input type="text" placeholder='Enter Number' onChange={e=>setCode(e.target.value)} />
//             <button type='submit'>Verify </button>
//         </form>
//     </div>
//   )
// }

// export default Search