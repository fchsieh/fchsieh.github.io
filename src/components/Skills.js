import React, { useState } from "react";
import { Box, Typography, Tab } from "@material-ui/core";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import { makeStyles } from "@material-ui/core/styles";

import SkillTab from "./SkillTab";
// languages
import pythonLogo from "../images/python.png";
import cppLogo from "../images/cpp.png";
import jsLogo from "../images/js.png";
import bashLogo from "../images/bash.png";
import goLogo from "../images/golang.png";
// libraries
import reactLogo from "../images/react.png";
import nodeLogo from "../images/node.png";
import kerasLogo from "../images/keras.png";
// tools
import linuxLogo from "../images/linux.png";
import gitLogo from "../images/git.png";
import dockerLogo from "../images/docker.png";
import latexLogo from "../images/latex.png";
import mongoLogo from "../images/mongo.png";

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: "rgba(0, 124, 199, 0.4)",
        backdropFilter: "blur(45px)",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
    },
    sectionHeading: {
        color: "#eefbfb",
        margin: "auto",
        textAlign: "center",
        paddingBottom: "60px",
    },
    emphasize: {
        color: "#4da8da",
    },
    tab: {
        color: "#eefbfb",
    },
}));

const skillsData = [
    { label: "C/C++", image: cppLogo },
    { label: "Python", image: pythonLogo },
    { label: "JavaScript", image: jsLogo },
    { label: "Go", image: goLogo },
    { label: "Bash", image: bashLogo },
];

const librariesData = [
    { label: "React", image: reactLogo },
    { label: "Node", image: nodeLogo },
    { label: "Keras", image: kerasLogo },
];

const toolsData = [
    { label: "Linux", image: linuxLogo },
    { label: "Git", image: gitLogo },
    { label: "Docker", image: dockerLogo },
    { label: "MongoDB", image: mongoLogo },
    { label: "LaTeX", image: latexLogo },
];

const Skills = () => {
    const [tab, setTab] = useState("1");

    const classes = useStyles();
    return (
        <>
            <Box className={classes.section}>
                <Box>
                    <Typography variant="h3" className={classes.sectionHeading}>
                        Professional{" "}
                        <span className={classes.emphasize}>Skills</span>
                    </Typography>
                </Box>
                <TabContext value={tab}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={(e, value) => {
                                setTab(value);
                            }}
                            variant="center"
                        >
                            <Tab
                                className={classes.tab}
                                label="Languages"
                                value="1"
                                style={{
                                    fontSize: "1rem",
                                }}
                            />
                            <Tab
                                className={classes.tab}
                                label="Libraries"
                                value="2"
                                style={{
                                    fontSize: "1rem",
                                }}
                            />
                            <Tab
                                className={classes.tab}
                                label="Tools"
                                value="3"
                                style={{
                                    fontSize: "1rem",
                                }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <SkillTab data={skillsData} />
                    </TabPanel>
                    <TabPanel value="2">
                        <SkillTab data={librariesData} />
                    </TabPanel>
                    <TabPanel value="3">
                        <SkillTab data={toolsData} />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
};

export default Skills;
