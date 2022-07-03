import {
    Container,
    PhoneNumber,
    City,
    Country
} from './style/details';
export default function details({ children }) {
    return (
        <Container>{children}</Container>
    )
}
details.PhoneNumber = function DetailsPhoneNumber({children}){
    return (
        <PhoneNumber>{children}</PhoneNumber>
    )
}
details.City = function DetailsCity({children}){
    return (
        <City>{children}</City>
    )
}
details.Country = function DetailsCountry({children}){
    return (
        <Country>{children}</Country>
    )
}