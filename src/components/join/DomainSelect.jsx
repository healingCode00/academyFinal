import React from 'react'
import { 
        Autocomplete,
        TextField,
        } from '@mui/material'
import { useRecoilState } from 'recoil'
import { domainSelectState } from '../board/RecoilAtom'

function DomainSelect() {

  const [value, setValue] = useRecoilState(domainSelectState)
  // const [inputValue, setInputValue] = useRecoilState(domainDirectState);
  const options = [
  'daum.net', 
  'dreamwiz.com',
  'hanmail.net',
  'naver.com', 
  'nate.com', 
  'kakao.net', 
  'gmail.com']


  return (
    <div>
      <Autocomplete
        freeSolo
        disableClearable
        value={value}
        onChange={(event, newValue) => {
          setValue('')
          setValue(newValue);
        }}
        inputValue={value}
        onInputChange={(event, newInputValue) => {
          setValue('');
          setValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="도메인(직접입력가능)" />}
      />
    </div>
  )
}

export default DomainSelect;