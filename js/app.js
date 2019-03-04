(function(){
    let counterValue = 0;

    const buttons = document.querySelectorAll(".counterBtn");
    const counter = document.getElementById("counter");

    buttons.forEach(function(btn){
        btn.addEventListener('click', function(event){
            //element we click
            const value = event.target;
            //console.log(value);

            //setting counter
            if(value.classList.contains('prevBtn')){
                counterValue--;
            }else if(value.classList.contains('nextBtn')){
                counterValue++;
            }
            counter.textContent=counterValue;

            //changing color
            if(counterValue===0){
                counter.style.color="#333333";
            }else if(counterValue<0){
                counter.style.color="#F6511D";
            }else if(counterValue>0){
                counter.style.color="#7fb800";
            }
        });
    });
})();