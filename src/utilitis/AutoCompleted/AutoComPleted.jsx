import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
export default function AutoComPleted() {
  return (
    <div className=" relative w-[456px] h-[65px] rounded-full">
      <Autocomplete
        className="w-[456px] h-[65px] auto_box relative flex items-center justify-center DEMO pt-1"
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <>
            {" "}
            <TextField {...params} placeholder="Zara.c|" />
          </>
        )}
      />
    </div>
  );
}
