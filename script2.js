// console.log("Js is being written");

// async function getSongs() {
//     try {
//         let response = await fetch("http://127.0.0.1:3000/songs/");
//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//         let text = await response.text();
//         // console.log(text);

//         let created_div = document.createElement("div");
//         created_div.innerHTML = text;
//         let as = created_div.querySelectorAll("a");

//         let songs = [];
//         as.forEach(element => {
//             if (element.href.endsWith(".mp3")) {
//                 songs.push(element.href.split("/songs/")[1]);
//                 }
//         });
//         // console.log(songs)
//             return songs;
//         }
//     catch (error) {
//         console.error("Failed to fetch songs:", error);
//         return [];
//     }
// }






// async function main() {
//     let songs = await getSongs();
//     console.log(songs);

    
//     let songUL = document.querySelector(".defaultlist ul");

//     songs.forEach(song => {
//         let li = document.createElement("li");
//         li.innerHTML = `
//             <div>
//                 <div>
//                     <svg><use xlink:href="#my-icon" /></svg>
//                 </div>
//                 <div>
//                     <div class="titlename">${song.replaceAll("%20", " ").replaceAll(".mp3", "")}</div>
//                     <div class="artistname">Honey</div>
//                 </div>
//             </div>
//             <div>
//                 <button>
//                     <svg><use xlink:href="#play"/></svg>
//                 </button>
//             </div>`;
//         songUL.appendChild(li);
//     });
// }






// async function matching(){
//     await main(); 

//     let currentSong = null;
//     var songPaths = [];

//     var songPath = document.querySelectorAll(".titlename");
//     songPath.forEach((song)=>{
//         song.innerText = song.innerText + ".mp3";
//         var songText = song.innerText
//         songText = songText.replaceAll(" ","%20");
//         console.log(songText);

//         songPaths.push(songText);
//     } );

//     // let songlist = document.querySelectorAll(".titlename");
//     songPath.forEach((song, index) =>{
//         song.addEventListener("click", ()=>{
//             console.log(`${index} and ${song.innerText}`);


//             if (currentSong && !currentSong.paused) {
//                 currentSong.pause(); // Pause the currently playing audio
//                 currentSong.currentTime = 0; // Reset the playback to the start
//             }

//             var currentSong = new Audio(`songs/${songPaths[index]}`);
//             currentSong.play();
//         })
//     })

    
// }

// matching();















// console.log("Js is being written");

// async function getSongs() {
//     try {
//         let response = await fetch("http://127.0.0.1:3000/songs/");
//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//         let text = await response.text();

//         let created_div = document.createElement("div");
//         created_div.innerHTML = text;
//         let as = created_div.querySelectorAll("a");

//         let songs = [];
//         as.forEach(element => {
//             if (element.href.endsWith(".mp3")) {
//                 songs.push(element.href.split("/songs/")[1]);
//             }
//         });
//         return songs;
//     } catch (error) {
//         console.error("Failed to fetch songs:", error);
//         return [];
//     }
// }

// async function main() {
//     let songs = await getSongs();
//     // console.log(songs);

//     let songUL = document.querySelector(".defaultlist ul");

//     songs.forEach(song => {
//         let li = document.createElement("li");
//         li.innerHTML = `
//             <div>
//                 <div>
//                     <svg><use xlink:href="#my-icon" /></svg>
//                 </div>
//                 <div>
//                     <div class="titlename">${song.replaceAll("%20", " ").replaceAll(".mp3", "")}</div>
//                     <div class="artistname">Honey</div>
//                 </div>
//             </div>
//             <div>
//                 <button>
//                     <svg><use xlink:href="#play"/></svg>
//                 </button>
//             </div>`;
//         songUL.appendChild(li);
//     });
// }

// async function matching() {
//     await main(); 

//     let currentSong = null; // This should be scoped to the entire function
//     let songPaths = [];

//     let playpause = document.querySelector("#playpause");
//     let playsvg = document.querySelector("#playbutton");
//     let pausesvg = document.querySelector("#pausebutton");


//     let songElements = document.querySelectorAll(".titlename");
//     songElements.forEach((song) => {
//         song.innerText = song.innerText + ".mp3";
//         let songText = song.innerText.replaceAll(" ", "%20");
//         // console.log(songText);
//         songPaths.push(songText);
//     });

//     songElements.forEach((song, index) => {
//         song.addEventListener("click", () => {
//             // console.log(`${index} and ${song.innerText}`);

//             // Stop the current song if there is one playing
//             if (currentSong) {
//                 currentSong.pause();
//             }

//             // Play the new song
//             currentSong = new Audio(`songs/${songPaths[index]}`);
//             currentSong.play();
//             playsvg.style.display="none";
//             pausesvg.style.display="block";



//             playpause.addEventListener("click", ()=>{
//                 if (currentSong) {
//                     currentSong.pause();
//                     playsvg.style.display="block";
//                     pausesvg.style.display="none";
//                 }
//                 else {
//                     currentSong.play();
//                 }
//             })

//         });
     
//     });


// }

// matching();













//                   REAL ONE STARTS  FROM  HERE






// console.log("Js is being written");



// async function getSongs() {
//     try {
//         let response = await fetch("http://127.0.0.1:3000/songs/");
//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//         let text = await response.text();
//         // console.log(text);

//         let created_div = document.createElement("div");
//         created_div.innerHTML = text;
//         let as = created_div.querySelectorAll("a");

