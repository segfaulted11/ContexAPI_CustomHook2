import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({familyAsset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section>
                <Myself familyAsset={familyAsset}/>
                <Brother/>
                <Sister/>
            </section>
        </div>
    );
};

export default Dad;