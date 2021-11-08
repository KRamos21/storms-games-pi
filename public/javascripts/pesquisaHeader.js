async function pesquisarTitulo(input) {
  const menuBar = document.getElementById("menu__searchbar");
  const results = document.getElementById("results");

  if ( results === null ){
    let results = document.createElement("div");
    results.id = "results"
    menuBar.parentNode.appendChild(results);

    results.style.background = "white"
    results.style.position = "absolute";
    results.style.zIndex = "1000"
    results.style.left = menuBar.getBoundingClientRect().left + "px";
    results.style.top = menuBar.getBoundingClientRect().bottom + "px";
    results.style.width = menuBar.getBoundingClientRect().width + "px";
    results.style.borderBottomLeftRadius = "5px";
    results.style.borderBottomRightRadius = "5px"
  } else {
    results.innerHTML = "";

    menuBar.style.borderBottomLeftRadius = "0px";
    menuBar.style.borderBottomRightRadius = "0px"
  }
  
  if ( input.value !== "") {
    try {
      let { data } = await axios.get(`http://localhost:3000/jogo/pesquisar/${input.value}`);
      
      if ( data.length > 5) {
        data = data.slice(0, 5);
      };
  
      data.forEach(element => {
        results.insertAdjacentHTML("beforeend", `
          <div class="results__div">
            <a href="/jogo/${element.id}">${element.titulo}</a>
          </div>
        `)
      });
    } catch (error) {}  
  } else {
    menuBar.style.borderBottomLeftRadius = "5px";
    menuBar.style.borderBottomRightRadius = "5px"
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const user = document.getElementById("user");

  if (window.innerWidth < 900) {
    user.removeAttribute("href");
    user.setAttribute("onclick", "exibirMenu(this)")
  } else {
    user.href = "/conta";
    user.removeAttribute("onclick");
  }
});

window.addEventListener("resize", () => {
  const user = document.getElementById("user");

  if (window.innerWidth < 900) {
    user.removeAttribute("href");
    user.setAttribute("onclick", "exibirMenu(this)")
  } else {
    user.href = "/conta";
    user.removeAttribute("onclick");
  }
})

function exibirMenu(user) {
  const menuBar = document.getElementById("menu__searchbar");

  const header = document.getElementById("header");
  const menuOculto = document.getElementById("menu-oculto");

  if (menuOculto.classList.contains("menu-oculto--hidden")) {
    menuOculto.classList.remove("menu-oculto--hidden");
    
    menuOculto.style.position = "absolute";
    menuOculto.style.zIndex = "999"
    menuOculto.style.right = header.getBoundingClientRect().left + "px";
    menuOculto.style.top = header.getBoundingClientRect().bottom + "px";;
    menuOculto.style.width = (window.innerWidth / 2) + "px";
  } else {
    menuOculto.removeAttribute("style");

    menuOculto.classList.add("menu-oculto--hidden")
  }
}