import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PageviewRounded from '@material-ui/icons/PageviewRounded'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    input: {
        marginBottom: '1rem',
    },

    input_name: {
        marginBottom: '1rem',
        width: '50rem',
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    name_button: {
        height: '3rem',
    },
}))

export default () => {
    const classes = useStyles()
    return (
        <article className={classes.root}>
            <Grid container className={classes.container}>
                <article className={classes.name}>
                    <TextField
                        label='Name'
                        variant='outlined'
                        required
                        className={classes.input_name}
                    ></TextField>

                    <Button
                        variant='outlined'
                        color='secondary'
                        className={classes.name_button}
                        startIcon={<PageviewRounded />}
                    >
                        Preview
                    </Button>
                </article>

                <TextField
                    label='Title'
                    variant='outlined'
                    className={classes.input}
                ></TextField>
                <TextField
                    label='Introduction'
                    variant='outlined'
                    className={classes.input}
                ></TextField>
            </Grid>
        </article>
    )
}
