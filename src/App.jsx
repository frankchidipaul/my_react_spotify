import React from 'react'
import Nav from './d-componet/Nav/Nav'
import Left from './d-componet/Left/Left'
import Mixer from './d-componet/Mixer/Mixer'
import img1  from  '././assets/ab67706f00000002bdeb1c317ac2dd10f2397e4c.jpeg'
import img2  from  '././assets/ab67706f00000002cef8ac8b3a702dfba2ae85a9.jpeg'
import img3 from  '././assets/ab67706f00000002d073e656e546e43bc387ad79.jpeg'
import img4 from  '././assets/ab67706f00000002d771dc645afe9b87978b1d3e.jpeg'


const App = () => {
  return (
    <div className='App'>
<Nav/>
<Left/>
    <div className='boss'>
      
   <Mixer image1={img1} name="jazz in the background"/>
   <Mixer image2={img2} name="TODAYS TOP HITS"/>
   <Mixer image3={img3} name="peaceful piano"/>
   <Mixer image4={img4} name="All Out 2020s"/>
    </div>

 </div>

  )
}

export default App