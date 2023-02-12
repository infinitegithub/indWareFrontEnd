const link = "https://indiware.mooo.com/search";

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async () => {
  const term = document.getElementById('term').value;

  const response = await fetch(`${link}?term=${term}`);
  const stores = await response.json();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  if (stores.length === 0) {
    resultDiv.innerHTML = "";
    errorDiv.innerHTML = "No result found for the search term";
  } else {
    errorDiv.innerHTML = "";
    resultDiv.innerHTML = `
       <table>
          <thead>
              <tr>
                  <th>Store Number</th>
                  <th>Store Name</th>
                   <th>LeadershipTeam Email</th>
                    <th>Phone</th>
                  <th>Brand</th>
                  
                  <th>Address</th>
                  <th>City</th>
                 
                  <th>Provance</th>
                  <th>Postal Code</th>
              </tr>
          </thead>
          <tbody>
              ${stores.map(store => {
      return `
              <tr>
                  <td class="copy" data-clipboard-text="${store.StoreNumber}">${store.StoreNumber}</td>
                 <td class="copy" data-clipboard-text="${store.StoreName}">${store.StoreName}</td>
                  <td class="copy" data-clipboard-text="${store.LeadershipTeamEemail}">${store.LeadershipTeamEemail}</td>
                  <td class="copy" data-clipboard-text="${store.Phone}">${store.Phone}</td>
    <td class="copy" data-clipboard-text="${store.Brand}">${store.Brand}</td>
                 
                  <td class="copy" data-clipboard-text="${store.Address}">${store.Address}</td>
                  <td class="copy" data-clipboard-text="${store.City}">${store.City}</td>
                  <td class="copy" data-clipboard-text="${store.Provance}">${store.Provance}</td>
                  <td class="copy" data-clipboard-text="${store.PostalCode}">${store.PostalCode}</td>
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
