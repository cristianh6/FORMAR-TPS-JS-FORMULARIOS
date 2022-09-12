window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    console.log('success')
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    const qs = (element) => document.querySelector(element);
    const qsa = (element) => document.querySelectorAll(element);
    const $ = (element) => document.getElementById(element);

    // ELEMENTS //
    let title = $('title');
    let rating = $('rating');
    let awards = $('awards');
    let release_date = $('release_date');
    let length = $('length');
    let genre_id = $('genre_id');

    // ERRORS //
    let errores = {};
    qs('.error-title');
    qs('.error-rating');
    qs('.error-awards');
    qs('.error-release');
    qs('.error-length');
    qs('.error-Genre');
    
    // EVENTS //  

    title.focus()

    title.addEventListener('blur', function(e){
        if(!e.target.value){
            title.classList.add("is-invalid")
            qs('.error-title').classList.add("is-invalid")
            qs('.error-title').innerHTML = "Debe ingresar un título"
        }else{
            qs('.error-title').classList.remove("is-invalid")
            qs('.error-title').innerHTML = ""
            title.classList.remove("is-invalid")
            title.classList.add("is-valid")
        }
    })

    rating.addEventListener('blur', function(e){
        if(!e.target.value){
            rating.classList.add("is-invalid")
            qs('.error-rating').classList.add("is-invalid")
            qs('.error-rating').innerHTML = "Debe ingresar un rating"
        } else if((e.target.value > 10 || e.target.value < 0)){
            rating.classList.add("is-invalid")
            qs('.error-rating').classList.add("is-invalid")
            qs('.error-rating').innerHTML = "El rating debe ser un valor del 1 al 10"
        }else{
            qs('.error-rating').classList.remove("is-invalid")
            qs('.error-rating').innerHTML = ""
            rating.classList.remove("is-invalid")
            rating.classList.add("is-valid")
        }
    })

    awards.addEventListener('blur', function(e){
        if(!e.target.value){
            awards.classList.add("is-invalid")
            qs('.error-awards').classList.add("is-invalid")
            qs('.error-awards').innerHTML = "Debe ingresar una cantidad de premios"
        }else if((e.target.value > 10 || e.target.value < 0)){
            awards.classList.add("is-invalid")
            qs('.error-awards').classList.add("is-invalid")
            qs('.error-awards').innerHTML = "Los premios deben tener un valor del 1 al 10"
        }else{
            qs('.error-awards').classList.remove("is-invalid")
            qs('.error-awards').innerHTML = ""
            awards.classList.remove("is-invalid")
            awards.classList.add("is-valid")
        }
    })

    release_date.addEventListener('blur', function(e){
        if(!e.target.value){
            release_date.classList.add("is-invalid")
            document.querySelector(".error-release").classList.add("is-invalid")
            document.querySelector(".error-release").innerHTML = "Debe ingresar una fecha"
        }else{
            qs('.error-release').classList.remove("is-invalid")
            qs('.error-release').innerHTML = ""
            release_date.classList.remove("is-invalid")
            release_date.classList.add("is-valid")
        }
    })

    length.addEventListener('blur', function(e){
        if(!e.target.value){
            length.classList.add("is-invalid")
            qs('.error-length').classList.add("is-invalid")
            qs('.error-length').innerHTML = "Debe ingresar una duración"
        }else if ((e.target.value > 360 || e.target.value < 60)){
            length.classList.add("is-invalid")
            qs('.error-length').classList.add("is-invalid")
            qs('.error-length').innerHTML = "La película debe durar entre 60 min y 360 min"
        }else{
            qs('.error-length').classList.remove("is-invalid")
            qs('.error-length').innerHTML = ""
            length.classList.remove("is-invalid")
            length.classList.add("is-valid")
        }
    })

    genre_id.addEventListener('blur', function(e){
        if(!e.target.value){
            genre_id.classList.add("is-invalid")
            qs('.error-genre').classList.add("is-invalid")
            qs('.error-genre').innerHTML = "Debe ingresar un valor para el genero"
        }else{
            qs('.error-genre').classList.remove("is-invalid")
            qs('.error-genre').innerHTML = ""
            genre_id.classList.remove("is-invalid")
            genre_id.classList.add("is-valid")
        }
    })

    formulario.addEventListener('submit', function(e){
        e.preventDefault()
        let error = 0;
        
        for (let i = 0; i < form.elements.length - 1; i++) {
            if(!form.elements[i].value){
                error = 1;
                form.elements[i].classList.add("is-invalid")
            }
        }

        for (let i = 0; i < form.elements.length; i++) {
            if(form.elements[i].classList.contains("is-invalid")){
                error = 1;
            }
        }

        if(!error){
            alert("La película se guardo exitosamente")
            document.querySelector(".errores").innerHTML = ""
            document.querySelector(".errores").classList.remove("alert-warning")
            e.target.submit()
        }else{
            document.querySelector(".errores").innerHTML = "Debe rellenar los campos"
            document.querySelector(".errores").classList.add("alert-warning")
        }
    })
}