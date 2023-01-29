import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { battingData } from "../../data";
import { Header } from "../../shared";
import { renderProgress } from "./components";
import { AppContext } from "../../context";
import { useContext } from "react";
// import { columns } from "../../utils";

const PlayerTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    handleChangeSelectedPlayer,
    tabIndex,
    selectedPlayers,
    openers,
    middleorders,
    finishers,
    allrounders,
  } = useContext(AppContext);

  // const columns = [
  //   {
  //     field: "Name",
  //     headerName: "Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "Team",
  //     headerName: "Team",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "Batting Style",
  //     headerName: "Batting Style",
  //   },
  //   {
  //     field: "Innings Batted",
  //     headerName: "Innings Batted",
  //     type: Number,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  //   {
  //     field: "Runs",
  //     headerName: "Runs",
  //     headerAlign: "center",
  //     type: Number,
  //     flex: 1,
  //     renderCell: ({ row: { Runs } }) => {
  //       return (
  //         <Box
  //           width="60%"
  //           m="0 auto"
  //           py={1}
  //           display="flex"
  //           justifyContent="center"
  //           borderRadius="4px"
  //         >
  //           {renderProgress({ runs: Runs })}
  //         </Box>
  //       );
  //     },
  //   },
  //   {
  //     field: "Balls Faced",
  //     headerName: "Balls Faced",
  //     type: Number,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  //   {
  //     field: "Strike Rate",
  //     headerName: "Strike Rate",
  //     type: Number,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  //   {
  //     field: "Batting Average",
  //     headerName: "Batting Average",
  //     type: Number,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  //   {
  //     field: "Batting Position",
  //     headerName: "Batting Position",
  //     type: Number,
  //     headerAlign: "center",
  //     align: "center",
  //   },
  //   {
  //     field: "Boundary %",
  //     headerName: "Boundary %",
  //     type: Number,
  //     headerAlign: "center",
  //     align: "center",
  //     valueGetter: ({ row }) => `${row["Boundary %"]}%`,
  //   },
  // ];

  const columns = [
    [
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
      {
        field: "Innings Batted",
        headerName: "Innings Batted",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs",
        headerName: "Runs",
        headerAlign: "center",
        type: Number,
        flex: 1,
        renderCell: ({ row: { Runs } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              py={1}
              display="flex"
              justifyContent="center"
              borderRadius="4px"
            >
              {renderProgress({ runs: Runs, maximum: 300 })}
            </Box>
          );
        },
      },
      {
        field: "Balls Faced",
        headerName: "Balls Faced",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Strike Rate",
        headerName: "Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Batting Average",
        headerName: "Batting Average",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Batting Average"].toFixed(2)}`,
      },
      {
        field: "Batting Position",
        headerName: "Batting Position",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Boundary %",
        headerName: "Boundary %",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Boundary %"]}%`,
      },
    ],
    [
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
      {
        field: "Innings Batted",
        headerName: "Innings Batted",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs",
        headerName: "Runs",
        headerAlign: "center",
        type: Number,
        flex: 1,
        renderCell: ({ row: { Runs } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              py={1}
              display="flex"
              justifyContent="center"
              borderRadius="4px"
            >
              {renderProgress({ runs: Runs, maximum: 300 })}
            </Box>
          );
        },
      },
      {
        field: "Balls Faced",
        headerName: "Balls Faced",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Strike Rate",
        headerName: "Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Batting Average",
        headerName: "Batting Average",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Batting Average"].toFixed(2)}`,
      },
      {
        field: "Batting Position",
        headerName: "Batting Position",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Boundary %",
        headerName: "Boundary %",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Boundary %"]}%`,
      },
    ],
    [
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
      // {
      //   field: "Batting Style",
      //   headerName: "Batting Style",
      // },
      // {
      //   field: "Bowling Style",
      //   headerName: "Bowling Style",
      // },
      {
        field: "Innings Batted",
        headerName: "Innings Batted",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs",
        headerName: "Runs",
        headerAlign: "center",
        type: Number,
        flex: 1,
        renderCell: ({ row: { Runs } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              py={1}
              display="flex"
              justifyContent="center"
              borderRadius="4px"
            >
              {renderProgress({ runs: Runs, maximum: 300 })}
            </Box>
          );
        },
      },
      {
        field: "Avg Balls Faced",
        headerName: "Avg Balls Faced",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Avg Balls Faced"].toFixed(2)}`,
      },
      {
        field: "Strike Rate",
        headerName: "Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Batting Average",
        headerName: "Batting Average",
        type: Number,
        headerAlign: "center",
        align: "center",
        valueGetter: ({ row }) => `${row["Batting Average"].toFixed(2)}`,
      },
      {
        field: "Innings Bowled",
        headerName: "Innings Bowled",
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
        field: "Bowling Strike Rate",
        headerName: "Bowling Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Maidens",
        headerName: "Maidens",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
    ],
    [
      {
        field: "Name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      // {
      //   field: "Team",
      //   headerName: "Team",
      //   headerAlign: "left",
      //   align: "left",
      // },
      {
        field: "Batting Style",
        headerName: "Batting Style",
      },
      {
        field: "Bowling Style",
        headerName: "Bowling Style",
      },
      {
        field: "Innings Batted",
        headerName: "Innings Batted",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Runs",
        headerName: "Runs",
        headerAlign: "center",
        type: Number,
        flex: 1,
        renderCell: ({ row: { Runs } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              py={1}
              display="flex"
              justifyContent="center"
              borderRadius="4px"
            >
              {renderProgress({ runs: Runs, maximum: 300 })}
            </Box>
          );
        },
      },
      {
        field: "Strike Rate",
        headerName: "Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Batting Average",
        headerName: "Batting Average",
        type: Number,
        headerAlign: "center",
        align: "center",
        // valueGetter: ({ row }) => `${row["Batting Average"].toFixed(2)}`,
      },
      {
        field: "Innings Bowled",
        headerName: "Innings Bowled",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Wickets",
        headerName: "Wickets",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Balls Bowled",
        headerName: "Balls Bowled",
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
        field: "Bowling Strike Rate",
        headerName: "Bowling Strike Rate",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Maidens",
        headerName: "Maidens",
        type: Number,
        headerAlign: "center",
        align: "center",
      },
    ],
  ];

  const rows = [openers, middleorders, finishers, allrounders];

  // console.log("Player Table ", columns[tabIndex]);

  const keys = [{ filed: "id" }];
  return (
    <Box m="20px" borderColor={"gray"} border={1} borderRadius={4} p={3}>
      <Header title="Power Hitters" subtitle="Openers" />
      <Box
        m="40px 0 0 0"
        height={"45vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[200],
          },
          "& .MuiDataGrid-columnHeaders": {
            // backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            // backgroundColor: colors.blueAccent[700],
            display: "none",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          onSelectionModelChange={(selectedId) =>
            handleChangeSelectedPlayer(openers, selectedId)
          }
          selectionModel={selectedPlayers.map((player) => player.id)}
          rows={rows[tabIndex]}
          columns={columns[tabIndex]}
          keys={keys}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default PlayerTable;
