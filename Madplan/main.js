  
  const mandag = document.querySelector('.mandag')
  const tirsdag = document.querySelector('.tirsdag')
  const onsdag = document.querySelector('.onsdag')
  const torsdag = document.querySelector('.torsdag')
  const fredag = document.querySelector('.fredag')
  const lørdag = document.querySelector('.lørdag')
  const søndag = document.querySelector('.søndag')
  const indkøb = document.querySelector('.indkøb')
  let btn = document.getElementById('#btn')

  btn = document.addEventListener('click', generateMenu) 

  let mad = [
    {
      ret: "Hot dogs", 
      ingredienser: ["Pølser", "Brød"]
    },
    {
      ret: "Spareribs m. pastasalat",
      ingredienser: ["Spareribs", "Agurk", "Rød Peber", "Mejs", "Pasta", "Flutes"] 
    },
    {
      ret: "Frisk pasta m. mornaysovs",
      ingredienser: ["Frisk pasta", "Mornaysovs", "Bacon"]
    },
    {
      ret: "Frikadeller m. ovnkartofler", 
      ingredienser: ["HK kalv og flæsk", "Ovnkartofler"]
    },
    {
      ret: "Tex mex", 
      ingredienser: ["Pandekager", "krøderiger", "Oliven", "Revet ost", "relapinjos", "Majs", "Agurk", "Rød Peber"]
    },
    {
      ret: "Stægt flæsk med persillesovs", 
      ingredienser: ["Flæsk", "Parsille", "Mælk", "Mel"]
    },
    {
      ret: "Indbagt laks m. flødekartofler", 
      ingredienser: ["Indbagt laks", "Skivkartofler", "Fløde", "Løg"]
    }
  ];


function setRandom(){
  const random = mad[Math.floor(Math.random() * mad.length)]
  return random
}

function getRandom(){
 
  let setNewRandom = [];
  
  /* for (let index = 0; index < 1000; index++) {
    let random = setNewRandom[index] += setNewRandom.push(setRandom())
    random = [...new Set(setNewRandom)]

    mandag.textContent = " " + random[0].ret
    tirsdag.textContent = " " + random[1].ret
    onsdag.textContent = " " + random[2].ret
    torsdag.textContent = " " + random[3].ret
    fredag.textContent = " " + random[4].ret
    lørdag.textContent = " " + random[5].ret
    søndag.textContent = " " + random[6].ret

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

///////////////////////////// Modal open/close logic ///////////////////////////////////////////////////
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('.overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click',() => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click',() => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click',() => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
 
/////////Create Ret //////////////

const NyRet = [];

NyRet.push(mad.ret)





