// click me button 
const fetchButton = document.getElementById('#click-me');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  const requestUrl = 'https://www.loc.gov/{endpoint}/?fo=json';

  fetch(requestUrl)
    .then(function (response) {
      return response.json(); // this is a json string
    })
    .then(function (data) {
      console.log(data); // this is now an array of objects
      // ? We use a `for...of` loop here because it's a little less code than a traditional `for` loop. We also don't need to keep track of the index `(i)`.
      for (const repo of data) { 
        // Creating elements, tablerow, tabledata, and anchor
        const createTableRow = document.createElement('tr');
        const tableData = document.createElement('td');
        const link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = repo.html_url;
        link.href = repo.html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}


fetchButton.addEventListener('click', getApi());