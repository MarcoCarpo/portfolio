import { useAppContext } from './context/useAppContext';
import { AppContextType } from './context/AppContext';
import { Container } from './components';
import { ExperienceSection, HomeSection, SkillSection } from './sections';

function App() {
    const { selectedSection } = useAppContext() as AppContextType;

    return (
        <Container>
            {selectedSection === 'Home' && <HomeSection />}
            {selectedSection === 'Experience' && <ExperienceSection />}
            {selectedSection === 'Skills' && <SkillSection />}
        </Container>
    );
}

export default App;
