import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function RestaurantsTable({ data = [] }) {
  const items = Array.isArray(data)
    ? data.map((val) => ({
        id: val.id,
        name: val.name,
        address: val.address,
        imageUrl: val.imageUrl,
      }))
    : [];

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 1500, mx: "auto", mt: 2 }}
    >
      <Table aria-label="restaurants table">
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                fontWeight: 700,
                fontSize: "1rem",
              },
            }}
          >
            <TableCell>Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} align="left">
                No restaurants found
              </TableCell>
            </TableRow>
          ) : (
            items.map((row) => (
              <TableRow
                key={row.id ?? row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "rgba(67, 23, 150, 0.13)",
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.imageUrl ? (
                    <img
                      src={row.imageUrl}
                      alt={"no photo available"}
                      width={200}
                      height={200}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    "—"
                  )}
                </TableCell>
                <TableCell align="left">
                  {row.name || "name unavailable"}
                </TableCell>
                <TableCell align="left">
                  {row.address || "address unavailable"}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RestaurantsTable;
