import Special from './Special';

const Myself = ({familyAsset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special familyAsset={familyAsset}/>
        </div>
    );
};

export default Myself;