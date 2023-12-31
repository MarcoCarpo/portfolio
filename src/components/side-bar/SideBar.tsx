import styles from './SideBar.module.scss';
import { Icon } from '..';
import { useAppContext } from '../../context/useAppContext';
import { sections } from '../../helpers/data';
import { Section } from '../../helpers/interfaces';

const SideBar = () => {
    const { setSelectedSection, selectedSection } = useAppContext()!;

    const isSelected = (section: Section) => selectedSection === section.name;

    return (
        <div className={styles.sidebar}>
            {sections.map((s) => (
                <Icon
                    icon={s.icon}
                    key={s.name}
                    color={isSelected(s) ? 'var(--white)' : ''}
                    onClick={() => {
                        setSelectedSection(s.name);
                    }}
                />
            ))}
        </div>
    );
};

export default SideBar;
