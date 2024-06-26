import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Button,
  TableHead,
  Paper,
  Box,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useAppDispatch } from '../../../redux/hooks';
import { deleteCake } from '../../../features/cake/cakeAsync';

type SetCakeIdStateType = {
  setCakeId: (cakeId: string) => void
}

const headElements = ['Cake View', 'Cake Name', 'description', 'Price', 'Edit'];

// pages/admin/CakeDetails.tsx
const TableHome = ({setCakeId}:SetCakeIdStateType) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  const allCakes = useAppSelector((state) => state.cake);

  return (
    <Box sx={{ margin: matchesMd ? '0em' : '0em' }}>
      <TableContainer component={Paper}>
        <Table sx={{ tableLayout: 'fixed' }} aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'gray', color:'white' }}>
              {headElements.map((item, i) => {
                return (
                  <TableCell
                    key={item}
                    align={headElements.length - 1 === i ? 'right' : 'left'}
                    sx={{ color:'white', fontSize:'1.2em' }}
                  >
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {allCakes.cakes.map((cake) => (
            <TableBody key={cake._id}>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <img alt={cake.name} src={cake.selectedFile} width={60} />
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: matchesMd ? '0,5em' : '1.2em',
                    color: '#006618',
                  }}
                >
                  {cake.name}
                </TableCell>
                <TableCell>{cake.description}</TableCell>
                <TableCell>{cake.price}</TableCell>
                <TableCell align='right'>
                  <Button
                    onClick={() => cake._id ? setCakeId(cake._id) : undefined}
                  >
                    <ModeEditIcon/>
                  </Button>
                  <Button
                    onClick={() => cake._id && dispatch(deleteCake(cake._id))}
                  >
                    <DeleteForeverIcon color='error'/>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableHome;
