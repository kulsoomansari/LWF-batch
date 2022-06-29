import './App.css';
import Card from './card';
import Data from './data';
import Netflix from './netflix';
import {Map} from './map';
import Timer from './rhooks';
import { CompA } from './CompA';

// console.log(Data[0].title)
function App() {
  return (
    <div>

      <Map />
  {/* <Netflix text= {{name: 'Peter'}}/> 
  <Card 
 imgsrc= {Data[0].imgsrc}
 title= {Data[0].title}
 sname= {Data[0].sname}
 />
  <Card 
 imgsrc= {Data[1].imgsrc}
 title= {Data[0].title}
 sname= {Data[0].sname}
  />
  <Card 
imgsrc= {Data[2].imgsrc}
title= {Data[2].title}
sname= {Data[2].sname}
 />

 <Timer /> */}


{/* <CompA name="kulsoom" lname="ansari"/> */}
<CompA name="kulsoom"/>
    </div>
  );
}

export default App;
