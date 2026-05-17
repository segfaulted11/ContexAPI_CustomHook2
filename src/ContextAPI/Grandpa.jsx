import Uncle from './Uncle';
import Dad from './Dad';
import Aunt from './Aunt';
import './style.css'

const Grandpa = () => {
    return (
        <div>
            <h1>Grandpa</h1>
            <section className='flex'>
                <Dad/>
                <Uncle/>
                <Aunt/>
            </section>
        </div>
    );
};

export default Grandpa;