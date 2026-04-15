var titulo = document.querySelector(".container");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");


    for(var i = 0; i < paciente.length; i++){
        var tdPeso = paciente[i].querySelector(".info-peso");
        var tdAltura = paciente[i].querySelector(".info-altura");

        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;  

        var tdImc = paciente[i].querySelector(".info-imc");

        var PesoValido = validaPeso(peso);
        var AlturaValida = validaAltura(altura);

        if(!PesoValido){
            console.log("Peso Inválido");
            PesoValido = false;
            tdImc.textContent = "Peso Inválido";
            paciente[i].classList.add("pacienteInvalido");
        }
        if(!AlturaValida){
            console.log("Altura Inválida");
            AlturaValida = false;
            tdImc.textContent = "Altura Inválido";
            paciente[i].classList.add("pacienteInvalido");  
        }

        if(PesoValido == true && AlturaValida == true){
        var IMC = calculaImc(peso, altura);
        tdImc.textContent = IMC;
        }
    }

    function validaPeso(peso){
            if(peso < 0 || peso > 300){
                return false;
            }
            else{
                return true;
            }
    }


    function validaAltura(altura){
            if(altura < 0 || altura > 3){
                return false;
            }
            else{
                return true;
            }
    }


    function calculaImc(peso, altura){
        var IMC = 0;
        IMC = peso / (altura * altura);
        return IMC.toFixed(2);
    }

