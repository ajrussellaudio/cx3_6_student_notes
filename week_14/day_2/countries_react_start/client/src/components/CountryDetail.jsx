var React = require('react');

// var CountryDetail = React.createClass({
//   render: function(){
//     if(!this.props.country) {
//       return <h3>No country</h3>;
//     }
//     var country = this.props.country;
//     return(
//       <div>
//       <h3>{country.name}</h3>
//         <ul>
//           <li>Subregion: {country.subregion}</li>
//           <li>Population: {country.population}</li>
//           <li>Demonym: {country.demonym}</li>
//           <li>Capital: {country.capital}</li>
//           <li>Currencies: {country.currencies.join(', ')}</li>
//           <li>Country Code: {country.alpha3Code}</li>
//         </ul>
//       </div>
//     )
//   }
// })

// SAME AS:

var CountryDetail = function( props ) {
  if(!props.country) {
    return <h3>No country</h3>;
  }
  var country = props.country;
  return(
    <div>
      <h3>{country.name}</h3>
      <ul>
        <li>Subregion: {country.subregion}</li>
        <li>Population: {country.population}</li>
        <li>Demonym: {country.demonym}</li>
        <li>Capital: {country.capital}</li>
        <li>Currencies: {country.currencies.join(', ')}</li>
        <li>Country Code: {country.alpha3Code}</li>
      </ul>
    </div>
    )
}

module.exports = CountryDetail;
