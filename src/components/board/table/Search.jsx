import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Stack, Input, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import axios from 'axios'
import { searchUrl } from '../../board/MappingDB'
import { btnState, searchState, pageState } from '../RecoilAtom'

function Search() {

  const navigate = useNavigate()
  const [state, setState] = useState('')
  const [search, setSearch] = useRecoilState(searchState)
  const setPage = useSetRecoilState(pageState)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit', state)
    const url = searchUrl +state
    const params = {
      state : state,
    }
    axios.get(url, params).then((res) =>{
      console.log(search);
      setSearch(res.data)
      console.log('검색결과 : ', search)
      console.log('키워드 : ', state)
    })
    navigate('/BoardListSearch/'+ state)
    setPage(0)
  }

  const handleOnChange = (e) => {
    setState(e.target.value)
  }

  return (
    <div className="searchBox">
    <form onSubmit={handleSubmit}>
      <Stack direction={'row'}>
      <Input className="search_input"
            type="search"
            onChange={handleOnChange}
            autoComplete="off" 
            placeholder="검색" />
      <IconButton onClick={handleSubmit} color="primary" component="span">
          <SearchIcon />
      </IconButton>
      </Stack>
    </form>
    </div>
  );
}

export default Search;