import React from 'react';

function Room({room, selected, trigger}) {

  return (
    <div style={{height: '15px', width: '100%',
                 backgroundColor: `${room.room ? trigger[0] === room.x && trigger[1] === room.y ? "orange" : "green" : "transparent"}`,
                 borderTop: `${room.up ? '1px solid transparent' : room.room ? '1px solid red' : '1px solid transparent'}`,
                 borderLeft: `${room.left ? '1px solid transparent' : room.room ? '1px solid red' : '1px solid transparent'}`,
                 borderRight: `${room.right ? '1px solid transparent' : room.room ? '1px solid red' : '1px solid transparent'}`,
                 borderBottom: `${room.down ? '1px solid transparent' : room.room ? '1px solid transparent' : '1px solid transparent'}`
    }}>   
    </div>
  )
}

export default Room;