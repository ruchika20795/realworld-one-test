import styled from 'styled-components';

export default function TableView({ data }) {
    return (
        <TableContaniner>
            <thead>
                <TableHeader>
                    <IdTD>ID</IdTD>
                    <NameTD>Name</NameTD>
                    <EmailTD>Email</EmailTD>
                    <BodyTD>Body</BodyTD>
                </TableHeader>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr key={d.id}>
                        <IdTD>{d.id}</IdTD>
                        <NameTD>{d.name}</NameTD>
                        <EmailTD>{d.email}</EmailTD>
                        <BodyTD>{d.body}</BodyTD>
                    </tr>)
                )}
            </tbody>
        </TableContaniner>
    );
}

const TableContaniner = styled.table`
    text-align: left;
    width: 100%;
`;

const TableHeader = styled.tr`
    font-weight: bold;
`;

const TableData = styled.td`
    border-bottom: 1px solid #ececec;
    padding: 5px 10px;
`;

const IdTD = styled(TableData)`
    width: 10%;
`;

const NameTD = styled(TableData)`
    width: 20%;
`;

const EmailTD = styled(TableData)`
    width: 25%;
`;

const BodyTD = styled(TableData)`
    width: 45%;
`;
