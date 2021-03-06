import React, { useEffect, useRef, useState } from 'react';
import { Box, CardActions, Collapse, IconButton, Typography } from '@mui/material';
import { UsersList } from '../UsersLIst/UsersList';
import { ExpandMore, GroupOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { SearchUsers } from "../SearchUsers/SearchUsers";
import { SearchInfo } from '../SearchInfo/SearchInfo';

const ExpandMoreStyle = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
}));

export const UsersListSidebar = ({ searchCount, searchText }) => {

    // открытие/закрытие выпадающего меню
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    //-------------------------------------------------------------------------------
    // открытие расширенного текста поста
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ mb: "15px" }}>
            <CardActions sx={{ marginTop: "auto" }} disableSpacing >
                <Box sx={{ display: "flex" }}>
                    <GroupOutlined />

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontWeight: 700, fontSize: "16px" }}
                    >
                        Пользователи
                    </Typography>
                </Box>
                <ExpandMoreStyle
                    fontSize="small"
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-label="show more"
                >
                    <ExpandMore fontSize="small" />
                </ExpandMoreStyle>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box sx={{ mb: "15px", px: "10px" }}>
                    <SearchUsers searchText={searchText} />
                </Box>
                <SearchInfo
                    searchCount={searchCount}
                    searchText={searchText}
                    searchTarget="автора"
                />
                <Box sx={{ pl: "8px" }}>
                    <UsersList />
                </Box>
            </Collapse>
        </Box>
    );
}