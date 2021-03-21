import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const LanguagesCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                     
                <p className="lead">
                    <b> {data.role} </b>
                    <br/>
                    {data.prof}
                    <br/>
                    {data.message}
                </p>
                
            </div>
        </Col>
     );
}
 
export default LanguagesCard;
