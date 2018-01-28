import React, { Component } from 'react';
import EmailItem from './EmailItem';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class Day extends Component {
    render() {
        const { day, emails, startProgress, completed } = this.props;

        return (
            <div className='container'>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <Panel bsStyle="primary">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        <h2 className='text-center'>{day}</h2>
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                    { emails.map((email, index) => (
                                        <EmailItem
                                            email={email}
                                            startProgress={startProgress}
                                            completed={completed}
                                            key={index} />
                                    )) }
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Day;
