import { Footer, SideBar, Tab } from '..';
import { sections } from '../../helpers/data';
import styles from './Container.module.scss';

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__upper}>
                <SideBar />
                <div className={styles.container__editor}>
                    <div className={styles.container__topbar}>
                        {sections.map((section) => (
                            <Tab key={section.name} section={section} />
                        ))}
                    </div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Container;
