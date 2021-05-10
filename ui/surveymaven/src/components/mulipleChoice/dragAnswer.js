import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import IncrementalInput from '../incrementalInput.tsx'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '2rem',
        width: '100%',
        backgroundColor: 'lightblue',
        padding: '2rem',
    },

    input: {
        marginBottom: '1rem',
    },
}))

const DragAnswer = ({ provided, label }) => {
    const classes = useStyles()

    return (
        <>
            {provided && (
                <div
                    ref={provided.innerRef}
                    className={classes.root}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <TextField
                        label={label}
                        variant='outlined'
                        className={classes.input}
                    ></TextField>
                    <IncrementalInput></IncrementalInput>
                </div>
            )}
        </>
    )
}

export default DragAnswer
