
    const stack = document.querySelector('.stack');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // let Button2 = document.getElementById("myself");

    // Button2.addEventListener("click", ()=>{
    //     Button2.style.visibility = "visible"
    // });

    stack.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) =>{
        if (link.style.animation) {
            link.style.animation = '';
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    stack.classList.toggle('cross');

    });

