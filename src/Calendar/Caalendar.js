import React, { useState,useEffect } from 'react'
import Calendar from 'react-calendar';
import userdata from './userdata';
import {  format } from 'date-fns';
import {Link} from "react-router-dom";
import "../App.css";


function Caalendar(props) {
    const [value, onChange] = useState(new Date());
    const [eventList,setEventlist] = useState([]);
   
   useEffect(()=>{
      //  setEventlist(userdata)
      
   },[]);

 

 const getEventByDate = (date) =>{
    const formatteDate = format(new Date(date),"dd-MM-yyy");
     let filterData = userdata?.filter((list)=>{
         return list.date === formatteDate
     });
     setEventlist(filterData);
     console.log(eventList)
   }
return (
    <>
     <div className='d-flex justify-content-center'>
        <div className='mt-3'>

        <Calendar    className={["myc1, myc2"]}
         onChange = {onChange} value = {value} 
         tileContent={(date) =>{
               const formattedDate =format(new Date(date.date),"dd-MM-yyy");
               }
          }
         onClickDay={(value)=>{
                console.log("cliked on",value)
                getEventByDate(value)
         }}
         />
          <div className='eventdatadesign mt-3'>
         <div className=''>
            {eventList.length == 0 ? (
            <div className='form-control'>
              <h5 className='text-center'>No Event for this Day</h5>
            </div>
          ):(
            <>
               {eventList.map((ev)=> {
                return (
                  <div className='form-control'>
                          <strong>Name</strong>&nbsp;:&nbsp;&nbsp;<strong>
                            {ev.name}&nbsp; &nbsp;
                              <Link to ="/Fulldetails"   className='animationtext' href='#' state={ev}> 
                                    Know More &#8658;
                               </Link>
                          </strong>
                           <hr></hr>
                            <strong>Event</strong>&nbsp;:&nbsp;&nbsp;<strong>{ev.event}</strong>
                          <hr></hr>
                  </div>
                )
               })}
            </>
          )
         }
          </div>
        </div> 
        </div>
        
      </div>
      
   <div>
 </div>
    </>
   )
}

export default Caalendar

