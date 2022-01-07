import React from 'react';
import {Container} from '@material-ui/core';

export default function Content({sense}) {
  return(
    <Container>
      {sense.category?
      <div>
        <br/>
        <h2 style={{display: 'inline'}}>Category: </h2>
        <span style={{ fontSize: '1.15rem'}}> {sense.category}</span>
        <br/>
      </div>
      :''}
      <h2>Meaning</h2>
      <p style={{ fontSize: '1.15rem'}}>{sense.definition}</p>
      <br/>
      <h2>{sense.examples.length>0?(sense.examples.length>1?'Examples':'Example'):''}</h2>
      <ol>
        {sense.examples.map((example, i) => (
          <li style={{ fontSize: '1.15rem'}} 
              key={i}>{example}</li>
        ))}
      </ol>
      <br/>
    </Container>

  )
}