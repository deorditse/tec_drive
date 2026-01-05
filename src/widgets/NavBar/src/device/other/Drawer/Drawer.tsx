import { memo, useMemo, useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { MenuSchema } from "../../../model/types/menu";
import { useMenu } from "../../../model/selectors/topSection";

interface DrawerWidgetProps {
    className?: string;
}

const DrawerWidget = memo(({ className }: DrawerWidgetProps) => {
    const [open, setOpen] = useState(false);
    const menus = useMenu();

    const toggleDrawer = () => setOpen((prev) => !prev);
    const closeDrawer = () => setOpen(false);
    const navigate = useNavigate();

    const handleClickNav = (nav: MenuSchema) => () => {
        nav.onClick();

        closeDrawer();
    };

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ zIndex: 1301 }}
                className={className}
            >
                {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={closeDrawer}
                PaperProps={{
                    sx: {
                        width: 280,
                        backgroundColor: "#111",
                        color: "#fff",
                        padding: 2,
                    },
                }}
            >
                <List sx={{ paddingTop: 4 }}>
                    {menus.map((nav: MenuSchema) => (
                        <ListItemButton
                            key={nav.title}
                            onClick={handleClickNav(nav)}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#222",
                                },
                            }}
                        >
                            <ListItemText
                                primary={nav.title}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </>
    );
});

export default DrawerWidget;
