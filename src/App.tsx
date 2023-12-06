import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useData } from './helpers/customHooks';
import { Icon } from './components';

function App() {
    const { data, isLoading } = useData();

    if (isLoading) {
        return <>Loading...</>;
    }

    return (
        <div>
            {data?.bio.name} <Icon icon={faCircleUser} />
        </div>
    );
}

export default App;
