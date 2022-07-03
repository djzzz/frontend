import {
    Container,
    Button,
    Name,
    Row,
    Delete
} from './style/table';
export default function table({ children }) {
    return (
        <Container>{children}</Container>
    )
}
table.Row = function TableRow({children}){
    return (
        <Row>{children}</Row>
    )
}
table.Name = function TableName({children}){
    return (
        <Name>{children}</Name>
    )
}
table.Button = function TableButton({children , ...restProps}){
    return (
        <Button {...restProps} >{children}</Button>
    )
}
table.Delete = function TableDelete({children , ...restProps}){
    return (
        <Delete {...restProps} >{children}</Delete>
    )
}