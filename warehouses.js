const link = "https://warehouses.onrender.com/search";
function checkZero(term){
  let newTerm = term;
  
  if(term[0] == 0 && term.length > 1){
    newTerm = term.substring(1, term.length);
  }

  return newTerm;
}
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async () => {
    const term = document.getElementById('term').value;
    term = checkZero(term);
    const response = await fetch(`${link}?term=${term}`);
    const warehouses = await response.json();
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    if (warehouses.length === 0) {
        resultDiv.innerHTML = "";
        errorDiv.innerHTML = "No result found for the search term";
    } else {
        errorDiv.innerHTML = "";
        resultDiv.innerHTML = `
       <table>
          <thead>
              <tr>
                  <th>Store Number</th>
                  <th>Warehouse Name</th>
                  <th>Address</th>
                
              </tr>
          </thead>
          <tbody>
              ${warehouses.map(warehouses => {
            return `
              <tr>
                  <td class="copy" data-clipboard-text="${warehouses.warehouseId}">${warehouses.warehouseId}</td>
                  <td class="copy" data-clipboard-text="${warehouses.warehouseName}">${warehouses.warehouseName}</td>
                  <td class="copy" data-clipboard-text="${warehouses.ADDRESS}">${warehouses.ADDRESS}</td>
                 
              </tr>
              `
        }).join('')}
          </tbody>
      </table> 
      `
    }
});

const copyButtons = document.querySelectorAll('.copy');
for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', (e) => {
        const itemData = e.target.dataset.clipboardText;
        navigator.clipboard.writeText(itemData);
        e.target.classList.add('copied');
    });
}
