import React from 'react';
import Image from 'next/image';


interface EventCard2Props {
  title: string;
  date: string;
  time: string;
  description: string;
  photo: string;
}

const EventCard2: React.FC<EventCard2Props> = ({ title, date, time, description, photo }) => {
  return (
    <div className="w-4/5 h-60 rounded-lg mb-3 flex"> {/* Set fixed height here */}
        <div className='border w-2/5 rounded-xl' style={{ backgroundImage: `url(${photo})`,  backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

        </div>
        <div className=' ml-3 grow'>
        <div className="Frame40580 flex-col justify-start items-start gap-7 inline-flex">
            <div className="Frame40579 flex-col justify-start items-start gap-1 flex">
                <div className="SummerNight text-black text-xl font-semibold capitalize">{title}</div>
                <div className="Jun242000 text-red-500 text-lg font-medium uppercase">
                {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()}, {time}</div>
            </div>
            <div className="w-72 h-16 opacity-90 text-black text-sm font-normal  ">EDM party!<br/>{description}</div>
                <div className="Frame40578 w-72 justify-between items-center inline-flex">
                    <div className="Frame40537 w-9 h-8 px-3 py-2 rounded-2xl border border-black/opacity-20 justify-center items-center gap-2.5 flex">
                        <button className="I text-black text-sm font-medium ">i</button>
                    </div>
                    <div className="Frame40575 h-8 justify-end items-center gap-2.5 flex">
                        <div className="w-20 px-3 py-2 rounded-2xl border border-black/opacity-20 justify-center items-center gap-2.5 flex">
                            <button className="whitespace-nowrap text-black text-sm font-normal"> + remind</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EventCard2;


{/* <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex space-x-3">
            <button className="px-2 py-1 border rounded-full text-gray-700">i</button>
            <button className="px-3 py-1 border rounded-full text-gray-700">+ remind</button>
        
        </div>
      </div>
      <div className="text-gray-600 mb-4">
        {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()}, {time}
      </div>
      {/* <div className="flex space-x-2 mb-4">
      {photos.map((photo, index) => (
  <div key={index} className="w-1/2 h-52 bg-gray-200 rounded-2xl relative overflow-hidden" style={{ backgroundImage: `url(${photo})`,  backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}> */}
  {/* </div> */}
{/* ))} */}
{/* </div> */}
    // <div className="text-gray-700 mb-4">
    //     {description}
    // </div> *