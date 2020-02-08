import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authorizationFailed, authorizationSuccess} from "../../redux/actions/authActions";
import {Redirect} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";


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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    message: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default (props) => {
    const classes = useStyles();

    const initialState = {
        username: '',
        password: '',
    };
    const [state, setState] = useState(initialState);
    const [message, setMessage] = useState('');
    const isAuthorized = useSelector(state => state.isAuthorized);
    const dispatch = useDispatch();
    const redirectToRegistration = () => {
        props.history.push('/signup')
    }

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        state[inputName] = value;
        setState({...state});
    };

    const login = () => {
        setMessage('');
        fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: state.username, password: state.password})
        })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json();
                } else {
                    setMessage('Logowanie nie powiodło się, wprowadzone dane są nieprawidłowe');
                    dispatch(authorizationFailed)
                }
            })
            .then(json => {
                localStorage.setItem('token', json.accessToken);
                dispatch(authorizationSuccess);
            })
            .catch(error => {
                dispatch(authorizationFailed)
            })
    };

    const from = props.location.state || {from: {pathname: '/'}};
    if (isAuthorized === true && from) {
        return <Redirect to={from}/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Zaloguj się
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField onChange={handleInputChange} variant="outlined" margin="normal" required fullWidth
                               label="Nazwa użytkownika" name="username" autoComplete="username" autoFocus/>
                    <TextField onChange={handleInputChange} variant="outlined" margin="normal" required fullWidth
                               name="password" label="Hasło" type="password" autoComplete="current-password"/>
                    <Button onClick={login} fullWidth variant="contained" color="primary" className={classes.submit}>
                        Zaloguj się
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Zapomniałeś hasła?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link onClick={redirectToRegistration} variant="body2">
                                Nie masz konta? Zarejestruj się
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item className={classes.message}>{message}</Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
