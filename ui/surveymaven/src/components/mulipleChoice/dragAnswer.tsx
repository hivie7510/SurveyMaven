import { useState, ChangeEvent } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import DeleteIcon from '@material-ui/icons/Delete'
const IncrementalInput = require('../incrementalInput.tsx').default

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    input: {
        marginBottom: '1rem',
        width: '100%',
    },
}))

class Props {
    provided: any
}

const DragAnswer = ({ provided }: Props) => {
    const classes = useStyles()
    const [title, setTitle] = useState<string>('')

    return (
        <>
            {provided && (
                <Grid
                    container
                    ref={provided.innerRef}
                    className={classes.root}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Grid item>
                        <MenuIcon></MenuIcon>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            label='Answer'
                            variant='outlined'
                            className={classes.input}
                            fullWidth={true}
                            onChange={(
                                ev: ChangeEvent<HTMLInputElement>
                            ): void => setTitle(ev.target.value)}
                            value={title}
                        ></TextField>
                    </Grid>
                    <Grid item>
                        <IncrementalInput></IncrementalInput>
                    </Grid>
                    <Grid item>
                        <DeleteIcon></DeleteIcon>
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default DragAnswer
