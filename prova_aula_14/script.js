const btns = document.getElementById('btns');
const imgs = document.getElementById('imgs');

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response =>{
        if(!response.ok){
            throw new Error('A solicitação não foi bem-sucedida');
        }
        return response.json();
    })
    .then(data =>{
        const racas = data.message;
        Object.keys(racas).forEach(raca =>{
            const dogBtn = document.createElement('button');
            dogBtn.textContent = raca;
            btns.appendChild(dogBtn);

            dogBtn.addEventListener('click',()=>{
                imgs.innerHTML = '';
                fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
                   .then(response =>{
                    if(!response.ok){
                        throw new Error('A solicitação não foi bem-sucedida');
                    }
                    return response.json();
                })
                .then(data=>{
                    const img = document.createElement('img');
                    img.src = data.message;
                    imgs.appendChild(img);
                })
            })
        })
    })
    .catch(error => {
        console.error('Erro', error);
    });