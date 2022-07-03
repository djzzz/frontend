import axios from "axios"
import { useState, useEffect} from "react"
export function GetCountry() {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        
        if(isEmpty(country)){
            axios.get('https://localhost:44376/api/country')
            .then(response => setCountry(response.data))
        }
    });
    
    return country;
}
function isEmpty(object) {
    for (const property in object) {
      return false;
    }
    return true;
  }