  
  const mandag = document.querySelector('.mandag')
  const tirsdag = document.querySelector('.tirsdag')
  const onsdag = document.querySelector('.onsdag')
  const torsdag = document.querySelector('.torsdag')
  const fredag = document.querySelector('.fredag')
  const lørdag = document.querySelector('.lørdag')
  const søndag = document.querySelector('.søndag')
  const indkøb = document.querySelector('.indkøb')
  const seRetter = document.querySelector('.se-retter').addEventListener('click', getRandom)

  
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
  

//Shuffle the data from mad[]
function setRandom(){
  const random = mad[Math.floor(Math.random() * mad.length)]
  return random
}

// get the shuffled data from setRandom()
function getRandom(){
 
  let setNewRandom = [];
  
  /*  for (let index = 0; index < 1000; index++) {
    setNewRandom[index].push(setRandom())
    setNewRandom[index] = [...new Set(setNewRandom)]

    mandag.textContent = " " + setNewRandom[0].ret
    tirsdag.textContent = " " + setNewRandom[1].ret
    onsdag.textContent = " " + setNewRandom[2].ret
    torsdag.textContent = " " + setNewRandom[3].ret
    fredag.textContent = " " + setNewRandom[4].ret
    lørdag.textContent = " " + setNewRandom[5].ret
    søndag.textContent = " " + setNewRandom[6].ret

  }  */ 

// Push the shuffled data from setRandom() to an empty array  
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

  // filter out any duplicates from setNewRandom
  setNewRandom = [...new Set(setNewRandom)]  
  
  // display the content on the site
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


///////////////////////////// Modal open/close logic ///////////////////////////////////////////////////
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('.overlay');
const resetModal = document.querySelector('.modal');

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
    retText.focus();
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


 
/////////Create Ret //////////////

const retText = document.querySelector('.title-text');
const ingredienserOne = document.querySelector('.ingredienser-one');
const ingredienserTwo = document.querySelector('.ingredienser-two');
const ingredienserThree = document.querySelector('.ingredienser-three');
const ingredienserFore = document.querySelector('.ingredienser-fore');
const submit = document.querySelector('.submit-button');

submit.addEventListener('click', nyret);

function nyret() {

// adds new ingredienser to the new ret object: nyRet
  let nyIngredienser = []
  nyIngredienser.push(ingredienserOne.value)
  nyIngredienser.push(ingredienserTwo.value)
  nyIngredienser.push(ingredienserThree.value)
  nyIngredienser.push(ingredienserFore.value)

// Filter empty ingredienser elementer  
  const filteredIngredienser = nyIngredienser.filter(function (el){
     return el !== "";
    })


// indholdet af nyRet object    
 let nyRet = {
  ret: retText.value,
  ingredienser: filteredIngredienser
 }

 
 // Ignore if there is an empty string in the retText input field when submitting modal
 function ignoreEmpty() {
  if (retText.value === ""){
    mad.push(nyRet);
    mad.pop();
  }else{
    mad.push(nyRet);
    retText.value = "";
    ingredienserOne.value = "";
    ingredienserTwo.value = "";
    ingredienserThree.value = "";
    ingredienserFore.value = "";    
  }
}
  console.log(mad);
ignoreEmpty()
  
}


 

