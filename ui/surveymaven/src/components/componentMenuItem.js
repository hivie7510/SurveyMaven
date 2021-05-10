import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}))

export default ({ typename }) => {
    const classes = useStyles()
    return (
        <article className={classes.root}>
            <Typography>{typename}</Typography>
            <Button>add</Button>
        </article>
    )
}
