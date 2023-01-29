import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Grid, Typography } from "@mui/material";
import { AppContext } from "../../context";
import { useContext } from "react";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const columns = [
  {
    field: "Name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "Team",
    headerName: "Team",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "Batting Style",
    headerName: "Batting Style",
  },
  { field: "Player Role", headerName: "Player Role" },
  {
    field: "Bowling Style",
    headerName: "Bowling Style",
  },
  {
    field: "Batting Average",
    headerName: "Batting Average",
    type: Number,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Strike Rate",
    headerName: "Batting Strike Rate",
    type: Number,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Economy",
    headerName: "Economy",
    type: Number,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Economy",
    headerName: "Economy",
    type: Number,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Bowling Average",
    headerName: "Bowling Average",
    type: Number,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Bowling Strike Rate",
    headerName: "Bowling Strike Rate",
    type: Number,
    headerAlign: "center",
    align: "center",
  },
];

const keys = [{ field: "id" }];

const Item = ({ value, title }) => {
  return (
    <Stack>
      <Typography
        variant="h5"
        color="black"
        align="center"
        fontSize={24}
        fontFamily={"cursive"}
        fontWeight={"bold"}
      >
        {value}
      </Typography>
      <Typography variant={"body1"} color="black" align="center">
        {title}
      </Typography>
    </Stack>
  );
};

const Final11Page = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { selectedPlayers } = useContext(AppContext);
  return (
    <Container sx={{ height: "90vh", paddingY: 4, width: "100%" }}>
      <Stack sx={{ width: "100%" }} gap={6}>
        <DataGrid
          rows={selectedPlayers}
          columns={columns}
          pageSize={5}
          keys={keys}
          rowsPerPageOptions={[5]}
          autoHeight
        />

        <Grid
          container
          alignItems={"center"}
          p={2}
          bgcolor={colors.yellow[500]}
          columnGap={2}
          borderRadius={2}
          sx={{ transform: "skew(-20deg)" }}
        >
          <Grid item md={2}>
            <Typography
              variant={"h3"}
              color="black"
              align="center"
              fontSize={30}
            >
              Team Performance
            </Typography>
          </Grid>
          <Grid item md={1}>
            <Item value={37.76} title={"Batting Average"} />
          </Grid>
          <Grid item md={1}>
            <Item value={151.92} title={"Strike Rate"} />
          </Grid>
          <Grid item md={2}>
            <Item value={19.7} title={"Average Balls Faced"} />
          </Grid>
          <Grid item md={1}>
            <Item value={13.5} title={"Bowling Average"} />
          </Grid>
          <Grid item md={1}>
            <Item value={12.5} title={"Bowling Strike Rate"} />
          </Grid>
          <Grid item md={1}>
            <Item value={6.48} title={"Economy"} />
          </Grid>
          <Grid item md={1}>
            <Item value={`${42.63}%`} title={"Dot Ball %"} />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Final11Page;
