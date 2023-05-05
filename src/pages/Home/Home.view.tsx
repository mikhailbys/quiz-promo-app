import {Page} from "../../components/Page";
import {EmbeddedPlayer} from "../../components/EmbeddedPlayer";
import './Home.styles.css';

export const Home = () => {
    return (
        <Page>
            <div>
                <h1 className='home-title'>Новое на канале</h1>
                <EmbeddedPlayer embedId="_WlzH7Dp-vQ" />
            </div>
        </Page>
    );
}