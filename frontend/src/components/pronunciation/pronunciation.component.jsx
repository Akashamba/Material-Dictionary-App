import React from 'react';
import {Button} from '@material-ui/core';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

export default function Pronunciation({url}) {
  const audio = new Audio(url);

  return(
    <Button onClick={() => audio.play()}>
      <RecordVoiceOverIcon/>
    </Button>
  )
}