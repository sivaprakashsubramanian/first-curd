// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react';

// function App() {
//   const [empname, setEmpName]=useState('');
//   const [empage, setEmpAge]=useState();
//   const [emprollno,setEmpRoll]=useState();
//   const [empnative,setEmpNative]=useState();
//   const [empgender,setEmpGender]=useState();
//   const empdetail= (e) =>{
//     const {name,value}=e.target;
//     if(name==='empname')
//     {
//       setEmpName(value)
//     }
//     else if(name==='empage')
//     {
//       setEmpAge(value)
//     }
//     else if(name==='emprollno'){
//       setEmpRoll(value)
//     }
//     else if(name==='empnative')
//     {
//       setEmpNative(value)
//     }
//     else if(name==='empgender')
//     {
//       setEmpGender(value)
//     }
//   }
//   function empdetails(){
//     console.log(empname,empage,emprollno,empnative,empgender);
//   }
 
//   return (
//     <div className="App">
//         EmployeName<input name='empname' value={empname} onChange={empdetail}/><br/>
//         EmployeAge<input name='empage' value={empage} onChange={empdetail}/><br/>
//         EmployeRoll<input name='emprollno' value={emprollno} onChange={empdetail}/><br/>
//         EmployeNative<select name='empnative'  onChange={empdetail}>
//           <option value='chennai'>chennai</option>
//           <option value='coimbatore'>coimbatore</option>
//           <option value='salem'>salem</option>
//           <option value='madurai'>Madurai</option>
          
//         </select><br/>
      
//         Employe Gender
//         <input type="radio" name="empgender" value="Male" onChange={empdetail} />Male
//         <input type="radio" name="empgender" value="Female" onChange={empdetail} />Female<br/>
      
        
//        <button onClick={empdetails}>click me</button>
//     </div>
//   );
// }
function App() {
  const [empdetails,SetEmpInfo]=useState({
    empname:'',
    empage:'',
    emprollno:'',
    empnative:'',
    empgender:''

  }
  )
  // console.log(empdetails);
  const [empdetailsArr,setempdetailArr]=useState([]);
  const empdetail=(e) => {
    const {name,value}=e.target;
    SetEmpInfo((prev) => (
      {
        ...prev,
        [name]:value
      }
    ))

  }
  function  empdetails1() {
    const index=empdetailsArr.findIndex(i=>i.empname===empdetails.empname)
    if(index>-1){
    empdetailsArr[index]={
      ...empdetailsArr[index],
      empage:empdetails.empage,
      emprollno:empdetails.emprollno,
      empnative:empdetails.empnative,
      empgender:empdetails.empgender
    }
    setempdetailArr([...empdetailsArr])
  }
  else{
    empdetailsArr.push({
      empname:empdetails.empname,
    empage:empdetails.empage,
    emprollno:empdetails.emprollno,
    empnative:empdetails.empnative,
    empgender:empdetails.empgender

    });
    SetEmpInfo({empname:'',empage:'',emprollno:'',empnative:'',empgender:''})
        console.log(empdetailsArr);
  
      }
    }
    function EditInfo(i){
      const a=empdetailsArr[i];
      SetEmpInfo({
        empname:a.empname,
        empage:a.empage,
        emprollno:a.emprollno,
        empnative:a.empnative,
        empgender:a.empgender

      })

    }
    function DeletInfo(i){
      const b=[...empdetailsArr];
      b.splice(i,1);
      // console.log(b);
      setempdetailArr([...b]);
      


    }
      // const nums = [10,20,30,40,50];
      // const NumList = nums.map((n, index) => (
      //   <li key={index}>{n*2}</li>
      // ));

  return(
    <div className="App">
      
    EmployeName<input name='empname' value={empdetails.empname} onChange={empdetail}/><br/>
    EmployeAge<input name='empage' value={empdetails.empage} onChange={empdetail}/><br/>
    EmployeRoll<input name='emprollno' value={empdetails.emprollno} onChange={empdetail}/><br/>
    EmployeNative<select name='empnative'  onChange={empdetail} value={empdetails.empnative}>
      <option value=' '>select</option>
      <option value='chennai'>chennai</option>
      <option value='coimbatore'>coimbatore</option>
      <option value='salem'>salem</option>
      <option value='madurai'>Madurai</option>
      
    </select><br/>
  
    Employe Gender
    <input type="radio" name="empgender" value="Male" onChange={empdetail} />Male
    <input type="radio" name="empgender" value="Female" onChange={empdetail} />Female<br/>
   <button onClick={()=>empdetails1()}>click me</button>
   <div>
      {
        empdetailsArr.map((v,i)=>{
          return(
            <ul key={i}>
              {v.empname}||
              {v.empage}||
              {v.emprollno}||
              {v.empnative}||
              {v.empgender}
              <button onClick={()=>{DeletInfo(i)}}>Delete</button>
              <button onClick={()=>{EditInfo(i)}}>Edit</button>

            </ul>
          )
          
          }
          
          )
        }</div> 
   
    
   
</div>
    
        )
}


// function App(){

//   const [user,setUserInfo]=useState([
//     empname,empage

//   ]);
//   const empdetail =(e)=>{
//     const {name,value}=e.target;
//     setUserInfo((prev)=>(
//       {
//         ...prev,
//         user
//       }
//     ))
//   }

//   return(
//     <div>
//       <input name='empname' value={empname} onChange={empdetail}/>
//       <input name='empage' value={empage} onChange={empdetail}/>


//     </div>
//   )

// }






export default App;
