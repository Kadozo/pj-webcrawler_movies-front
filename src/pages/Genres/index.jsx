import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Chip, Grid, InputAdornment, TextField } from "@mui/material";
import SpinnerContainer from "spinner-container";
import { Search } from "@mui/icons-material";

// const url = 'http://localhost:3333'
const url = "https://mfdeveloper.com";

export const Genres = (props) => {
  const [genres, setGenres] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [isMovie, setIsMovie] = useState(false);
  const [isSeries, setIsSeries] = useState(false);

  const sendRequest = async () => {
    setLoadingSearch(true);
    let type = "";
    if (!(isMovie && isSeries) && !(!isMovie && !isSeries))
      type = isMovie ? "movies" : "series";
    const r = await (
      await fetch(
        url +
          `/genre/scores?g_name=${search}${type != "" ? "&w_type=" + type : ""}`
      )
    ).json();
    setGenres(r.genres);
    setLoadingSearch(false);
  };

  useEffect(() => {
    const req = setTimeout(() => {
      sendRequest();
    }, 500);

    return () => clearTimeout(req);
  }, [search, isMovie, isSeries]);

  return (
    <div>
      <Grid
        container
        marginTop={2}
        rowSpacing={2}
        columnSpacing={2}
        marginBottom={2}
      >
        <Grid item xs={12}>
          <h3 style={{ fontFamily: "sans-serif" }}>
            Média IMDb dos Filmes e Séries por gênero
          </h3>
        </Grid>
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
        <Grid
          item
          container
          xs={12}
          justifyContent={"center"}
          columnSpacing={2}
        >
          <Grid item>
            <Chip
              label="Series"
              color={"primary"}
              variant={isSeries ? "filled" : "outlined"}
              onClick={() => setIsSeries((prev) => !prev)}
            />
          </Grid>
          <Grid item>
            <Chip
              label="Filmes"
              color="primary"
              variant={isMovie ? "filled" : "outlined"}
              onClick={() => setIsMovie((prev) => !prev)}
            />
          </Grid>
        </Grid>
      </Grid>
      <SpinnerContainer loading={loadingSearch}>
        <Grid container>
          {genres.map((genre, idx) => (
            <Card key={idx} title={genre?.name} imdb_rating={genre?.imdb_avg} />
          ))}
        </Grid>
      </SpinnerContainer>
    </div>
  );
};
