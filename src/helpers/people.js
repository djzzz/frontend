import axios from "axios"
import { useState} from "react"
export function People() {
    const [people, setPeople] = useState([]);
    function get(){
        axios.get('https://localhost:44376/api/people')
            .then(response => setPeople(response.data))
    }
    function remove(id){
        axios.delete(`https://localhost:44376/api/people/${id}`)
        .then(response =>{
            if(response.status === 204){
                console.log("removed")
            }
        })
        get()
    }
    function add(event){
        event.preventDefault();
        const name = event.target.Name.value;
        const number = event.target.Number.value;
        const cityid = event.target.City.value;

        const fd = new FormData();
        fd.append('Name', name);
        fd.append('Number', number);
        fd.append('City', cityid);
        axios({
            method: "post",
            url: "https://localhost:44376/api/people",
            data: fd,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(response =>{
            console.log("added")
            get();
        })
        .catch(error => {
            console.log(error)
        })
    }
    return [add, get, remove, people];
    
}