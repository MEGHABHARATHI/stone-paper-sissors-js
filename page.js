function subscribe(){
            const btn = document.querySelector('.subscribe');
            if (btn.innerText === "Subscribed"){
                btn.innerText = "Subscribe";
                return;
            }
            else 
            btn.innerText = "Subscribed";   
        }

        function handle(event){
            if (event.key === 'Enter')
            calculateShipping();
        }

        function calculateShipping(){
            
            const value = document.querySelector('#weight').value;
            const price =Number(value);
            if (price <500 ){
                const ship=50;
                let cost= price+ship
                document.querySelector('.shipping-cost').innerHTML = `Shipping cost is ${ship} Rs`;
                document.querySelector('.total-cost').innerHTML = `Total cost is ${cost} Rs`;
            }
            else {
                let cost= price;
                document.querySelector('.shipping-cost').innerHTML = `Free Shipping`;
                document.querySelector('.total-cost').innerHTML = `Total cost is ${cost} Rs`;

            }
        }