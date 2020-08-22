import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';


class ForTheBabys extends Component {
    render() {

        const { ads } = this.props;
        const forthebabysPage = 3
        const forthebabysAds = ads.filter(ad => ad.CategoryId === forthebabysPage)

        const forthebabysUi = forthebabysAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)
        return (
            <div>
                <Row>{forthebabysUi}</Row>
                <Nav
                    // activeKey="/home"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/#furniture">Furniture</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/#safety" eventKey="link-1">Safety</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  href="/#carriage" eventKey="link-2">Carriage</Nav.Link>
                    </Nav.Item>
                  
                </Nav>

            </div>
        );
    }
}

export default ForTheBabys;

