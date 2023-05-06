import {Page} from "../../components/Page";
import {EmbeddedPlayer} from "../../components/EmbeddedPlayer";
import './Home.styles.css';

export const Home = () => {
    return (
        <Page>
            <div>
                <h2 className='home-title'>Новое на канале</h2>
                <EmbeddedPlayer embedId="_WlzH7Dp-vQ" />
            </div>
        </Page>
    );
}