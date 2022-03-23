import "./App.css";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import { universities, branches, year, course } from "./constants/constant";

import DropDownComponent from "./components/DropDownComponent";

function App() {
  const [fields, setFields] = useState({
    university: "",
    course: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  console.log(fields);

  return (
    <Container maxWidth="sm">
      <Box
        mt={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 500,
        }}
      >
        <DropDownComponent
          name="university"
          label="University"
          options={universities}
          value={fields.university}
          onChange={handleChange}
        />
        <DropDownComponent
          name="course"
          label="Course"
          options={course}
          value={fields.course}
          onChange={handleChange}
        />
        <DropDownComponent
          name="branch"
          label="Branch"
          options={branches}
          value={fields.branch}
          onChange={handleChange}
        />

        <DropDownComponent
          name="year"
          label="Year"
          options={year}
          value={fields.year}
          onChange={handleChange}
        />
      </Box>
    </Container>
  );
}

export default App;
