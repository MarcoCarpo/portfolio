import { useBreakpoint } from '../../../helpers/customHooks';
import styles from './SkillsContainer.module.scss';

interface IconProps extends React.SVGProps<SVGElement> {
    size?: number | string;
}

interface Props {
    title: string;
    icons: React.FunctionComponent<IconProps>[];
}
const Container = ({ title, icons }: Props) => {
    const currentBreakpoint = useBreakpoint();
    return (
        <div className={styles['skills-container']}>
            <h2>{title}</h2>
            <div className={styles['skills-container__icons']}>
                {icons.map((Icon, index) => {
                    return <Icon key={index} size={currentBreakpoint === '768' ? 100 : 100} />;
                })}
            </div>
        </div>
    );
};

export default Container;
