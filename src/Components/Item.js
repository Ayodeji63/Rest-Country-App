import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(.7),
  textAlign: 'center',
  width:'100px',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems:'center',
  jusctifyContent: 'center',
  cursor:'pointer'
}));

export default function ItemConc({icon, text}) {
  return (
    <div className='tab'>
        <Item className='ionItems'>
          {icon}
        <p>{text}</p>
        </Item>
    </div>
  );
}