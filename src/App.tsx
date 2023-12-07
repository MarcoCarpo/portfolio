import { useData } from './helpers/customHooks';
import { Container } from './components';
import { useAppContext } from './context/useAppContext';
import { AppContextType } from './context/AppContext';

function App() {
    const { isLoading } = useData();
    const { selectedSection } = useAppContext() as AppContextType;

    if (isLoading) {
        return <>Loading...</>;
    }

    switch (selectedSection) {
        case 'Home':
            return (
                <Container>
                    <h1>Home</h1>
                </Container>
            );
        case 'Experience':
            return (
                <Container>
                    <h1>Experience</h1>
                </Container>
            );
        case 'Skills':
            return (
                <Container>
                    <h1>Skills</h1>
                </Container>
            );

        default:
            return (
                <Container>
                    <h1>Home</h1>
                </Container>
            );
    }
}

export default App;
