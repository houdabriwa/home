import React from 'react';
import LanguagesCard from "./LanguagesCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Languages = ({languages}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {languages.heading}
                    </h2>
                    <Row>
                        {
                            languages.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Languages;
