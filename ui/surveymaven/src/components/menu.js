import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    builderLink: {
        textDecoration: 'none',
        color: 'inherited',
    },
}))

export default () => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Toolbar>
            <Typography variant='h6' className={classes.title}>
                SurveyMavens
            </Typography>
            <div>
                <Button
                    color='secondary'
                    variant='outlined'
                    onClick={() => history.push('/builder')}
                >
                    Build
                </Button>
            </div>
        </Toolbar>
    )
}
