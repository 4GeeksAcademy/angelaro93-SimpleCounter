import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


//create your first component
const Home = () => {
const [seconds,setSeconds] = useState(0);
const [decimalSeconds,setDecimalSeconds] = useState(0);
const [minutes,setMinutes] = useState(0);
const [decimalMinutes,setDecimalMinutes] = useState(0);
const [hour,sethour] = useState(0);
const [decimalhour,setDecimalHour] = useState(0);

useEffect(()=>{
	setInterval(()=>{
		setSeconds(prev => prev + 1)
	},1000)	
},[])

useEffect(()=>{
	if(seconds==10) {
		setDecimalSeconds(prev => prev + 1)
		setSeconds(0)
	}
	if (decimalSeconds==6) {
		setMinutes(prev => prev + 1)
		setDecimalSeconds(0)
	}
	if (minutes==6) {
		setDecimalMinutes(prev => prev + 1)
		setMinutes(0)
	}
	if (decimalMinutes==6) {
		sethour(prev => prev + 1)
		setDecimalMinutes(0)
	}
	if (hour==6) {
		setDecimalHour(prev => prev + 1)
		sethour(0)
	}
},[seconds]) 




	return (
		<div className="p-3 mb-2 bg-dark text-white text-center">
		<div className="text-center d-flex justify-content-center">
		<div className="p-3 mb-2  bg-dark bg-gradient text-white">
			<div>
			<FontAwesomeIcon icon={faClock} />
			</div>
			</div> 
		<div className="p-3 mb-2  bg-dark bg-gradient text-white text-center">
			<div>
			{decimalhour}
			</div> 
			</div>
			<div className="p-3 mb-2  bg-dark bg-gradient text-white text-center">    
			<div>
				{hour}
			</div>
			</div>
			<div className="p-3 mb-2  bg-dark bg-gradient text-white text-center">
			<div>
				{decimalMinutes}
			</div>
			</div>
			<div className="p-3 mb-2  bg-dark bg-gradient text-white text-center">
			<div>
				{minutes} 
			</div>
			</div>
            <div className="p-3 mb-2  bg-dark bg-gradient text-white text-center">
			<div>
				{decimalSeconds}
			</div>
			</div>
            <div className="p-3 mb-2  bg-dark bg-gradient text-white text-center">
			<div>
				{seconds}
			</div>
			</div>
		</div>
		</div>
	);
};

export default Home;
