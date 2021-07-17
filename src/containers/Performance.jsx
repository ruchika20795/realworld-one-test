import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Performance({ data }) {
    return (
        <Container>
            <BackLink to="/">Back to Home</BackLink>
            <h3>Performance Data</h3>
            {data ? <>
                <DisplayCard name="Phase" value={data.phase} />
                <DisplayCard name="Actual Duration" value={data.actualDuration.toFixed(2)} />
                <DisplayCard name="Base Duration" value={data.baseDuration.toFixed(2)} />
                <DisplayCard name="Start Time" value={data.startTime.toFixed(2)} />
                <DisplayCard name="Commit Time" value={data.commitTime.toFixed(2)} />
            </> : <p>No data available</p>}
        </Container>
    );
}

function DisplayCard({ name, value }) {
    return (
        <CardWrapper>
            <strong>{name}</strong>
            <p>{value}</p>
        </CardWrapper>
    );
}

const Container = styled.section`
    padding: 30px;
    text-align: center;
    margin-top: 50px;
`;

const BackLink = styled(Link)`
    position: absolute;
    left: 30px;
    top: 30px;
`;

const CardWrapper = styled.div`
    display: inline-block;
    width: 300px;
    text-align: left;
    vertical-align: top;
    padding: 20px;
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.17);
    margin: 0 15px 15px 0;
    box-sizing: border-box;
    border: 1px solid #ececec;
`;
