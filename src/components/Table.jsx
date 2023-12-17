import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const data = [
  {
    reasoning: "Menuration 2D",
    aptitude: "Numbers",
    ability: "Passage/Sentence Rearrangement",
  },
  {
    reasoning: "Menuration 3D",
    aptitude: "LCM & HCF",
    ability: "Error Detection and Correction",
  },
  {
    reasoning: "Trignometry and Height & Distance",
    aptitude: "Work & Wages",
    ability: "Fill in the blanks",
  },
  {
    reasoning: "Progressions",
    aptitude: "Pipes & Cisterns",
    ability: "Comprehension Passages",
  },
  {
    reasoning: "Logarithims",
    aptitude: "Time Speed Distance",
    ability: "Cloze Test",
  },
  {
    reasoning: "Permuatation & Combinations",
    aptitude: "Trains,  Boats,  and Streams",
    ability: "Jumbled Words/Paragraphs",
  },
  {
    reasoning: "Probability",
    aptitude: "Percentage",
    ability: "Antonyms and Synonyms",
  },
  {
    reasoning: "Geometry",
    aptitude: "Ration Proportion & Partnership",
    ability: "Idioms and Phrases",
  },
  {
    reasoning: "Clocks",
    aptitude: "Mixtures and Allegation",
    ability: "Vocabulary and grammar",
  },
  {
    reasoning: "Calenders",
    aptitude: "Algebra",
    ability: "One Word Substitution",
  },
  { reasoning: "Coding-Decoding", aptitude: "Average", ability: "" },
  { reasoning: "Race", aptitude: "Age", ability: "" },
];

const CoursesTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table_head">
          <TableRow>
            <TableCell style={{fontSize:"1.3rem"}}>Quantitative Aptitude</TableCell>
            <TableCell style={{fontSize:"1.3rem"}}>Reasoning&nbsp;</TableCell>
            <TableCell style={{fontSize:"1.3rem"}}>Verbal Abillity&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="table_cell_row">{item.aptitude}</TableCell>
              <TableCell className="table_cell_row">{item.reasoning}</TableCell>
              <TableCell className="table_cell_row">{item.ability}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoursesTable;
