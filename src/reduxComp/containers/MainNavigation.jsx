import React from "react";
import {
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Admin from "../components/admin/Admin";
import Page from "../components/page/Page";
import {Basket} from "../components/basket/Basket";
import AuthPage from "../components/auth/AuthPage";

import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 320;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,

    },
    title: {
        flexGrow: 1,
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

}));

function MainNavigation(props) {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const {page, basket, setBuyAction, setToolAction, deleteToolAction} = props;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <ul>
                            <Link to={'/page'}>Home</Link>
                        </ul>
                    </Typography>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <ul>
                            <Link to={'/authorization'}>Authorization</Link>
                        </ul>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <ul>
                            <Link to={'/basket'}>Basket</Link>
                        </ul>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <ul>
                            <Link to={'/admin'}>Admin</Link>
                        </ul>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem>
                        <ul>
                            <Link to={'/page'}><ListItemText primary='Home'/></Link>
                        </ul>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ul>
                            <Link to={'/authorization'}><ListItemText primary='authorization'/></Link>
                        </ul>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ul>
                            <Link to={'/basket'}><ListItemText primary='basket'/></Link>
                        </ul>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ul>
                            <Link to={'/admin'}><ListItemText primary='admin'/></Link>
                        </ul>
                    </ListItem>s
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Switch>
                    <Route path={'/authorization'}>
                        <AuthPage/>
                    </Route>
                    <Route path={'/basket'}>
                        <Basket tools={basket.buyTools}
                                deleteTool={deleteToolAction}
                        />
                    </Route>
                    <Route exact path={'/page'}>
                        <Page tools={page.tools}
                              setBuy={setBuyAction}
                        />
                    </Route>
                    <Route path={'/admin'}>
                        <Admin setTool={setToolAction}/>
                    </Route>
                    <Redirect to={'/page'}/>
                </Switch>
            </main>
        </div>
    );
}

export default MainNavigation;



