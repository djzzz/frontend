import { Table, Create, Details} from '../components';
import { useState, useEffect } from 'react';
import { People } from '../helpers/people';
import { GetCity } from '../helpers/city';
import { GetCountry } from '../helpers/country';

export function Main({ children }) {
    useEffect(() => {
        get();
    });
    const [selected, setSelect] = useState(-1)
    
    const [add, get, remove, people] = People();
    
    const cities = GetCity();
    const countrys = GetCountry();
    
    return (
        <>
            <Table>
                {
                    people.map(person =>{
                        return <Table.Row key={person.peopleId}>
                            <Table.Name>{person.name}</Table.Name>
                            <Table.Button onClick={() => setSelect(person.peopleId)}>Mer info</Table.Button>
                            <Table.Delete onClick={() => remove(person.peopleId)}>Ta Bort</Table.Delete>
                                {
                                person.peopleId === selected ? 
                                (
                                    <Details key={person.peopleId}>
                                        <Details.PhoneNumber>Telefon:{person.number}</Details.PhoneNumber>
                                    
                                        {cities.filter(city => city.cityId === person.cityId)
                                            .map(city => {
                                                return <>
                                                <Details.City>Stad: {city.name}</Details.City>

                                                {countrys.filter(country => country.countryId === city.countryId)
                                                .map(country => {
                                                    return <Details.Country> Land: {country.name}</Details.Country>
                                                })}

                                                </>
                                            })
                                        }
                                    </Details>
                                ) : ('')
                                }
                                
                            
                        </Table.Row>
                    })
                }
                
            </Table>
            <Create>
                <Create.Form onSubmit={add}>
                    <Create.Input placeholder="Name" name="Name"></Create.Input>
                    <Create.Input placeholder="Number" name="Number"></Create.Input>
                    <Create.Dropdown name="City">
                        {
                            cities.map((city) =>{
                                return <Create.Alternative value={city.cityId}>{city.name}</Create.Alternative>
                            })
                        }
                        
                    </Create.Dropdown>
                    <Create.Submit value="lägg till"></Create.Submit>
                </Create.Form>
            </Create>
        </>
    )
}