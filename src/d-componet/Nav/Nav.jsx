import React from 'react'
import './Nav.css'
import phynoimg  from  '../../assets/ab67616100005174a72f09634b0d8356b4090ae4.jpeg'
import kissimg  from  '../../assets/ab6761610000e5ebf4dd6003298a8976584cd573.jpeg'
import flavouimg  from  '../../assets/37i9dQZF1DZ06evO0aq5ZS-default.jpg'
import burnaimg  from  '../../assets/channels4_profile.jpg'
import drakeimg  from  '../../assets/ab676161000051744293385d324db8558179afd9.jpeg'
import joeimg from  '../../assets/ab67616d00001e02f2ea2619528f10fa2e503c15.jpeg'
const Nav = () => {
  return (
    <div>
      <nav>
         <div className='topnav'>

         
<button  class="navbtn1"><i id="" class="fa-solid fa-angle-left"></i></button>  
  <button class="navbtn2" ><i class="fa-solid fa-angle-right"></i></button>
 
  <button class="navbtn3">Explore Premuim</button>


<button className="navbtn4"><i class="fa-regular fa-circle-down"></i> InstallApp</button>


<button className="navbtn5"><i class="fa-regular fa-bell"></i></button>

<button className="navbtnprofile">F</button>



         </div>


         <section className='centerNav'>

         <span><h2 class="goodmornig">Good Morning</h2></span>
      <div class="centerdivwrapper">
  <div class="centerdiv1">
   <img className="phynoimg"src={phynoimg} alt=""/>

     <button class="play"> <i class="fa-solid fa-play"></i>  </button>
  </div>
      
<div class="centerdiv2">
<img   class="kissimg "src={kissimg} alt=""/>

<button class="play"> <i class="fa-solid fa-play"></i>  </button>

</div>
      
<div class="centerdiv3">
<img class=" flavouimg"src={flavouimg} alt=""/>

<button class="play"> <i class="fa-solid fa-play"></i>  </button>

</div>
      
<div class="centerdiv4">
<img   class=" burnalogo " src={burnaimg} alt=""/>

<button class="play"> <i class="fa-solid fa-play"></i>  </button>

</div>

      
<div class="centerdiv5">
<img     class=" drakeimg" src= {drakeimg} alt=""/>
<button class="play"> <i class="fa-solid fa-play"></i>  </button>

</div>
      
<div class="centerdiv6">
<img  class="joeimg "    src={joeimg} alt=""/>

<button  class="play"> <i class="fa-solid fa-play"></i>  </button>

</div>


  <span class="mixer">Your top mixes</span>

       </div> 


          
        
          
         </section>
        
          
       
      

      </nav>

    
    </div>
  )
}

export default Nav