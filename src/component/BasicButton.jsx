import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button style={{color:"red"}}variant="text">Text</Button>
      <Button  style={{color:"purple"}}variant="contained">Contained</Button>
      <Button   style={{color:"purple"}} variant="outlined">Outlined</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
  );
}
