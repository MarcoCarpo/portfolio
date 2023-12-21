import { useAppContext } from './context/useAppContext';
import { Container } from './components';
import { ExperienceSection, HomeSection, SkillSection, AboutMeSection } from './sections';

function App() {
    const { selectedSection } = useAppContext()!;

    return (
        <Container>
            {selectedSection === 'Home' && <HomeSection />}
            {selectedSection === 'Experience' && <ExperienceSection />}
            {selectedSection === 'Skills' && <SkillSection />}
            {selectedSection === 'About Me' && <AboutMeSection />}
        </Container>
    );
}

export default App;
