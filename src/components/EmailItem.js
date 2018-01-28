import React, { Component } from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import StatusLabel from './StatusLabel';

class EmailItem extends Component {
    constructor(props) {
        super(props);

        this.onStartProgressClick = this.onStartProgressClick.bind(this);
        this.onCompletedClick = this.onCompletedClick.bind(this);
    }

    onStartProgressClick(event) {
        event.stopPropagation();
        this.props.startProgress(this.props.email.id);
    }

    onCompletedClick(event) {
        event.stopPropagation();
        this.props.completed(this.props.email.id);
    }

    render() {
        const { email } = this.props;

        return (
            <Row>
                <Col md={12}>
                    <Panel bsStyle="info">
                        <Panel.Heading>
                            <Panel.Title toggle>
                                <Row>
                                    <Col md={8}>
                                        <h3>
                                            <StatusLabel labels={email.labelIds} />
                                            <span style={{ paddingLeft: '10px' }}>
                                                {email.subject && email.subject.value}
                                                <small style={{ paddingLeft: '10px' }}><strong>From:</strong> {email.from.value}</small>
                                            </span>
                                        </h3>
                                    </Col>
                                    <Col md={4}>
                                        <div className='pull-right'>
                                            { !email.labelIds.includes('IN_PROGRESS')
                                            && <Button onClick={this.onStartProgressClick} style={{ marginRight: '10px' }}>Start Progress</Button> }
                                            { !email.labelIds.includes('COMPLETED')
                                            && <Button onClick={this.onCompletedClick} bsStyle="primary">Complete</Button> }
                                        </div>
                                    </Col>
                                </Row>
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <div dangerouslySetInnerHTML={{ __html: email.body}} />
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default EmailItem;
