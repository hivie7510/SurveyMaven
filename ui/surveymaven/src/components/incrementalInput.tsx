import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import {
    useState,
    KeyboardEvent,
    ClipboardEvent,
    useRef,
    ChangeEvent,
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

type IncrementalInputProps = {
    maxValue: number
    minValue: number
}

const InrementalInput = ({
    maxValue = 99999,
    minValue = -9999,
}: IncrementalInputProps) => {
    const [value, setValue] = useState<number>(0)

    const inputEl = useRef<HTMLInputElement>(null)

    const onInputHandler: FormEventHandler<HTMLDivElement> = (
        e: FormEvent<HTMLDivElement>
    ) => {
        e.preventDefault()
        return false
    }

    const onSetValue = (input: string, caretPosition?: number) => {
        let nd = parseInt(input)
        if (nd >= minValue && nd <= maxValue) {
            setValue(nd)
            if (inputEl && inputEl.current) {
                const d = inputEl.current as HTMLInputElement
                inputEl.current.selectionStart = 0
                inputEl.current.selectionEnd = 0
            }
        }
    }

    const onKeyDownHandler: FormEventHandler<HTMLDivElement> = (
        e: KeyboardEvent<HTMLInputElement>
    ) => {
        const target = e.target as HTMLInputElement

        if (e.key === 'Backspace') {
            var d = value.toString()
            if (d.length == 1 || (d.length == 2 && d.startsWith('-'))) {
                setValue(0)
                return
            }

            let start = target.selectionStart
            let end = target.selectionEnd
            if (start && end) {
                let a = d.slice(0, start - 1)
                let b = d.slice(end, d.length)
                onSetValue(`${a}${b}`, start)
            } else {
                onSetValue(d.substring(0, d.length - 1), d.length - 1)
            }
            return
        } else if (e.key === 'Delete') {
            var d = value.toString()
            if (d.length == 1) {
                onSetValue('0')
                return
            }

            let start = target.selectionStart
            let end = target.selectionEnd
            if (start && end) {
                if (start === end) {
                    let a = d.slice(0, start)
                    let b = d.slice(end + 1, d.length)

                    onSetValue(`${a}${b}`, start)
                } else {
                    let a = d.slice(0, start)
                    let b = d.slice(end, d.length)

                    onSetValue(`${a}${b}`, start)
                }
            } else {
                onSetValue(d.substring(0, d.length - 1), d.length)
            }

            return
        } else if (Number.isNaN(e.key) && e.key !== '-') {
            e.preventDefault()
            return
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            return true
        } else if (e.key === '-' && value === 0) {
            onSetValue('-0')
        } else if (e.key === '-' && value > 0 && target.selectionStart === 0) {
            onSetValue(`-${value}$`)
            return
        }

        onSetValue(`${value}${e.key}`)
    }

    const onPasteHandler: FormEventHandler<HTMLDivElement> = (
        e: ClipboardEvent<HTMLDivElement>
    ) => {
        const paste = e.clipboardData.getData('text')

        if (typeof paste != 'string') {
            alert()
        }
        if (!Number.isNaN(paste)) {
            e.preventDefault()
        } else {
            onSetValue(`${paste}`)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setSelectionRange(0, 0)
    }

    const onIncrement = () => {
        setValue(value + 1)
    }

    const onDecrement = () => {
        setValue(value - 1)
    }

    const classes = useStyles()
    return (
        <Grid container alignItems='center' justify='flex-start'>
            <Grid item>
                <IconButton
                    aria-label='decrement'
                    className={classes.button}
                    onClick={onDecrement}
                >
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
                    onChange={onChangeHandler}
                    ref={inputEl}
                    value={value}
                ></TextField>
            </Grid>
            <Grid item>
                <IconButton
                    aria-label='increment'
                    className={classes.button}
                    onClick={onIncrement}
                >
                    <AddIcon fontSize='small' />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default InrementalInput