//         let songs = [];
//         as.forEach(element => {
//             if (element.href.endsWith(".mp3")) {
//                 songs.push(element.href.split("/songs/")[1]);
//             }
//         });
//          console.log(songs)
//         return songs;
//     } catch (error) {
//         console.error("Failed to fetch songs:", error);
//         return [];
//     }
// }

// async function main() {
//     let songs = await getSongs();

//     let songUL = document.querySelector(".defaultlist ul");

//     songs.forEach(song => {
//         let li = document.createElement("li");
//         song = song.replaceAll("%20", " ").replaceAll(".mp3", "");
//         // console.log(song);
//         li.innerHTML = `
//             <div>
//                 <div>
//                     <svg><use xlink:href="#my-icon" /></svg>
//                 </div>
//                 <div>
//                     <div class="titlename">${song}</div>
//                     <div class="artistname">Artist_Name</div>
//                 </div>
//             </div>
//             <div>
//                 <button>
//                     <svg><use xlink:href="#play"/></svg>
//                 </button>
//             </div>`;
//         songUL.appendChild(li);
//     });
// }

// async function matching() {
//     await main(); 

//     let currentSong = null;
//     let songPaths = [];
//     let currentIndex = -1;

//     let playpause = document.querySelector("#playpause");
//     let playsvg = document.querySelector("#playbutton");
//     let pausesvg = document.querySelector("#pausebutton");
//     let previoussong = document.querySelector("#previoussong");
//     let nextsong = document.querySelector("#nextsong");

//     let songElements = document.querySelectorAll(".titlename");
//     songElements.forEach((songe) => {
//         songe = songe.innerText + ".mp3";
//         let songText = songe.replaceAll(" ", "%20");
//         songPaths.push(songText);
//     });

  

 
//     songElements.forEach((song, index) => {
//         song.addEventListener("click", () => {
//             if (currentSong) {
//                 currentSong.pause();
//                 currentSong.currentTime = 0; 
//             }
//             currentIndex = index;
//             currentSong = new Audio(`songs/${songPaths[index]}`);
//             currentSong.play();
//             currentSong.addEventListener('ended', () => {
//                 if(index!=songPaths.length -1){
//                     setTimeout(() => {
//                         currentSong = new Audio(`songs/${songPaths[index+1]}`);
//                         currentSong.play();
//                     }, 2000);
//                 }
//             });
            
//             playsvg.style.display = "none";
//             pausesvg.style.display = "block";


//         });
//     });

  
    
//     playpause.addEventListener("click", () => {
//         if (currentSong) {
//             if (currentSong.paused) {
//                 currentSong.play();
//                 playsvg.style.display = "none";
//                 pausesvg.style.display = "block";
//             } else {
//                 currentSong.pause();
//                 playsvg.style.display = "block";
//                 pausesvg.style.display = "none";
//             }
//         }
//     });

 
// }

// matching();















           // -------------------------- Pseudo 



        // var aud = new Audio("tack1.mp3");
        // aud.play();
        

        const titlename = document.querySelector(".titlename");

        function matching() {
        
            let currentSong = null;
            var globalindex ;
            let currentIndex = -1;
        
            let playpause = document.querySelector("#playpause");
            let playsvg = document.querySelector("#playbutton");
            let pausesvg = document.querySelector("#pausebutton");
            let previoussong = document.querySelector("#previoussong");
            let nextsong = document.querySelector("#nextsong");
        
                    
            const titlename = document.querySelectorAll(".titlename");
            // text = titlename[1].innerHTML; 
            // console.log(titlename);
            // console.log(text);
            titlename.forEach((titlename,index) => {
                titlename.addEventListener("click", () => {
                if (currentSong && !currentSong.paused) {
                        currentSong.pause();
                        currentSong.currentTime = 0; 
                    }
                                if (globalindex !== index) {
        
                                currentSong = new Audio(`track${index+1}.mp3`);
                                currentSong.play();
                                console.log(`Playing track ${index+1}`);
                                
                                currentSong.addEventListener('ended', () => {
                                    console.log("Song ended");
                                    playsvg.style.display = "block";
                                    pausesvg.style.display = "none";
                                });
                }
                    
                    else{
                        currentSong.play();
                    }
                // console.log("titlename is clicked" , index);
                // console.log(index)
                console.log(index);
                    // if (!currentSong.paused) {
                    //     currentSong.pause();
                    //     currentSong.currentTime = 0; 
                    // }
                    // currentIndex = index;
                    // currentSong = new Audio(`songs/${songPaths[index]}`);
                    // const titlename = document.querySelector("#titlename");
                    // currentSong.play();
                    currentSong.addEventListener('ended', () => {
                        // if(index!=songPaths.length -1){
                        //     setTimeout(() => {
                        //         currentSong = new Audio(`songs/${songPaths[index+1]}`);
                        //         currentSong.play();
                        //     }, 2000);
                        // }
                        console.log("ended")
                    });
                    
                    playsvg.style.display = "none";
                    pausesvg.style.display = "block";
                });
                
                
            });
        
        
            // let songPaths = [ ];
         
         console.log("after current")
                playpause.addEventListener("click", () => {
                console.log("playpause is clicked") 
                // currentSong.pause(); 
        
        
                if (currentSong.paused) {
                        currentSong.play();
                        playsvg.style.display = "none";
                        pausesvg.style.display = "block";
                    } else {
                        currentSong.pause();
                        playsvg.style.display = "block";
                        pausesvg.style.display = "none";
                    }
        
            
            });
        
        
                
            };
        
          
            
        
        
        
        
        matching();
        
        