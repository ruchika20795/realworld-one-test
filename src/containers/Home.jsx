import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            <h2>Welcome viewer!</h2>
            <h4>Click on any of these links to visit the pages. Happy surfing!</h4>
            <ul>
                <li>
                    <Link to="/data">Data</Link>
                </li>
                <li>
                    <Link to="/performance">Performance</Link>
                </li>
            </ul>
        </Container>
    );
}

const Container = styled.section`
    padding: 40px;
`;
