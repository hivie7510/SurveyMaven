import Grid from '@material-ui/core/Grid'
import React from 'react'
import Menu from '../components/componentMenu'
import Basic from '../components/baseInformationEntry'
import { makeStyles } from '@material-ui/core/styles'
import SurveyContainer from '../components/surveyContainer'

const useStyles = makeStyles((theme) => ({
    menu: {
        width: '20rem',
    },
    survey: {
        width: '60rem',
        marginLeft: '5rem',
    },
}))

export default () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container>
                <Grid item className={classes.menu}>
                    <Menu></Menu>
                </Grid>
                <Grid item className={classes.survey}>
                    <Basic></Basic>
                    <SurveyContainer></SurveyContainer>
                </Grid>
            </Grid>
        </div>
    )
}
