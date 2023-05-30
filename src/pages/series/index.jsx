import { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import Card from "../../components/Card/Card";
import { Grid, InputAdornment, TextField } from "@mui/material";
import SpinnerContainer from "spinner-container";
import { Search } from "@mui/icons-material";

// const url = 'http://localhost:3333'
const url = "https://mfdeveloper.com";

export const Series = (props) => {
  const [series, setSeries] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [offsetList, setOffsetList] = useState(0);
  const [loadingScroll, setLoadingScroll] = useState(false);
  const [full, setFull] = useState(false);

  const sendRequest = async (offset = null) => {
    setLoadingSearch(true);
    const r = await (
      await fetch(url + `/watchable?type=series&title=${search}`)
    ).json();
    setSeries(r.watchables);
    setFull(false);
    setOffsetList(0);
    setLoadingSearch(false);
  };

  const infinitScroll = async () => {
    setLoadingScroll(true);
    const r = await (
      await fetch(
        url + `/watchable?type=series&title=${search}&offset=${offsetList}`
      )
    ).json();

    console.log("infinit scroll");
    if (r?.watchables?.length > 0)
      setSeries((prev) => prev.concat(r.watchables));
    else setFull(true);
    setLoadingScroll(false);
  };

  const getImages = async () => {
    setLoading(true);
    const r = await (
      await fetch(url + `/watchable?type=series&only_img=true`)
    ).json();
    setImages(r.watchables);
    setLoading(false);
  };

  useEffect(() => {
    if (offsetList !== 0 && !full) infinitScroll();
  }, [offsetList]);

  useEffect(() => {
    const intersect = new IntersectionObserver(hanldeIntersect);

    intersect.observe(document.querySelector("#sentinela"));
    getImages();

    return () => intersect.disconnect();
  }, []);

  const hanldeIntersect = (e) => {
    if (e.some((entry) => entry.isIntersecting)) {
      setOffsetList((prev) => prev + 10);
    }
  };

  useEffect(() => {
    const req = setTimeout(() => {
      sendRequest();
    }, 500);

    return () => clearTimeout(req);
  }, [search]);

  useEffect(() => {
    console.log(series.length);
  }, [series]);

  return (
    <div>
      <Carousel data={images} loading={loading} />
      <Grid container marginTop={2} columnSpacing={2} marginBottom={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <SpinnerContainer loading={loadingSearch}>
        <Grid container>
          {series.map((movie, idx) => (
            <Card
              key={idx}
              img={movie?.img}
              title={movie?.title}
              end_year={movie.end_year}
              start_year={movie.start_year}
              genres={movie?.genres}
              imdb_rating={movie?.imdb_rating}
              descripion={movie?.description}
            />
          ))}
          <Grid item xs={12}>
            <SpinnerContainer loading={loadingScroll}>
              <i
                id="sentinela"
                style={series.length < 10 ? { display: "none" } : {}}
              />
            </SpinnerContainer>
          </Grid>
        </Grid>
      </SpinnerContainer>
    </div>
  );
};
