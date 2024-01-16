function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let x = document.createElement("div");
    x.classList.add("card");
    x.innerHTML = `
        <div class="image">
            <img src="${thumbnail}" alt="thumbnail">
            <div class="time">${duration}</div>
        </div>
        <div class="details">
            <h2>${title}</h2>
            <div class="general">
                <div class="channel_name">${cName}</div>
                <div class="dot">•</div>
                <div class="view">${views} views</div>
                <div class="dot">•</div>
                <div class="duration">${monthsOld} months ago</div>
            </div>
        </div>
    `
    document.querySelector(".container").append(x);
    console.log(x.classList);
}
function addCard(){
    let x = document.getElementById("form-input").elements;
    let title = x[0].value;
    x[0].value = "";
    let cName = x[1].value;
    x[1].value = "";
    let views = x[2].value;
    x[2].value = "";
    let monthsOld = x[3].value;
    x[3].value = "";
    let duration = x[4].value;
    x[4].value = "";
    let thumbnail = x[5].value;
    x[5].value = "";
    if(views > 1000000){
        views /= 1000000;
        views = Math.floor(views);
        views += "M";
    }
    else if(views > 1000){
        views /= 1000;
        views = Math.floor(views);
        views += "k";
    }
    createCard(title, cName, views, monthsOld, duration, thumbnail);
}