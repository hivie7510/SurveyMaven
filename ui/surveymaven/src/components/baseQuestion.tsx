import { ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        width: '100%',
        // '& :hover': {
        //     backgroundColor: 'yellow',
        // },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    input: {
        marginBottom: '1rem',
    },
}))

type BaseQuestionProps = {
    onTitleChange: (title: string) => void
}

export default ({ onTitleChange }: BaseQuestionProps) => {
    const classes = useStyles()
    return (
        <article className={classes.root}>
            <FormControlLabel
                control={<Switch name='required' />}
                label='Required'
            />
            <Grid container className={classes.container}>
                <TextField
                    label='Title'
                    variant='outlined'
                    className={classes.input}
                    multiline
                    rowsMax='2'
                    onChange={(ev: ChangeEvent<HTMLInputElement>): void =>
                        onTitleChange(ev.target.value)
                    }
                ></TextField>
            </Grid>
        </article>
    )
}
