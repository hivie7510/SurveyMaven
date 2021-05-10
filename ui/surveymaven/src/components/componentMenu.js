import Paper from '@material-ui/core/Paper'
import React from 'react'
import ComponentMenuItem from './componentMenuItem'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        marginLeft: '2rem',
        minHeight: '20rem',
        padding: '1rem',
    },
}))

export default () => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Typography variant='h5'>Selection Types</Typography>
            <ComponentMenuItem typename='Multiple Selection'></ComponentMenuItem>
            <Typography variant='h5'>Input Types</Typography>
            <ComponentMenuItem typename='Text'></ComponentMenuItem>
            <ComponentMenuItem typename='Numeric'></ComponentMenuItem>
            <ComponentMenuItem typename='Slider'></ComponentMenuItem>
        </Paper>
    )
}
