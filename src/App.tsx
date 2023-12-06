import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useData } from './helpers/customHooks';
import { Container, Icon } from './components';

function App() {
    const { data, isLoading } = useData();

    if (isLoading) {
        return <>Loading...</>;
    }

    return (
        <Container>
            {data?.bio.name} <Icon icon={faCircleUser} />
        </Container>
    );
}

export default App;
