import { Box, CardContent, Typography, TextField, Divider, List, ListItem } from "@mui/material";
import React from "react";

const CardBody = ({ data,data2 }) =>{
    console.log(data);
    return (
        <>
            <CardContent>
               
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.black' }}>
                {
                    data.map(({ experience }) => (
                        <ListItem>
                            <Typography variant="body1" >
                                {experience}
                            </Typography>
                            <Divider />
                        </ListItem>
                    ))
                }
            </List>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.black' }}>
                {
                    data2.map(({ study }) => (
                        <ListItem>
                            <Typography variant="body1" >
                                {study}
                            </Typography>
                            <Divider />
                        </ListItem>
                    ))
                }
            </List>
                
            </CardContent>
        </>
    );
};

export default CardBody;