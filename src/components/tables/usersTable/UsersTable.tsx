import { useEffect } from 'react';
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
import { fetchUsers, deleteUser } from '../../../features/user/userAsync';

type SetUserIdStateType = {
  setUserId: (userId: string) => void;
};

const headElements = ['Users', 'Phone Number', 'Edit/Delete'];

//props are from... pages/admin/UserDetails.tsx
const UsersTable = ({ setUserId }: SetUserIdStateType) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  const allUsers = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ tableLayout: 'fixed' }} aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'gray' }}>
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
          {allUsers.users.map((user) => (
            // <MuiTableBody key={item.name} cake={item} />
            <TableBody key={user._id}>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {user.userName}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: matchesMd ? '0,5em' : '1.2em',
                    color: '#006618',
                  }}
                >
                  {user.phone}
                </TableCell>
                <TableCell align='right'>
                  <Button
                    onClick={() => (user._id ? setUserId(user._id) : undefined)}
                  >
                   <ModeEditIcon/>
                  </Button>
                  <Button
                    onClick={() => user._id && dispatch(deleteUser(user._id))}
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

export default UsersTable;
