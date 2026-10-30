    const Count_Mode = document.getElementById('count');
        const Increament_Mode = document.querySelector('.b1')
        const Reset_Mode = document.querySelector('.b2')
        const Decreament_Mode = document.querySelector('.b3')

        let count = 0;

        Increament_Mode.addEventListener("click", function(){
            count++;
            Count_Mode.textContent = count;
        });
        Reset_Mode.addEventListener("click", function(){
            count = 0;
            Count_Mode.textContent = count;

        });
        Decreament_Mode.addEventListener("click", function(){
            count--;
            Count_Mode.textContent = count;
            

        });
