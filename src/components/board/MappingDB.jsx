//포트
export const pjPort = "9000" //포트번호

//게시판
const freeBoard = "freeboard"

//댓글
export const freecmnt = "freecmnt" //free_cmnt 테이블분류

// export const fBoardMain = "freeboard" //free_board 테이블분류
// export const fBoardGet = "jsonFreeBoarList" //free_board select *

export const memberGet = "memberGet" //회원정보(글상세-닉네임)

export const fSearchGet = "search" //검색
export const freeImg = "image" //이미지 업로드

//order
export const dbWrite = "write" //insert
export const dbViews = "views" //조회수 업데이트
export const dbUpdate = "update" //게시글 수정
export const dbDelete = "delete" //게시글 삭제

//댓글

export const fCmtList = "jsonFreeCmntList" //free_cmnt select *
// export const fCmtWrite = "freeCmntWrite" //free_cmnt insert
// export const fCmtDelete = "freeCmntDelete" //free_cmnt delete

//inSpring

const inSpring = "?"

//paramiter
const free_num = inSpring+"free_num"
const free_cmnt_num = inSpring+"free_cmnt_num"
const mem_email = inSpring+"mem_email"
const mem_id  = inSpring+"mem_id"
const mem_nick = inSpring+"mem_nick"


//request url =============================================================

//BoardList get
export const boardListUrl = 
`http://localhost:${pjPort}/`+ freeBoard


//BoardList Search
export const searchUrl =
`http://localhost:${pjPort}/${freeBoard}/${fSearchGet}/`

//viewCount update
export const viewCountUrl = 
"http://localhost:" + pjPort + "/" + freeBoard + "/" + dbViews + "/" + free_num +"/"// + boardNum

//BoardInsert - Image upload
export const imgInsertUrl =
`http://localhost:${pjPort}/${freeBoard}/${freeImg}`

//BoardInsert
export const boardInsertUrl =
'http://localhost:'+ pjPort +'/' + freeBoard + '/'+ dbWrite


//BoardUpdate
export const boardUpdateUrl =
'http://localhost:'+ pjPort +'/' + freeBoard + '/'+ dbUpdate + '/' + free_num + '/' //+ boardNum


//BoardDelete
export const boardDeleteUrl =
'http://localhost:'+pjPort+'/'+freeBoard+'/'+ dbDelete +'/'+ free_num +'/'


//commentList get
export const commentGetUrl =
'http://localhost:' + pjPort + '/' + freecmnt + '/' + free_num +'/'


//commentWrite
export const commentWriteUrl =
'http://localhost:'+ pjPort +'/' + freecmnt + '/'+ dbWrite

//commentDelete
export const commentDeleteUrl =
'http://localhost:'+ pjPort +'/' + freecmnt + '/'+ dbDelete + '/' + free_cmnt_num +'/'

//memberJoin - email overlap check
export const emailOverlap = 'http://localhost:' + pjPort + '/email' + mem_email + '='

//memberJoin - userId overlap check
export const idOverlap = 'http://localhost:' + pjPort + '/id' + mem_id + '='

export const nickOverlap = "http://localhost:" + pjPort + '/nick' + mem_nick + '='

export const userRegist = "http://localhost:" + pjPort + '/regist'









/* 사용된 컬럼(쿼리문에 select 되어야 하는 컬럼)
1. 자유게시판 리스트화면
  free_num : 0,
  free_subject : "",
  free_content : "",
  mem_num : 0,
  free_regdate : "",
  free_title : "",
  free_views : 0,
*/

/*
2. 회원정보
  mem_nick
*/