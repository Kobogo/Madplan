  
  const mandag = document.querySelector('.mandag')
  const tirsdag = document.querySelector('.tirsdag')
  const onsdag = document.querySelector('.onsdag')
  const torsdag = document.querySelector('.torsdag')
  const fredag = document.querySelector('.fredag')
  const lørdag = document.querySelector('.lørdag')
  const søndag = document.querySelector('.søndag')
  const indkøb = document.querySelector('.indkøb')
  let btn = document.getElementById('#btn')

  let mad = [
    {
      ret: "Hot dogs", 
      ingradienser: ["Pølser", "Brød"]
    },
    {
      ret: "Spareribs",
      ingradienser: ["Spareribs", "Agurk", "Rød Peber", "Mejs", "Pasta", "Flutes"] 
    },
    {
      ret: "Frisk pasta m. mornaysovs",
      ingradienser: ["Frisk pasta", "Mornaysovs", "Bacon"]
    },
    {
      ret: "Frikadeller m. ovnkartofler", 
      ingradienser: ["HK kalv og flæsk", "Ovnkartofler"]
    },
    {
      ret: "Tex mex", 
      ingradienser: ["Pandekager", "krøderiger", "Oliven", "Revet ost", "relapinjos", "Majs", "Agurk", "Rød Peber"]
    },
    {
      ret: "Stægt flæsk med parsillesovs", 
      ingradienser: ["Flæsk", "Parsille", "Mælk", "Mel"]
    },
    {
      ret: "Indbagt laks m. flødekartofler", 
      ingradienser: ["Indbagt laks", "Skivkartofler", "Fløde", "Løg"]
    }
  ];

btn = document.addEventListener('click', generateMenu) 


function setRandom(){
  const random = mad[Math.floor(Math.random() * mad.length)]
  return random
}

function getRandom(){
 
  let setNewRandom = [];
  
/*    for (let index = 0; index < 1000; index++) {
    setNewRandom[index] += setNewRandom.push(setRandom())
    setNewRandom = [...new Set(setNewRandom)]
  }  */
   setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())
  setNewRandom.push(setRandom())  
  setNewRandom = [...new Set(setNewRandom)]
  

    mandag.textContent = " " + setNewRandom[0].ret
    tirsdag.textContent = " " + setNewRandom[1].ret
    onsdag.textContent = " " + setNewRandom[2].ret
    torsdag.textContent = " " + setNewRandom[3].ret
    fredag.textContent = " " + setNewRandom[4].ret
    lørdag.textContent = " " + setNewRandom[5].ret
    søndag.textContent = " " + setNewRandom[6].ret

  /*   indkøb.textContent = " " + setNewRandom[0].ingradienser[0]
    indkøb.textContent = " " + setNewRandom[1].ingradienser[1]
    indkøb.textContent = " " + setNewRandom[2].ingradienser[2]
    indkøb.textContent = " " + setNewRandom[3].ingradienser[3]
    indkøb.textContent = " " + setNewRandom[4].ingradienser[4]
    indkøb.textContent = " " + setNewRandom[5].ingradienser[5]
    indkøb.textContent = " " + setNewRandom[6].ingradienser[6] */
    
}


function generateMenu(){
  getRandom()
}

 






