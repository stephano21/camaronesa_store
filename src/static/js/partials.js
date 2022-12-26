export function card(list){
    let template=''
    let flag=0;
    list.forEach(item => {
        if (flag==0){
            template+=`
            <div class="carousel-item active">
                <div class="card" style="width: 18rem;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Six-handed_500_playing_cards.jpg/1200px-Six-handed_500_playing_cards.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.detail}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `; flag+=1 
        }else{
            template+=`
            <div class="carousel-item">
                <div class="card" style="width: 18rem;">
                    <img src="https://5sbstephanochang.000webhostapp.com/test/solicitudes/c58eb6af9d.png">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.detail}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `;
        }
    });
    return template
    
    
};
export function create_model(img){
    let template=`
    <div class="d-flex align-items-center justify-content-center">
        <img class="img-fluid" src="${img}" alt="" >
    </div>           
    `;
    return template;
}


