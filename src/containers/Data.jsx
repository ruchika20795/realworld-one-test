import { useCallback, useState } from 'react';
import GridCardView from '../components/GridCardView';
import TableView from '../components/TableView';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Data() {
    const [data, setData] = useState(null);
    const [view, setView] = useState('grid');

    const getData = useCallback(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (res.ok) {
            return res.json().then((resp) => resp);
        }
        return Promise.reject(res);
    }, [])

    const handleButtonClick = () => {
        // Do not make api call once data is fetched
        if (!data) {
            getData()
                .then(res => {
                    setData(res);
                })
                .catch(err => console.log(err));
        }
    };

    const handleViewChange = (e) => {
        setView(e.target.value);
    }

    return ( 
        <Container>
            <BackLink to="/">Back to Home</BackLink>
            <DataFetcherBtn onClick={handleButtonClick}>Click me to fetch data</DataFetcherBtn>
            {data && data.length !== 0 ?
                <>
                    <ViewSwitcher>
                        <h3>You can switch the view:</h3>
                        <input type="radio" name="view" value="grid" id="grid-view" onChange={handleViewChange} defaultChecked />
                        <label htmlFor="grid-view">Grid</label>
                        <input type="radio" name="view" value="table" id="table-view" onChange={handleViewChange} />
                        <label htmlFor="table-view">Table</label>
                    </ViewSwitcher>
                    <Link to="/performance">See Performance</Link>
                    {view === 'grid' ? <GridCardView data={data} /> : <TableView data={data} />}
                </>
            : null}
        </Container>
    );
}

const Container = styled.section`
    padding: 30px;
    text-align: center;
`;

const DataFetcherBtn = styled.button`
    height: 50px;
    border: 1px solid #00acdf;
    background-color: #00acdf;
    color: white;
    font-size: 16px;
    cursor: pointer;
    font-weight: 700;
    margin-bottom: 20px;
`;

const ViewSwitcher = styled.div`
    margin-bottom: 20px;
    label {
        margin-right: 15px;
    }
`;

const BackLink = styled(Link)`
    position: absolute;
    left: 30px;
    top: 30px;
`;
