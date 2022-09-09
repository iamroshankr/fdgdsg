import React from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../constants/data';
import { styled } from "@mui/material";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 180
    }
}));

const Banner = () => {
    return(
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive} 
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            slidesToSlide={1}
            keyBoardControl={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData.map( data => (
                    <Image src={data.url} alt='bannerItem' key={data.id} />
                ))
            }
        </Carousel>
    );
};

export default Banner;