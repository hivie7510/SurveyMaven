import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import React from 'react'
// For test only

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        // '& :hover': {
        //     backgroundColor: '#819ca9',
        //     borderRadius: '12px',
        // },
    },
    child: {
        padding: '2rem',
        display: 'flex',
    },
}))

export default ({ children }) => {
    const classes = useStyles()

    return (
        <article className={classes.root}>
            <article className={classes.child}>{children}</article>
        </article>
    )
}
