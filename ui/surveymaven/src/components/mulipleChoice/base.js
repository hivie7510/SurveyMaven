import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import BaseQuestion from '../baseQuestion'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import DragAnswer from './dragAnswer'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        width: '100%',
    },

    input: {
        width: '20rem',
        marginRight: '1rem',
    },
}))

const characters = [
    {
        id: 'gary',
        name: 'Gary Goodspeed',
        thumb: '/images/gary.png',
    },
    {
        id: 'gary1',
        name: 'Gary Goodspeed1',
        thumb: '/images/gary.png',
    },
]

export default () => {
    const classes = useStyles()
    return (
        <article className={classes.root}>
            <BaseQuestion></BaseQuestion>

            <DragDropContext>
                <Droppable droppableId='characters'>
                    {(provided) => (
                        <ul
                            className='characters'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {characters.map(({ id, name, thumb }, index) => {
                                return (
                                    <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <DragAnswer
                                                label={'Answer'}
                                                provided={provided}
                                            ></DragAnswer>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </article>
    )
}
