import React from 'react'
import workHistory from "../assets/work_history.json"

const Timeline = () => {
  return (
    <div id='timeline' className='page-width'>
      <div className='timelineBox'>
{
  workHistory.jobs.map((item,index)=>(
    <TimelineItem
    heading={item.title}
    company={item.company}
    dateStart={item.dateJoin}
    dateend={item.dateLeave}
    index={index}
    key={item.title}
    />
  ))
}
      </div>
    </div>
  )
}

const TimelineItem=({heading,company,dateStart,dateend,index})=> <div className={`timelineItem ${index%2===0?"leftTimeline":"rightTimeline"}`}> 
<div>
<h2>{company}</h2>
<h5>{heading}</h5>
<p>{dateStart} - {dateend}</p>
</div>

</div>;



export default Timeline