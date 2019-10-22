import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
        email: '',
        firstName: '',
        lastName: '',
    };

    const [state, setState] = useState(initState);
    const [message, setMessage] = useState('');

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
            body: JSON.stringify(state)
        })
            .then(response => response.json())
            .then(json => {
                setMessage(json.message ? json.message : 'Bład podczas rejestracji, sprawdź wymagane pola')
            })
            .catch(error => {
                console.error(error);
                setMessage('Bład podczas rejestracji')
            })
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        state[inputName] = value
        setState(state);
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
                            <TextField autoComplete="fname"  variant="outlined" required fullWidth label="Imię"
                                       name="firstName"  autoFocus onChange={handleInputChange}/>
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
                    <Button onClick={signUp} fullWidth variant="contained" color="primary"
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
                {message}
            </Box>
        </Container>
    );
}

