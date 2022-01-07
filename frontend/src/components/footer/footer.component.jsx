import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';


export default function Footer({theme}) {
  const color = theme?'#fff':'#4f76f5'
  return (
    <div className='footer'>
      <br/><br/><br/>
  <Paper style={{ textAlign: 'center' }}>
        <br/><br/>
        A website by <Link style={{ color: color,  textDecoration: 'underline' }} href='https://akashamba-portfolio.netlify.app/'>Akash Ambashankar</Link>
        <p>Powered by the <Link style={{ color: color,  textDecoration: 'underline' }} href="https://developer.oxforddictionaries.com/">Oxford Dictionaries API</Link></p>
        <br/>
        <p>Any comments or suggestions? Let me know <Link style={{ color: color,  textDecoration: 'underline' }} href="https://akashamba-feedback.netlify.app/simple-dictionary">here</Link>.</p>
        <br/>
        <p>Find me here</p>
        <p><Link style={{ color: color }} href="https://github.com/akashamba"><i id="github" className="fab fa-github"></i></Link> &emsp; <Link style={{ color: color }} href="https://in.linkedin.com/in/akash-ambashankar-48b8111b7"><i id="linkedin" className="fab fa-linkedin"></i></Link></p>
        <br/>
        <p style={{fontSize: '0.5rem'}}>v 1.2</p>
        <br/>
  </Paper>
    </div>
  )
}