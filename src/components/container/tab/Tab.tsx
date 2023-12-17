import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '../..';
import styles from './Tab.module.scss';
import { useAppContext } from '../../../context/useAppContext';
import { AppContextType } from '../../../context/AppContext';
import { useBreakpoint } from '../../../helpers/customHooks';

interface Props {
    section: { name: string; icon: IconProp };
}
const Tab = ({ section }: Props) => {
    const { selectedSection, setSelectedSection, setSkipAnimation } = useAppContext() as AppContextType;
    const breakpoints = [768, 1080];
    const currentBreakpoint = useBreakpoint(breakpoints);

    const isSelected = () => selectedSection === section.name;

    return (
        <span
            className={styles.tab}
            onClick={() => {
                setSelectedSection(section.name);
                setSkipAnimation();
            }}
        >
            <span className={styles.tab__upper}>
                <Icon icon={section.icon} color={isSelected() ? 'var(--white)' : ''} />
                <span
                    className={styles['tab__upper-name']}
                    style={{ color: isSelected() ? 'var(--white)' : 'var(--background-light)' }}
                >
                    {section.name}
                </span>
                {isSelected() && +currentBreakpoint !== breakpoints[0] ? (
                    <svg
                        style={{ marginLeft: 'auto' }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                    >
                        <path
                            d="M1 1.5L12.7273 13.5"
                            stroke={isSelected() ? 'var(--white)' : 'var(--background-light)'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13 1.5L1.27273 13.5"
                            stroke={'var(--white)'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : null}
            </span>
            <span
                className={`${styles['tab__lower-bar']} ${isSelected() ? styles['tab__lower-bar--active'] : ''}`}
            ></span>
        </span>
    );
};

export default Tab;
