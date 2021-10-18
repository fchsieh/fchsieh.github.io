import React from "react";
import { Stack } from "@mui/material";
import SkillCard from "./SkillCard";

const SkillTab = ({ data }) => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {data.map((item, k) => (
          <SkillCard skill={item.label} image={item.image} key={k} />
        ))}
      </Stack>
    </>
  );
};

export default SkillTab;
