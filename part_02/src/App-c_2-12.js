import { useState, useEffect } from "react";
import axios from "axios";
 
const Languages = ({ languages }) => {
  var lst = [];
  for (let item in languages) {
    lst = lst.concat(languages[item]);
  };

  return (
    <ul>
      {lst.lenth !== 0 ? lst.map(x => <li key={x}>{x}</li>) : "no language"}
    </ul>
  )
};

const CountryDetail = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>

      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      
      <div>
        <p><strong>languages:</strong> </p>
        <Languages languages={country.languages} />
      </div>

      <div>
        <img src={country.flags.png} alt="nothing over there" />
      </div>
    </div>
  )
};

const Button = (props) => {
  const handleShow = (country) => () => {
    return <CountryDetail country={country} />
  };
  return (
    <button onClick={handleShow} >
      {props.text}
    </button>
  )
};

const CountriesItem = (props) => <p> {props.country.name.common} <Button country={props.country} text="show" /> </p>;

const Countries = ({ countries }) => {
  const showDetail = (event) => {
    event.preventDefault();
  };
  // {countries.map(obj => <CountriesItem key={obj.name.official} country={obj}/>)}
  return (
    <div>
      <form onSubmit={showDetail}>
      {countries.map(obj => <p key={obj.name.official}> {obj.name.common} <button type="submit"> show </button></p>)}
      </form>
    </div>
  )
};

const Filter = (props) => {
  const result = props.countries.filter(item => item.name.common.toUpperCase().indexOf(props.searchText.toUpperCase()) !== -1);

  if (result.length > 10) {
    return <p>"Too many matched, specify another filter"</p>

  } else if (result.length === 1) {
    return <>{result.map(obj => <CountryDetail key={obj.name.official} country={obj} /> )}</>

  } else if (result.length === 0){
    return <p>"nothing over there after matched"</p>

  } else {
    return <Countries countries={result} />
  };
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setsearchText] = useState('');

  const hook = () => {
      console.log("effect");
      axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        console.log('promise fulfilled');
        setCountries(response.data);
      });
  };
  useEffect(hook, []);
  console.log('render', countries.length, 'countries');

  const handlesearchText = (event) => {
    console.log(`searching ${event.target.value}`);
    setsearchText(event.target.value);
  };
  return (
    <>
    <div>
      find countries <input value={searchText} onChange={handlesearchText} />
      <Filter 
        countries={countries} 
        searchText={searchText}
        handlesearchText={handlesearchText}
        />
    </div>
    </>
  )
};

export default App