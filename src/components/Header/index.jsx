import React, { useContext } from "react";
import { CurrentUserContext } from './../../context/CurrentUserContext';
import { AppBar, Toolbar, IconButton, Box, Typography, Avatar } from "@mui/material";
import { Icon16Crown } from '@vkontakte/icons';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Socials } from './../Socials/index';

export const Header = ({ children }) => {

    const currentUser = useContext(CurrentUserContext);
    const fakeAvatar = "https://react-learning.ru/image-compressed/default-image.jpg";
    const letterAvatar = currentUser?.name?.split(" ").slice(0, 2).map(n => n.slice(0, 1)).join("");

    return (
        <AppBar position="sticky" sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Toolbar>
                        <Icon16Crown width={32} height={32} />
                        <Typography variant="h6" component="h1" sx={{ fontSize: "1rem", flexGrow: 1, textTransform: "uppercase", pl: "15px" }}>
                            Posts List
                        </Typography>
                    </Toolbar>
                </Box>

                <Box sx={{ pr: "15px", display: "flex", alignItems: "center" }}>
                    <Box sx={{ mr: "15px" }}>
                        {children}
                    </Box>
                    <IconButton>
                        {currentUser.avatar && currentUser.avatar === fakeAvatar
                            ? <Avatar
                                alt="avatar"
                            >
                                {letterAvatar}
                            </Avatar>
                            : <Avatar
                                src={currentUser?.avatar}
                                alt="avatar"
                            >
                                {!currentUser.avatar && currentUser.name}
                            </Avatar>}
                    </IconButton>
                    <Box>
                        <LogoutOutlinedIcon />
                    </Box>
                </Box>
            </Box>
        </AppBar >
    );
};