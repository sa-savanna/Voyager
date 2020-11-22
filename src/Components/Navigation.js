import React from 'react'
import { Image } from 'react-bootstrap';
import Globe from './Slider/img/globe_PNG62.png'
import InputSearch from "./InputSearch"
//material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginLeft: '1rem',
        fontSize: '2rem'
    },
}));


export const Navigation = ({ country }) => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className="Toolbar">
                        <Image width="50px" src={Globe} />
                        <Typography variant="h6" className={classes.title}>
                            {country.charAt(0).toUpperCase() + country.slice(1)}
                        </Typography>
                        <InputSearch />
                        <Link href="/" color="inherit">
                            Home
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}