import React, { useState, useEffect } from 'react';
import { graph, roomsInfo } from '../data';
import Row from './Row';

const Main = () => {
  const [array, setArray] = useState([]);
  const [selected, setSelected] = useState({id: ""});
  const [trigger, setTrigger] = useState([null,null]);

  useEffect(() => {
    function createMap(columnCount, rowCount) {
      const map = [];
      for (let x = 0; x < columnCount; x++) {
        map[x] = []; // set up inner array
        for (let y = 0; y < rowCount; y++) {
           addCell(map, x, y);
        }
      }
      return map;
    }
   
    function addCell(map, x, y) {
       map[x][y] = {room: false, id: -1, roomData: '', left: false, right: false, up: false, down: false, x: x, y: y}
    }
   
    const map = createMap(50, 50);
    setArray(map);

  }, [])

  const mapRooms = (e) => {
    let row = 25;
    let column = 25;
    let stack = [{"direction": null, "node": 0}];
    let visited = {};

    let newArr = [...array];

    const loop = () => {

      setTimeout(() => {
        if (stack.length > 0 ) {
      
          let vertex = stack.pop();
  
          if (vertex.direction === null) {
            newArr[row][column].room = true;
            newArr[row][column].id = vertex.node;
            newArr[row][column].roomData = roomsInfo[vertex.node]
            setArray(newArr)
            setTrigger([row, column])
  
          } else {
            if (vertex.direction === "s") {
              row++;
            }
            if (vertex.direction === "n") {
              row--;
            }
            if (vertex.direction === "e") {
              column++;
            }
            if (vertex.direction === "w") {
              column--;
            }
            newArr[row][column].room = true;
            newArr[row][column].id = vertex.node;
            newArr[row][column].roomData = roomsInfo[vertex.node]
            setArray(newArr)
            setTrigger([row, column])
          }
  
        if (!visited.hasOwnProperty(vertex.node)) {
          visited[vertex.node] = 1;
  
          for (let key in graph[vertex.node]) {
            stack.push({"direction": key, "node": graph[vertex.node][key]});
            
            if (key === "s") {
              newArr[row][column].down = true;
              setArray(newArr)
            }
            if (key === "n") {
              newArr[row][column].up = true;
              setArray(newArr)
            }
            if (key === "e") {
              newArr[row][column].right = true;
              setArray(newArr)
            }
            if (key === "w") {
              newArr[row][column].left = true;
              setArray(newArr)
            }
          }
        }
          loop()
        } else {
          console.log('ARRAY', array)
        }
      }, 0)


    }
    loop()

  }


  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', fontSize: '28px', fontWeight: '600', paddingTop: '20px'}}>Game Board</div>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{margin: '20px', width: '80%'}}>
        <button style={{width: '80px', height: '20px', backgroundColor: 'orange'}} onClick={(e) => mapRooms(e)}>Start</button>
          {array.map((row, i) => {
            return <Row row={row} selected={selected} trigger={trigger} key={i}/>
          })}
        </div>
        {/* <div style={{width: '20%', marginTop: '20px'}}>
          <div>Room</div>
          <div style={{width: '120px', height: '120px', borderRadius: '70px', backgroundColor: 'gray'}}>

              <div style={{display: 'flex'}}>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent', borderRadius: '50px'}}></div>
                <div onClick={handleUp} style={{width: '0px', height: '0px', borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '40px solid red', cursor: 'pointer'}}></div>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent'}}></div>
              </div>
              <div style={{display: 'flex'}}>
                <div onClick={handleLeft} style={{width: '0px', height: '0px', borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderRight: '40px solid red', cursor: 'pointer'}}></div>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent'}}></div>
                <div onClick={handleRight} style={{width: '0px', height: '0px', borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderLeft: '40px solid red', cursor: 'pointer'}}></div>
              </div>
              <div style={{display: 'flex'}}>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent'}}></div>
                <div onClick={handleDown} style={{width: '0px', height: '0px', borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderTop: '40px solid red', cursor: 'pointer'}}></div>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent'}}></div>
              </div>
   
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Main;
