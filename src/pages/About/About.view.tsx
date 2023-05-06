import {Page} from "../../components/Page";
import {Card} from "../../components/Card";
import {cardContent, CardContent, Anchor} from "./About.helpers";
import {Link} from "../../components/Link";
import './About.styles.css';

export const About = () => {

    const renderLink = ({title, href}: Anchor) => {
      return (
          <Link label={title} href={href} target="_blank"/>
      );
    }

    const renderCard = ({ title, description, imgSrc, links}: CardContent) => {
        return (
            <Card>
                <div>
                    <div className='about-card-title'>{title}</div>
                    {imgSrc &&
                        <div className='about-card-img-container'>
                            <img className='about-card-img' src={require(`${imgSrc}`)} alt='partners' />
                        </div>
                    }
                    <p className='about-card-desc'>{description}</p>
                    <div className='about-card-links'>
                        {links.map(renderLink)}
                    </div>
                </div>
            </Card>
        );
    }
    return (
        <Page>
            <div>
                {cardContent.map(renderCard)}
            </div>
        </Page>
    );
}