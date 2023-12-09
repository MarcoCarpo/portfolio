import { useData } from './helpers/customHooks';
import { useAppContext } from './context/useAppContext';
import { AppContextType } from './context/AppContext';
import { Container } from './components';
import { ExperienceSection, HomeSection, SkillSection } from './sections';

function App() {
    const { isLoading } = useData();
    const { selectedSection } = useAppContext() as AppContextType;

    if (isLoading) {
        return <>Loading...</>;
    }

    return (
        <Container>
            {selectedSection === 'Home' && <HomeSection />}
            {selectedSection === 'Experience' && <ExperienceSection />}
            {selectedSection === 'Skills' && <SkillSection />}
        </Container>
    );
}

export default App;
