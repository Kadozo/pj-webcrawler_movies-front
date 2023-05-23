import { useState } from "react";
import { Container, Content, Image, Button } from "./styles";
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import SpinnerContainer from "spinner-container";
import { Grid } from "@mui/material";
import { imgWidth } from "../../utils/consts";

const Carousel = ({data, loading = false}) => {
    const [isDrag, setIsDrag] = useState(false);
    const [prevPageX, setPrevPageX] = useState();
    const [prevScrollLeft, setPrevScrollLeft] = useState();
    const [carousel, setCarousel] = useState(null);
    const [showBtnR, setShowBtnR] = useState(true);
    const [showBtnL, setShowBtnL] = useState(false);

    const getCarousel = () => {
        if (carousel === null){
            let c = document.querySelector(".drag"); 
            setCarousel(c);
            return c;
        } else
            return carousel;
    }

    const dragging = (e, touch) => {
        if(!isDrag) return;

        let c = getCarousel();
        if (!touch)
            e.preventDefault();
        let dif = (e.pageX || e.touches[0].pageX) - prevPageX;
        c.scrollLeft = prevScrollLeft - dif;
        showButton()
    }
    const dragStart = (e) => {
        let c = getCarousel();
        setIsDrag(true);
        setPrevPageX(e.pageX || e.touches[0].pageX);
        setPrevScrollLeft(c.scrollLeft);
    }
    const dragStop = (e) => {
        setIsDrag(false);
    }

    const calculateScrollButton = () => {
        let c = getCarousel();
        let scrolling = Math.trunc(c.clientWidth / imgWidth)

        return scrolling * imgWidth
    }

    const handleButton = (side) => {
        let c = getCarousel();
        let scrolling = calculateScrollButton();
        c.scrollLeft += side === "right" ? scrolling : -scrolling;
        setTimeout(() => showButton(), 60);
    }

    const showButton = () => {
        let c = getCarousel();
        setShowBtnL(!(c.scrollLeft === 0));
        setShowBtnR(!(c.scrollLeft === c.scrollWidth - c.clientWidth));
    }


    return (
    <Container>
        <SpinnerContainer loading={loading}>
            <Grid container justifyContent={"center"} flexDirection={"column"}>
                <Button show={showBtnL.toString()} variant="contained" left={"-25px"} onClick={() => handleButton("left")}>
                    <KeyboardArrowLeft />
                </Button>
                <Content
                    className="drag"
                    onMouseMove={(e) => dragging(e)}
                    onTouchMove={(e) => dragging(e ,true)}
                    onMouseDown={dragStart}
                    onTouchStart={dragStart}
                    onMouseUp={dragStop}
                    onMouseLeave={dragStop}
                    onTouchEnd={dragStop}
                    isDrag={isDrag}
                    // onScroll={() => showButton()}
                >
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BYWZiNTBlOTMtZTczZC00NjUwLWExYTQtY2U1ODBiOWMzM2ExXkEyXkFqcGdeQXVyMTUyNjIwMDEw.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BNjJiYjNhOGItNGZjYi00NWEzLTg1MGUtODk0NTJkM2QwNTFkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4.jpg" alt="img" draggable="false" />
                    <Image src="https://m.media-amazon.com/images/M/MV5BYWZiNTBlOTMtZTczZC00NjUwLWExYTQtY2U1ODBiOWMzM2ExXkEyXkFqcGdeQXVyMTUyNjIwMDEw.jpg" alt="img" draggable="false" />
                </Content>
                <Button show={showBtnR.toString()} variant="contained" right={"-25px"} onClick={() => handleButton("right")}>
                    <KeyboardArrowRight />
                </Button>
            </Grid>
        </SpinnerContainer>
    </Container>
    );
};

export default Carousel;