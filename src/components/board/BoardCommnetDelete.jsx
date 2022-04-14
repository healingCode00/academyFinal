import React, {useState} from 'react'
import { 
        Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle
        } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import axios from 'axios';
import { commentDeleteUrl } from './MappingDB'
import { alertState, userInfoState, fBoardDetailState } from './RecoilAtom'
import { useRecoilState, useRecoilValue } from 'recoil'


function BoardCommnetDelete(props) {

  const commentNum = props.commentNum
  // const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  // const [state, setState] = useRecoilState(alertState);
  const userInfo = useRecoilValue(userInfoState)
  const detailData = useRecoilValue(fBoardDetailState)
  const writerAuth = props.auth

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    const url = commentDeleteUrl + commentNum
    axios.delete(url).then(() => {
      setOpen(false)
      // setState(true)
      window.location.replace('/BoardDetail/'+ detailData.boardNumber)
    });
  }

  const handleClose = () => {
    setOpen(false);
  };
  if(writerAuth === userInfo[0].mem_nick){
  return (
    <>
    <RemoveCircleOutlineIcon
        sx={{
          marginTop : '-7px',
          marginRight : '110px',
          color : 'crimson',
          ":hover" : {
            color : 'orangered',
          }
        }}
        onClick={handleClickOpen}
        />
      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle color='crimson'>
          {"댓글 삭제"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            삭제하면 되돌릴 수 없어요.<br/>
            정말 삭제 하시겠어요?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          sx={{
            borderColor : 'crimson',
            color : 'red',
            ":hover": {
              backgroundColor : 'red',
              color : 'white'
            }
          }}
          variant='outlined'
          onClick={handleDelete}>삭제</Button>
          <Button 
          sx={{
            borderColor : '#023E8A',
            color : 'Black',
            ":hover": {
              borderColor : '#023E8A',
              backgroundColor : '#023E8A',
              color : 'white'
            }
          }}
          variant='outlined'
          onClick={handleClose} autoFocus>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}else{
  return(
    <></>
  )
}
};

export default BoardCommnetDelete;
