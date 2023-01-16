import React,{useState,useEffect,useRef} from 'react';
import {Link,useLocation} from "react-router-dom";
import MyLoader from './Calendar/MyLoader';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';


function Fulldetails(props) {
  const location = useLocation();
  const state = location.state;
  const [loading,setLoading] = useState(true);
  console.log(props.state)
  console.log(state);
  console.log(loading);
  

  useEffect(()=>{
     setTimeout(() => {
     
      setLoading(false)
      
    }, 7000);

 },[]);

 const ComponentToPrint = React.forwardRef((props, ref) =>  (
  
  <div ref={ref} className="row">
      <div className='form-control  mt-3  align-center' >
                        <div className='form-control nameholder'>
                              <label>{state.name}</label>
                        </div>
                       <div>
                          <div className='d-flex '>
                               <div className='userimage d-flex justify-content-center'>
                                  <div className='userimagecircle '>
                                      <img src="/icons8-person-technologist-96.png"  alt ="imageuser"></img>
                                      
                                  </div>
                               </div>
                               <div className='detail'>
                                <div className='container'>
                                <div className='row'>
                                       <div className='column'>
                                           <strong>UserId</strong>
                                       </div>
                                      <div className='column'>
                                         <strong>  {state.UserId}</strong>
                                      </div>
                                     </div> 
                                    <div><hr></hr></div> 
                                    <div className='row'>
                                       <div className='column'>
                                           <strong>Gender</strong>
                                       </div>
                                      <div className='column'>
                                        <strong>{state.Gender}</strong> 
                                      </div>
                                    </div>  
                                    <div><hr></hr></div> 
                                    <div className='row'>
                                       <div className='column'>
                                           <strong>State</strong>
                                       </div>
                                      <div className='column'>
                                        <strong>{state.State}</strong>   
                                      </div>
                                    </div> 
                                    <div><hr></hr></div>  
                                    <div className='row'>
                                       <div className='column'>
                                           <strong>Martial-Status</strong>
                                       </div>
                                      <div className='column'>
                                          <strong>{state.Martialstatus}</strong>
                                      </div>
                                    </div> 
                                    <br></br>
                                    <div className=''>
                                      
                                     <div>
                                      
                                   </div>
                                </div>
                              </div>
                             </div>
                          </div>
                       </div>
                    </div>
  </div>
));

 const componentRef = useRef();

 
return (
    <div>
         <div  className='d-flex justify-content-center '>
          {
            loading ? (<MyLoader/>)
            :
            (
              <div className=''>
                 <div>
                 {
                state && (
                  <div>
                    <div >
                   
                      <ComponentToPrint ref={componentRef} />
                     
                       
                      </div>
                  
                     <div className=' download '>
                         <button onClick={()=>exportComponentAsJPEG(componentRef,{fileName:state.name,type:exportComponentAsJPEG})}>
                            Export As JPEG  <img src ="./icons8-user-location-94.png" className='g'></img>
                       </button>
                      </div>
                </div>
                )
              }
                 </div>
            
          </div>
            )
          }
      </div>
      <div className='mt-3 d-flex justify-content-center'>
    
        <button type = "button"  className="btn btn-success goback"> 
            <Link to = "/">Go Back</Link>
         </button>
         <br></br>
     </div>
    </div>

    
  )
}



export default Fulldetails