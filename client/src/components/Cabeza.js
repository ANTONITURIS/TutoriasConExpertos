import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'right',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box className="Box-Cursos" sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Item>provando </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>provando</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>provando</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>provando</Item>
        </Grid>
      </Grid>
    </Box>
  );
}