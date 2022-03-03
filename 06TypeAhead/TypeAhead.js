const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data))
 

  function findMatches(searchString , data){
      console.log('data', data.filter(i => i.city.toLowerCase().includes('York'.toLowerCase())))
    return  data.filter(i => i.city.toLowerCase().includes(searchString.toLowerCase()))
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  function displayMatch(){
      console.log('searchString', this.value)
      const resultArray = findMatches(this.value, cities)
      console.log('resultArray',resultArray)
      
      const html = resultArray.map(i => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = i.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = i.state.replace(regex, `<span class="hl">${this.value}</span>`);
         return ` <li>
         <span class="name">${cityName}, ${stateName}</span>
         <span class="population">${numberWithCommas(i.population)}</span>
       </li>`
     }).join('');
        suggestion.innerHTML = html
  }


  const searchInput = document.querySelector('.input-field');
  
  const suggestion = document.querySelector('.suggestions');

  searchInput.addEventListener('keyup', displayMatch);
  searchInput.addEventListener('change', displayMatch)
