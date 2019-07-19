let circle = document.querySelector('.circle');
let time = document.querySelector('h4');
const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);


    return `rgb(${r}, ${g}, ${b})`
}

const randomPosition = () => {
    let p = Math.floor(Math.random() * 60) + 1;

    return p + `%`

}


let t2 = 0;
let t1 = 0;
let count = 0;
circle.addEventListener('click', (e) => {
    //    console.log(performance.now());
    count++;
    let lastt2 = t2;
     t2 = new Date().getTime();



    circle.style.display = 'none'

    setTimeout(function () {
        circle.style.backgroundColor = randomColor();
        circle.style.top = randomPosition();
        circle.style.left = randomPosition();
        circle.style.display = 'block'
        let t1 = new Date().getTime();

    
        let mesage = `your Time: ${(((t1 - 100) - lastt2) / 1000)} Seconds`
       console.log(mesage);
       if(count > 1) {
        time.textContent = mesage;

       }

    }, 100)






})



