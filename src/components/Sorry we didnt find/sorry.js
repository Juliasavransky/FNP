import React, { Component } from 'react';
import {  Button, Container, } from 'react-bootstrap';
import './sorry.css';


class Sorry extends Component {
    render() {
        return (
            <div  >
                <Container className="sorry">
               Sorry, the item you are interested in is not currently on the site. <br></br>
               The smart agent scans the site for you even when you are not on it, <br></br>
               and finds for you the ads you are looking for according to predefined criteria. <br></br>
               How is this working? <br></br>
               First click on Add New Agent and define the criteria of the ads you are looking for.<br></br>
               As soon as you fill in the details, <br></br>
               the smart agent will wait for new ads to be added to the site, which meet the criteria you have set for him. <br></br>
               The search results can be obtained by email. <br></br>
                
                <Button type="button" href="/#SmartAgent">SMART AGENT</Button>



                </Container>

            </div>
        );
    }
}

export default Sorry;