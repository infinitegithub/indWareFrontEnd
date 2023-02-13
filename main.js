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
                 <td>${store.StoreNumber}<span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
<td>
  ${store.StoreName}
  <span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
<td>
  ${store.LeadershipTeamEemail}
  <span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
<td>
  ${store.Phone}
  <span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
<td>
  ${store.Brand}
  <span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
<td>
  ${store.Address}
  <span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
<td>
  ${store.City}
  <span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
<td>
  ${store.Provance}
  <span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
<td>
  ${store.PostalCode}
  <span class="copy-icon"><i class="fas fa-copy"></i></span>
</td>
</tr>
              `
    }).join('')}
          </tbody>
      </table> 
      `
  }
});


