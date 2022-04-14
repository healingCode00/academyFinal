import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

function PromoList(props) {
  var items = [
    {
      name: "구름계곡캠핑장",
      photoHref:
        "https://www.gocamping.or.kr/upload/camp/353/thumb/thumb_720_5891zrHdngtkphQO7mY13Av8.jpg",
      pageLink: "https://www.cloudcamping.co.kr/",
      rate: "★★★★☆",
      description:
        "계곡 물소리와 풀벌레 소리가 지저귀는 아름다운 대자연속의 힐링캠핑",
    },
    {
      name: "별바라기 캠핑 펜션",
      photoHref:
        "https://www.gocamping.or.kr/upload/camp/8088/thumb/thumb_720_0282o2Got95WeTdGYgnCPC76.jpg",
      pageLink: "http://xn--ok0b89o1wddua.com/",
      rate: "★★★★☆",
      description:
        "대둔산 수락계곡을 끼고 산언덕에 맑은 미소의 캠핑지기와 모든 편의시설의 쾌적함을 최우선으로 하는 캠핑장",
    },
    {
      name: "산마루카라반",
      photoHref:
        "https://www.gocamping.or.kr/upload/camp/100234/thumb/thumb_720_2153uRmKRQ283E8reKpprw7M.jpg",
      pageLink: "https://booking.naver.com/booking/3/bizes/642735",
      rate: "★★★★☆",
      description:
        "경기도 포천에서 2022년에 출고된 최신식 대형 5인용 카라반과 함께 산마루의 매력에 빠져보세요.",
    },
    {
      name: "장호비치캠핑장",
      photoHref:
        "https://www.gocamping.or.kr/upload/camp/2672/thumb/thumb_720_8622MUgbQjvlvxxPtpZckjRE.jpg",
      pageLink: "http://www.janghocamping.kr/",
      rate: "★★★★★",
      description:
        "동해안에서 가장 아름답다는 장호해변 언덕에 위치한 휴양 캠핑 시설",
    },
    {
      name: "통제영오토캠핑장",
      photoHref:
        "https://www.gocamping.or.kr/upload/camp/7075/thumb/thumb_720_0524uxpLo2DDCBxUYwVzvgas.jpg",
      pageLink: "https://booking.naver.com/booking/3/bizes/6427https://cafe.naver.com/tongjaeyoung",
      rate: "★★★☆☆",
      description:
        "한산섬 달밝은 밤을 즐길 수 있는 곳",
    },
    {
      name: "어은돌송림캠핑장",
      photoHref:
       "https://www.gocamping.or.kr/upload/camp/1793/thumb/thumb_720_7854QM8fe0dtxmlHO0akFpsC.jpg",
      pageLink: "http://www.xn--4y2bj8lbmfh3hz2i.com/",
      rate: "★★★★☆",
      description:"소나무 우거진 파도리해변에서 즐기는 오토캠핑",
    },
    {
      name: "구미 캠핑장",
      photoHref:
       "https://www.gocamping.or.kr/upload/camp/362/thumb/thumb_720_3413bnYNuxy5T3L9SCfXoUFm.jpg",
      pageLink: "https://www.ginco.or.kr/camping/index.do",
      rate: "★★★☆☆",
      description: "낙동강을 배경으로 펼쳐진 대규모 캠핑장",
    },
    {
      name: "계방산 오토캠핑장",
      photoHref:
       "https://www.gocamping.or.kr/upload/camp/240/thumb/thumb_720_7654o3dL6ka8GJTaXEnyAvIQ.jpg",
      pageLink: "https://www.gocamping.or.kr/bsite/camp/info/read.do?c_no=240&viewType=read01&listOrdrTrget=last_updusr_pnttm",
      rate: "★★★☆☆",
      description: "계곡 옆 넓은 공간에서 가족과 함께 보내느 즐거운 시간",
    },
  ];



  return (
    <Box>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Box>
  );
}

function Item(props) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    window.open(`${props.item.pageLink}`)
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        m: 4,
      }}
    >
      <Card
        onClick={handleClick}
        // onClick={() => navigate(`/${props.item.pageLink}`)}
        sx={{
          display: "flex",
          width: 1000,
          height: 300,
          "&:hover": {
            cursor: "pointer",
            border: 3,
            borderColor: "#ffb703"
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image={props.item.photoHref}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" sx={{ pl: 2 }}>
              {props.item.name}
            </Typography>
            <Typography
              component="div"
              variant="h5"
              sx={{ pt: 2, pl: 2, color: "#fb8500" }}
            >
              {props.item.rate}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ padding: 2 }}
            >
              {props.item.description}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "right", padding: 3}}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default PromoList;
