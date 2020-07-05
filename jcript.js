(async() => {
  
  const req = await fetch('https://api.github.com/repos/khalby786/jiopycat/git/blobs/33e8620fc9598933e57955920cd69643a2183c66');
  const res = await req.json();
  let content = res.content;
  
  const decodedData = JSON.parse(window.atob(content));
  
  decodedData.forEach(copy => {
    
    let div = document.createElement("div");
    
    if (copy.logo === " " || copy.logo === "" || !copy.logo) {
      div.innerHTML = `<h2>${copy.title}</h2><p class="description">${copy.description}</p><br>`;
    } else {
      div.innerHTML = `<h2>${copy.title}</h2><img src="${copy.logo}" width="100%"><p class="description">${copy.description}</p><br>`;
    }
    
    div.className = "block";
    document.body.appendChild(div);
    
  })
  
})()
