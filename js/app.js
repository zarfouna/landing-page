
 
/**
 * Define Global Variables
 * 
*/
const sectionsList=document.querySelectorAll("section") 
const menuUl=document.getElementById('navbar__list') //refence to DOM ul
const hamburger = document.querySelector(".hamburger");
 
      
let linksList=[]
let activeIndex=0  //'section1' first selected active section
sectionsList[activeIndex].classList.add('active')
// build the nav
for(let i=0;i<sectionsList.length;i++){
    const newLi=document.createElement('li')
    const a=document.createElement('a')
    newLi.classList.add('nav-item')
    if(i===activeIndex){
        a.classList.add('active')
    }

     
    a.classList.add('nav-link')
    a.setAttribute('id',`${i}`)
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
    event.preventDefault()
    // remove active from previous section
    linksList[activeIndex].classList.remove('active')
    sectionsList[activeIndex].classList.remove('active')
    //add active to new section
    sectionsList[selectedIndex].classList.add('active')
    linksList[selectedIndex].classList.add('active')
 
    activeIndex=selectedIndex

    closeMenu()
 // add smooth scrolling feature /////
 sectionsList[selectedIndex].scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
});
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
 
      
      hamburger.addEventListener("click", mobileMenu);
      
      function mobileMenu() {
          hamburger.classList.toggle("active2");
          menuUl.classList.toggle("active2");
      }
 
      
      
      
      function closeMenu() {
          hamburger.classList.remove("active2");
          menuUl.classList.remove("active2");
      }