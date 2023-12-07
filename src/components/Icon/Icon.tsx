import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Icon.module.scss';

interface IconProps {
    icon: IconProp;
    size?: number;
    color?: string;
    onClick?: () => void;
}
const Icon = ({ icon, size, color, onClick }: IconProps) => {
    return (
        <FontAwesomeIcon
            onClick={onClick}
            className={styles.icon}
            icon={icon}
            style={{ width: size ?? 20, height: size ?? 20, color: color ?? 'var(--background-light)' }}
            onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--white)';
            }}
            onMouseOut={(e) => {
                if (color) return;
                e.currentTarget.style.color = 'var(--background-light)';
            }}
        />
    );
};

export default Icon;
