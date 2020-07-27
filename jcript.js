(async() => {
  
  const req = await fetch('https://api.github.com/repos/khalby786/jiopycat/contents/jiocat.json');
  const res = await req.json();
  let content = res.content;
  
  const decodedData = JSON.parse(window.atob(content));
  
  // https://stackoverflow.com/questions/18837735/check-if-image-exists-on-server-using-javascript
  function imageExists(image_url){
    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;
  }
  
  decodedData.forEach(copy => {
    
    let div = document.createElement("div");
    
    console.log(decodedData)
    
    let text;
    if (copy.description === undefined || copy.description === null || copy.description === "") {
      text = " "
    } else {
      text = copy.description;
    }
    
    if (copy.logo === " " || copy.logo === "" || !copy.logo) {
      div.innerHTML = `<h2>${copy.title}</h2><p class="description">${text}</p><br>`;
    } else {
      div.innerHTML = `<h2>${copy.title}</h2><img src="${copy.logo}" width="15%"><p class="description">${text}</p><br>`;
    }
        
    div.className = "block";
    document.body.appendChild(div);
    
  })
  
})()
