import React, { Component } from 'react';
import { Label } from 'react-bootstrap';

class StatusLabel extends Component {
    render() {
        let text = 'New';
        let labelStyle;
        const { labels } = this.props;

        if (labels.includes('COMPLETED')) {
            text = 'Completed';
            labelStyle = 'success';
        } else if (labels.includes('IN_PROGRESS')) {
            text = 'In Progress';
            labelStyle = 'info';
        }

        return (
            <Label bsStyle={labelStyle}>{text}</Label>
        );
    }
}

export default StatusLabel;
