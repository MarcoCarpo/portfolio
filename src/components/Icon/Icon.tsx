import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
    icon: IconProp;
    size?: number;
}
const Icon = ({ icon, size }: IconProps) => {
    return <FontAwesomeIcon icon={icon} style={{ width: size ?? 20, height: size ?? 20 }} />;
};

export default Icon;
