import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function BestPlace(props) {
  var items = [
    {
      pageLink: "https://soseonamcamp.dytc.or.kr:455/",
      location: "단양",
      name: "소선암 오토 캠핑장",
      rate: "★★★★☆",
    },
    {
      pageLink: "https://campingjido.com/mobileweb/index.html?c=campingdetail&camping_list_uid=2283",
      location: "홍천",
      name: "보리울 캠핑장",
      rate: "★★★★☆",
    },
    {
      pageLink: "https://www.gocamping.or.kr/bsite/camp/info/read.do?c_no=2217",
      location: "영덕",
      name: "영덕 고래불 국민 야영장",
      rate: "★★★★☆",
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
  const handleClick = (e) => {
    window.open(`${props.item.pageLink}`)
  }
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          component="a"
          onClick={handleClick}
        >
          <ListItemText
            primary={`[${props.item.location}]${props.item.name}${props.item.rate}`}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default BestPlace;
