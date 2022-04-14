import React, {useState} from 'react'
import { 
        Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle
        } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { boardDeleteUrl } from './MappingDB'
import { alertState, alertMessegeState } from './RecoilAtom'
import { useSetRecoilState } from 'recoil'

function BoardDelete(props) {

  const boardNum = props.boardNum
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const setState = useSetRecoilState(alertState);
  const setMessage = useSetRecoilState(alertMessegeState)

  const handleClickOpen = () => {
    setMessage('')
    setOpen(true);
  };

  const handleDelete = () => {
    const url = boardDeleteUrl +boardNum
    axios.delete(url).then(() => {
      setMessage('삭제가 완료되었습니다.')
      setOpen(false)
      setState(true)
      navigate('/BoardList')
    });
  }

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button 
      sx={{
        backgroundColor : 'crimson',
        color : 'white',
        ":hover" : {
          backgroundColor : 'white',
          color : 'black',
          borderColor : 'crimson'
        }
      }}
      variant="contained"
      onClick={handleClickOpen}>
        <DeleteIcon sx={{marginRight : '2px'}} /> 삭제
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle color='crimson'>
          {"게시글 삭제"}
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
    </div>
  )
}

export default BoardDelete;
