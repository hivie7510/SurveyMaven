import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
// For test only
import QuestionContainer from './questionContainer'

const Multiple = require('./mulipleChoice/base.tsx').default
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
}))

export default () => {
    return (
        <article>
            <Typography variant='h5'>Survey</Typography>
            <article>
                <QuestionContainer>
                    <Multiple />
                </QuestionContainer>
            </article>
        </article>
    )
}
