
 
/**
 * Define Global Variables
 * 
*/
const sectionsList=document.querySelectorAll("section") 
const menuUl=document.getElementById('navbar__list') //refence to DOM ul
let linksList=[]
let activeIndex=0  //'section1' first selected active section
sectionsList[activeIndex].classList.add('active')
// build the nav
for(let i=0;i<sectionsList.length;i++){
    const newLi=document.createElement('li')
    const a=document.createElement('a')
    if(i===activeIndex){
        a.classList.add('active')
    }
    a.classList.add('menu__link')
    a.setAttribute('id',`${i}`)
    a.setAttribute('href',`#${sectionsList[i].id}`)
     console.log(a)
     a.addEventListener('click', setActive )
     a.appendChild( document.createTextNode(sectionsList[i].attributes['data-nav']['nodeValue']))
     linksList.push(a)
     newLi.appendChild(a)
    
    menuUl.appendChild(newLi)
    
}
/**
 * Begin Functions
 * 
*/

function setActive(event){
    
    const selectedIndex=Number(event.target.id)
   
    // remove active from previous section
    linksList[activeIndex].classList.remove('active')
    sectionsList[activeIndex].classList.remove('active')
    //add active to new section
    sectionsList[selectedIndex].classList.add('active')
    linksList[selectedIndex].classList.add('active')
 
    activeIndex=selectedIndex

     ///////// using Element.getBoundingClientRect() /////////
    }

    function scrolling()  {

        for(let i=0;i<sectionsList.length;i++){
            if(sectionsList[i].getBoundingClientRect().top >= -200 && sectionsList[i].getBoundingClientRect().top <= 350){
    
                sectionsList[i].classList.add("active");
                linksList[i].classList.add("active");
            
                }
                else{
                    sectionsList[i].classList.remove("active");
                    linksList[i].classList.remove("active");
                }

        }
        
    }
      document.addEventListener('scroll', scrolling);
      scrolling()
 
