import React from 'react';
import Room from './Room';


const Row = ({row, selected, trigger} ) => {

  return (
    <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
         }}>
      {row.map((room, i)=> {
        return <Room room={room} selected={selected} trigger={trigger} key={i}/>
      })}
    </div>
  )
}

export default Row;