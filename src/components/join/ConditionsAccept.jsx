import React from 'react'
import {Checkbox, Box} from '@mui/material';
import { useRecoilState } from 'recoil'
import { conditionsAcceptState } from '../board/RecoilAtom'

function ConditionsAccept() {
  const [checked, setChecked] = useRecoilState(conditionsAcceptState);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
    display={'flex'}
    alignItems={'center'}
    >
    <Checkbox
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> 
    <h4>위 약관에 동의합니다.</h4>
    </Box>
  );
};

export default ConditionsAccept;
