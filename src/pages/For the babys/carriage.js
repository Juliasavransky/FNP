import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav } from 'react-bootstrap';

class carriage extends Component {
    render() {
        return (
            <div>
                 <Nav
                    // activeKey="/home"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/furniture">Furniture</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/safety" eventKey="link-1">Safety</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  href="/carriage" eventKey="link-2">Carriage!!!</Nav.Link>
                    </Nav.Item>
                  
                </Nav>
            </div>
        );
    }
}

export default carriage;