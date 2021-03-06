import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import Item from "../item/Item";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 'auto',
        maxWidth: 500,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


function PageNavigation(props) {

    let {path, url} = useRouteMatch();
    const classes = useStyles();
    const ref = React.createRef();

    return (
        <Container className={classes.cardGrid} maxWidth="md" ref={ref}>
            <Grid container spacing={4}>
                {props.tools.map((tool) => (
                    <Grid item key={tool.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <Link to={`${url}/${tool.id}`}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={tool.img}
                                    title={tool.info}
                                />
                            </Link>
                            <Switch>
                                <Route exact path={path}>
                                </Route>
                                <Route path={`${path}/${tool.id}`}>
                                    <Item
                                        id={tool.id}
                                    />
                                </Route>
                            </Switch>
                            <CardContent
                                className={classes.cardContent}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {tool.title}
                                </Typography>
                                <Typography>
                                    {tool.info}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => props.setBuy(tool)}
                                >
                                    Buy
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PageNavigation;

