let rainMode = document.querySelector('#rain');
let mode = false;

function applyTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";

    applyTheme(savedTheme);

    for (const optionElement of document.querySelectorAll("#theme option")) {
        optionElement.selected = savedTheme === optionElement.value;
    }

    document.querySelector("#theme").addEventListener("change", function () {
        localStorage.setItem("theme", this.value);
        applyTheme(this.value);
    });
});

rainMode.addEventListener('click', function(){
    if (mode == false) {
        mode = true;
        rain();
    }
})

function rain() {
        let amount = 20;
        let header = document.querySelector('header');
        let i = 0;
        while (i < amount) {
            let drop = document.createElement('i');
    
            let size = Math.random() * 5;
            let posX = Math.floor((Math.random() * window.innerWidth));
    
            let delay = Math.random() * - 20;
            let duration = Math.random() * 5;
    
            drop.style.width = 0.2 + size + 'px';
            drop.style.left = posX + 'px';
            drop.style.animationDelay = delay + 's';
            drop.style.animationDuration = 1 + duration + 's';
            header.appendChild(drop);
            i++;
    }  
}


