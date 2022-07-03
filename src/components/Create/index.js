import {
    Container,
    Form,
    Input,
    Dropdown,
    Alternative,
    Submit
} from './style/create';
export default function create({ children }) {

    return (
        <Container>{children}</Container>
    )
}
create.Form = function ({children, ...restProps}){
    return (
        <Form {...restProps}>{children}</Form>
    )
}
create.Input = function ({children, ...restProps}){
    return (
        <Input type="text" {...restProps}>{children}</Input>
    )
}
create.Dropdown = function({children, ...restProps}){
    return (
        <Dropdown {...restProps}>{children}</Dropdown>
    )
}
create.Alternative = function({children, ...restProps}){
    return (
        <Alternative {...restProps}>{children}</Alternative>
    )
}
create.Submit = function({...restProps}){
    return (
        <Submit type="submit" {...restProps}></Submit>
    )
}