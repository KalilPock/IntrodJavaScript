        function calcularMedia(){
            //Seleciona os elementos de entrada pelo ID
            const inputValor1 = document.getElementById('valor1')
            const inputValor2 = document.getElementById('valor2')

            //Query
            const inputs = document.querySelectorAll('button[type="submit"]')

            //Percorrer cada input e adiciona a classe CSS "destaque-input"
            inputs.forEach(input => {
                input.classList.add('destaque-input')
            })

            //Pega os valores e converte para um NUMERO
            const valor1 = parseFloat(inputValor1.value);
            const valor2 = parseFloat(inputValor2.value);

            // || operador "Lógico" OU 
            // Se valor1 é NaN OU valor 2 é NaN = execute isso
            if(isNaN(valor1) || isNaN(valor2)){
                alert("Por favor, insira apenas valores validos!")
                return; //interrompe a função
            }

            //Realiza o calculo
            const soma = valor1 + valor2;
            const media = soma / 2;
            
            //Exibindo o resultado na página
            const elementoResultado = document.getElementById('resultado');
            elementoResultado.textContent = "Sua média é: " + media.toFixed(2)

        }