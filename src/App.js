import React, { Component } from 'react';
import Day from './components/Day';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emails: {
                messages: []
            }
        }

        this.getEmails = this.getEmails.bind(this);
        this.startProgress = this.startProgress.bind(this);
        this.completed = this.completed.bind(this);
    }

    componentWillMount() {
        this.getEmails();
    }

    getEmails() {
        const url = 'http://localhost:4000/list';
        
        fetch(url, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).then(res => {
            return res.json();
        }).then(emails => {
            this.setState({ emails });
        })
        .catch(error => console.error('Error:', error))
    }

    startProgress(id) {
        const url = `http://localhost:4000/startProgress/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).then(res => {
            return res.json();
        }).then(emails => {
            this.getEmails();
        })
        .catch(error => console.error('Error:', error))
    }

    completed(id) {
        const url = `http://localhost:4000/completed/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).then(res => {
            return res.json();
        }).then(emails => {
            this.getEmails();
        })
        .catch(error => console.error('Error:', error))
    }

    getDays(emails) {
        return Object.keys(emails);
    }

    render() {
        const { emails: { messages } } = this.state;
        const days = this.getDays(messages);

        return (
            <div className="App container">
                { days.map((day, index) => (
                    <Day
                        day={day}
                        emails={messages[day]}
                        startProgress={this.startProgress}
                        completed={this.completed}
                        key={index} />
                )) }
            </div>
        );
    }
}

export default App;
