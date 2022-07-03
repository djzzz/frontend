import axios from "axios"
import { useState, useEffect} from "react"
export function GetCity() {
    const [city, setCity] = useState([]);
    useEffect(() => {
        
        if(isEmpty(city)){
            axios.get('https://localhost:44376/api/city')
            .then(response => setCity(response.data))
        }
    });
    
    return city;
}
function isEmpty(object) {
    for (const property in object) {
      return false;
    }
    return true;
  }