import styled from 'styled-components';

export default function GridCardView({data}) {
    return (
        <Container>
            {data.map(d =>
                <CardWrapper key={d.id}>
                    <Name>{d.name}</Name>
                    <Email>{d.email}</Email>
                    <Desc>{d.body}</Desc>
                </CardWrapper>
            )}
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
`;

const Name = styled.h4`
    height: 40px;
`;

const Desc = styled.p`
    height: 75px;
`;
const Email = styled.p`
    height: 25px;
`;

const CardWrapper = styled.div`
    display: inline-block;
    width: 100%%;
    text-align: left;
    vertical-align: top;
    padding: 20px;
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.17);
    margin: 0 15px 15px 0;
    box-sizing: border-box;
    border: 1px solid #ececec;
    @media (min-width: 768px) {
        width: calc(50% - 15px);
    }
    @media (min-width: 1024px) {
        width: calc(33% - 15px);
    }
    @media (min-width: 1440px) {
        width: calc(25% - 15px);
    }
`;
