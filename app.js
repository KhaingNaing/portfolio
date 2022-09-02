// select everything that share the same class
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');       // parent
const sectBtn = document.querySelectorAll('.control');          // acutal buttons
const allSections = document.querySelector('.main-content');    // main body (querySelector)

function PageTransitions(){
    // active class when the button is click 
    for(let i = 0; i < sectBtn.length; i++) {
        // listen to whatever button that is clicked on
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            // when not click anymore => get rid of the 'active-btn' class on that button
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            // this => refers to the PageTransitions func 
            // bring me to the page 
            this.className += ' active-btn'
        }) 
    }
    // Section active class
    // for each section listen the click 
    allSections.addEventListener('click',  (e)=>{
        // clickEvent targets the data (about, blogs etc)
        const id = e.target.dataset.id;
        // if data-id exist
        if (id) {
            // remove selected/active from the other btns 
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            // active the selected section data
            e.target.classList.add('active')
            // hide other sections
            sections.forEach((section)=> {
                section.classList.remove('active')
            })
            
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=> {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', ()=> {
        form.elements['name'].value="";
        form.elements['email'].value="";
        form.elements['subject'].value="";
        form.elements['message'].value="";
    })
}

// Call the function
PageTransitions();

