import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default (props) => {
    const classes = useStyles();
    const initState = {
        password: '',
        username: '',
        email: '',
        name: '',
        message: '',
    };

    const [state, setState] = useState(initState);

    const redirectToLogin = () => {
        props.history.push('/signin')
    };

    const signUp = () => {
        fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: state.username,
                password: state.password,
                email: state.email,
                name: state.name
            })
        })
            .then(response => response.json())
            .then(json => {
                setState(state => ({
                    message: json.message ? json.message : 'Bład podczas rejestracji',
                    password: '',
                    username: '',
                    email: '',
                    name: ''
                }))
            })
            .catch(error => {
                console.error(error);
                setState(state => ({
                    message: 'Bład podczas rejestracji',
                }))
            })
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        setState(state => ({
            [inputName]: value
        }));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Zarejestruj się
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth
                                       label="Imię" autoFocus onChange={handleInputChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" required fullWidth label="Nazwisko"
                                       name="lastName" autoComplete="lname" onChange={handleInputChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth label="Adres Email "
                                       name="email" autoComplete="email" onChange={handleInputChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth name="password" label="Hasło"
                                       type="password" autoComplete="current-password" onChange={handleInputChange}/>
                        </Grid>
                    </Grid>
                    <Button onClick={signUp} type="submit" fullWidth variant="contained" color="primary"
                            className={classes.submit}>
                        Zarejestruj się
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link onClick={redirectToLogin} variant="body2">
                                Masz już konto? Zaloguj się
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
            </Box>
        </Container>
    );
}

