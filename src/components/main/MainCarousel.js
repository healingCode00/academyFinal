import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Card, CardMedia, Grid, Link, Paper, Typography} from '@mui/material'
import { createTheme } from "@mui/material"
// import "../../image/camp1.jpg"


const theme = createTheme({
  palette: {
    palette: {
      lb: '#8ecae6'
      ,nb: '#219ebc'
      ,db: '#023047'
      ,lo: '#ffb703'
      ,no: '#fb8500',
    },
  },
});

function MainCarousel(props)
{
    var items = [
        {
            name: "구름계곡캠핑장",
            description: "계곡이 아름다운 대자연속 오토캠핑",
            photoHref: "https://www.gocamping.or.kr/upload/camp/353/thumb/thumb_720_5891zrHdngtkphQO7mY13Av8.jpg" , 
            pageLink: "https://www.cloudcamping.co.kr/"
        },
        {
            name: "별바라기 캠핑 펜션",
            description: "별이 쏟아지는 자연 속의 휴식",
            photoHref: "https://www.gocamping.or.kr/upload/camp/8088/thumb/thumb_720_0282o2Got95WeTdGYgnCPC76.jpg", 
            pageLink: "http://xn--ok0b89o1wddua.com/"
        },
        {
            name: "산마루카라반",
            description: "산에서 즐기는 힐링 카라반",
            photoHref: "https://www.gocamping.or.kr/upload/camp/100234/thumb/thumb_720_2153uRmKRQ283E8reKpprw7M.jpg" , 
            pageLink: "https://booking.naver.com/booking/3/bizes/642735"
        }
    ]

    return (
        <Carousel indicators={false} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props){
    const handleClick = (e) => {
        window.open(`${props.item.pageLink}`)
      }
    return ( 
        <Paper>
            <Grid container sx={{height:400}}>
                <Grid item xs={7}>
                <Card>
                    <CardMedia
                        component="img"
                        image={props.item.photoHref}
                        alt="Camping place"
                        height="400"
                    />
                </Card>  
                </Grid>
                <Grid item xs={5} align="left" sx={{bgcolor:'palette.lo'}}> 
            <Typography variant="h4" sx={{padding:5}}>{props.item.name}</Typography>
            <Typography variant="subtitle1" sx={{pl:5}}>{props.item.description}</Typography>
            <Button variant="outlined" color="inherit" sx={{bottom:50, right: 50, position:"absolute"}}>
                <Link  onClick={handleClick} underline="none" color="inherit">
                둘러보기
                </Link>
                </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default MainCarousel;

