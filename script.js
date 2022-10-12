let externo = document.querySelector(".externo");
let interno = document.querySelector(".interno");
let percent = document.querySelector("span");
let count = 0;

interno.addEventListener('click', function(){
    let loading = setInterval(animate, 200);
    function animate(){
        if(count == 100){
            clearInterval();
        }else{
            count = count + 1;
            percent.textContent = count + '%'
        }
    }
})