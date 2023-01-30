
const link = "https://indsto.onrender.com/search";
const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', async () => {
    const term = document.getElementById('term').value
    const response = await fetch(`${link}?term=${term}`)
    const stores = await response.json()
    const resultDiv = document.getElementById('result')
    const errorDiv = document.getElementById('error')

    if (stores.length === 0) {
        resultDiv.innerHTML = ""
        errorDiv.innerHTML = "No result found for the search term"
    } else {
        errorDiv.innerHTML = ""
        resultDiv.innerHTML = `
       <table>
          <thead>
              <tr>
                  <th>Store Number</th>
                  <th>Brand</th>
                  <th>LeadershipTeam Email</th>
                   <th>Phone</th>
                  <th>Store Name</th>
                  <th>Address</th>
                  <th>City</th>
                 
                  <th>Provance</th>
                  <th>Postal Code</th>
              </tr>
          </thead>
          <tbody>
              ${stores.map(store => {
            console.log(stores.length)
            return `
              <tr>
                  <td class="copy" data-clipboard-text="${store.StoreNumber}">${store.StoreNumber}</td>
                  <td class="copy" data-clipboard-text="${store.Brand}">${store.Brand}</td>
                  <td class="copy" data-clipboard-text="${store.LeadershipTeamEemail}">${store.LeadershipTeamEemail}</td>
                  <td class="copy" data-clipboard-text="${store.Phone}">${store.Phone}</td>
  
                  <td class="copy" data-clipboard-text="${store.StoreName}">${store.StoreName}</td>
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
const copyIcon = document.querySelector('.copy-icon');
copyIcon.addEventListener('click', (e) => {
    const itemData = e.target.closest('.copy').dataset.clipboardText;
    navigator.clipboard.writeText(itemData);
    copyButtons.classList.add('copied');
});