import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import React, {
    useState,
    FunctionComponent,
    KeyboardEvent,
    ClipboardEvent,
} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { FormEventHandler } from 'react'
import { FormEvent } from 'react'

const useStyles = makeStyles((theme) => ({
    input: {
        margin: '0.875rem',
        width: '10ch',
        '& > label': { transform: 'translate(19px, 12px) scale(1)' },
        '& input': { padding: '10px 14px' },
    },

    button: {
        padding: 0,
    },
}))

const InrementalInput: FunctionComponent<{ maxValue: number }> = (props: {
    maxValue: number
}) => {
    const [value, setValue] = useState(null)

    const onInputHandler: FormEventHandler<HTMLDivElement> = (
        e: FormEvent<HTMLDivElement>
    ) => {
        e.preventDefault()
        return false
    }

    const onKeyDownHandler: FormEventHandler<HTMLDivElement> = (
        e: KeyboardEvent<HTMLDivElement>
    ) => {
        if (Number.isNaN(e.key)) {
            e.preventDefault()
        }
    }

    const onPasteHandler: FormEventHandler<HTMLDivElement> = (
        e: ClipboardEvent<HTMLDivElement>
    ) => {
        const paste = e.clipboardData.getData('text')
        debugger
        if (Number.isNaN(paste)) {
            e.preventDefault()
        }
    }

    const classes = useStyles()
    return (
        <Grid container alignItems='center' justify='flex-start'>
            <Grid item>
                <IconButton aria-label='decrement' className={classes.button}>
                    <RemoveIcon fontSize='small' />
                </IconButton>
            </Grid>
            <Grid item>
                <TextField
                    label='Value'
                    variant='outlined'
                    className={classes.input}
                    onInput={onInputHandler}
                    onKeyDown={onKeyDownHandler}
                    onPaste={onPasteHandler}
                ></TextField>
            </Grid>
            <Grid item>
                <IconButton aria-label='increment' className={classes.button}>
                    <AddIcon fontSize='small' />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default InrementalInput
