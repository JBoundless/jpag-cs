import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function LanguageList() {
  return(
    <div style={{border: '5px solid #3A3B3C', borderRadius: '5px'}}>
    <Card style={{backgroundColor: 'black'}}>
  <Card.Body>
    <Card.Title>Codecademy</Card.Title>
    <Card.Text>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn Java (July 2017)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn Python 2 (December 2017)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn HTML (January 2018)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn Responsive Design (February 2018)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Make a Website (May 2018)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn JavaScript (June 2018; relearned January 2020 - August 2020)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn Swift (February 2020 - May 2020)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn A-Frame (VR) (June 2020 - July 2020)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn React.js (Parts I and II) (July 2020 - August 2020, December 2020)</ListGroup.Item>
         <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn Phaser.js (December 2020 - March 2021)</ListGroup.Item>
         <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Learn Angular JS 1.X (March 2021)</ListGroup.Item>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{backgroundColor: 'black'}}>
  <Card.Body>
    <Card.Title>FreeCodeCamp</Card.Title>
    <Card.Text>
        <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>HTML/CSS (June 2019-July 2019)</ListGroup.Item>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{backgroundColor: 'black'}}>
  <Card.Body>
    <Card.Title>Coursera</Card.Title>
    <Card.Text>
      <ListGroup.Item style={{backgroundColor: '#3A3B3C', color: 'white'}}>Visualization for Data Journalism from the University of Illinois at Urbana-Champaign (June 2020-July 2020)</ListGroup.Item>
    </Card.Text>
  </Card.Body>
</Card>
</div>
  )
}