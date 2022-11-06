function createGame(player1, hour, player2) {
  return `
     <li> <!--ITENS DA LISTA-->
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
     </li>
    `;
}

function createCard(date, day, games) {
  return `
      <div id="card">
        <h2>${date} <span>${day}</span></h2>
        <ul> <!--LISTA NÃO ORDENADA--> <!--CAIXA N*1-->
          ${games}
        </ul>
      </div>
    `;
}


document.querySelector("#app").innerHTML = `
  <header> <!--CABEÇALHO-->
      <img src="./assets/logo.svg" alt="Logo da NLW"/> <!-- ./ referencia aos arquivos a pasta-->
  </header>
  <main id="cards">
  ${createCard(
    "24/11",
    "quinta",
    createGame("brasil", "16:00", "camaroes") +
    createGame("brasil", "16:00", "camaroes") +
    createGame("brasil", "16:00", "camaroes") 
 )}
 ${createCard(
    "24/11",
    "quinta",
    createGame("brasil", "16:00", "camaroes") +
    createGame("brasil", "16:00", "camaroes") +
    createGame("brasil", "16:00", "camaroes") 
 )}

 </main>
 `