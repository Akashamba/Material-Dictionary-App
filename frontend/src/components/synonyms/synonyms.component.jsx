import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Paper, Container} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  synonym: {
    color: theme.palette.text.primary,
  },
  linkWrapper: {
    fontSize: '1.15rem',
    padding: '0 15px 0 0',
  }
}));

export default function Synonyms({synonyms}) {
  const classes = useStyles();

  return(
  <Paper>
    <br/>
    <Container>
      <h2>{synonyms.length>1?'Synonyms':'Synonym'}</h2>
      <p style={{textAlign: 'center'}}>
        {synonyms.map(synonym => (
          <span className={classes.linkWrapper} >
                <Link to={`/word/${synonym}`} className={classes.synonym}>
                {synonym}</Link> </span>
        ))}
      </p>
    </Container>
    <br/>
  </Paper>
  )
}