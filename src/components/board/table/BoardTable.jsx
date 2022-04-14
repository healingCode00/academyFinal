import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import { Box, Button, Pagination, PaginationItem } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
import { pageState } from '../RecoilAtom';
import { useRecoilState } from 'recoil';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#00B4D8',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  root: {
    height: 30,
    maxHeight : 30
  }
}));

export default function CustomizedTables(props) {

  const boardData = props.data
  const navigate = useNavigate()
  // const reduxValue = useSelector((state) => state.alignment)
  const [page, setPage] = useRecoilState(pageState);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ maxHeight: '80vh', minHeight: 600, minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">번호</StyledTableCell>
            <StyledTableCell align="center">주제</StyledTableCell>
            <StyledTableCell align="center">제목</StyledTableCell>
            <StyledTableCell align="center">작성일</StyledTableCell>
            <StyledTableCell align="center">조회수</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {boardData
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, i) => (
            <StyledTableRow
            key={i}
            sx={{
              cursor: 'pointer',
            }}
            hover
            onClick={()=> navigate('/BoardDetail/'+row.free_num ,{state:{
              boardNumber : row.free_num,
              boardTitle : row.free_title,
              boradContent : row.free_content,
              boardDate : row.free_regdate,
              boardView : row.free_views,
              boardCategory : row.free_subject,
              boardWriter : row.mem_nick
            }})}
            >
              <StyledTableCell align="center" component="th" scope="row">
                {row.free_num}
              </StyledTableCell>
              <StyledTableCell align="center">{row.free_subject}</StyledTableCell>
              <StyledTableCell align="center">{row.free_title}</StyledTableCell>
              <StyledTableCell align="center">{row.free_regdate}</StyledTableCell>
              <StyledTableCell align="center">{row.free_views}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box
    marginTop={'10px'}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      p: 1,
      bgcolor: 'background.paper',
      borderRadius: 1,
    }}
    >
    <Box>
      
    </Box>
    <Box>
    <Pagination
      color={'primary'}
      page={page + 1}
      count={Math.ceil(boardData.length/10)} //총 데이터수 /10
      onChange={handleChangePage}
      renderItem={(CustomizedTables) => (
        <PaginationItem
          {...CustomizedTables}
        />
      )}
    />
    </Box>
    <Button
    variant='contained'
    sx={{
      color : 'white',
      height : '36px',
      ":hover" : {
        backgroundColor : 'white',
        color : 'black',
        borderColor : 'crimson'
      }
    }}
    onClick={() => navigate('/BoardInsert')}
    ><BorderColorSharpIcon 
    sx={{
      marginRight : '3px',
      fontSize : '16px'}}/>
    글쓰기</Button>
    {/* </Box> */}
    </Box>
    </>
  );
}
