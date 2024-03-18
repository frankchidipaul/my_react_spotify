import React from 'react'
import './Left.css'
import imag1  from '../../assets/6509c5e6-b0c6-44f7-8605-8fa93276e1e0.svg'
import imag2  from '../../assets/download.svg'
import imag3  from '../../assets/channels4_profile.jpg'
import imag4  from '../../assets/download.jpeg'
import imag5  from '../../assets/ab676161000051747ae7b5364af3ed3f4070ac4e.jpeg'
import imag6  from '../../assets/ab6761610000e5ebf4dd6003298a8976584cd573.jpeg'

const Left = () => {
  return (
    <div>
  



  


  <div className="left">
            <div class="leftnav1">

                <img  src={imag1} alt="" class="home"/> 
          
        <span class="sp1">Home</span>

           <i id="search" class="fa-solid fa-magnifying-glass"></i>
             <span class="sp2">Search</span> 

                  
            </div>
               <div class="leftnav2">
                 <div class="leftnav3">
                   
                   <img class="libraryimg" src={imag2} alt=""/>
                   <span class="Libraryicon1">Your Library</span> 
                   <a href=" "><span class=" Libraryiconplus "><i id=" plus" class="fa-solid fa-plus"></i></span></a>
       <a href=""><span class="Libraryiconminus "> <i class="fa-solid fa-arrow-right"></i> </span></a>            
            <button class="Playlistsbtn1">Playlists</button>
              <button class="Playlistsbtn2">Artists</button>
              
                   

                   </div>

         <div class="leftnav2center">
             <span class="search2"><i    class="fa-solid fa-magnifying-glass" id="search2"> </i></span>

         <span class="recent">Recents<i class="fa-solid fa-list-ul" id="list"></i> </span>

        <div class="leftdive1">
      <img class="burnaimg" src= {imag3} alt=""/>
        <span class="burnaname">Burna Boy</span> 
            <span class="burnatitle">Artist</span>            

                </div>
        <div class="leftdive1">
      <img class="burnaimg " src={imag4} alt=""/>
        <span class="burnaname">Davido</span> 
            <span class="burnatitle">Artist</span>            

                </div>
        <div class="leftdive1">
      <img class="victonyimg " src={imag5} alt=""/>
        <span class="burnaname">Victoney </span> 
            <span class="burnatitle">Artist</span>            

                </div>
        <div class="leftdive1">
      <img class="burnaimg " src={imag6} alt=""/>
        <span class="burnaname">Kizz Daniel </span> 
            <span class="burnatitle">Artist</span>            

                </div>

               
           </div>
                   
    </div>
           </div>
                   
    </div>
  )
}

export default Left