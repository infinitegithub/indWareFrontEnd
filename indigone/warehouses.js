
const link = "https://indiwares.mooo.com/search";
//const link = "https://backware.onrender.com/search";

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async () => {
    const term = document.getElementById('term').value;

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
                  <th>Distributor ID</th>
                  <th>Distributor Name</th>
                  <th>Address</th>
                
              </tr>
          </thead>
          <tbody>
              ${warehouses.map(warehouses => {
            return `
              <tr>
                  <td>${warehouses.warehouseId}</td>
                  <td>${warehouses.warehouseName}</td>
                  <td>${warehouses.ADDRESS}</td>
                 
              </tr>
              `
        }).join('')}
          </tbody>
      </table> 
      `
    }
});
