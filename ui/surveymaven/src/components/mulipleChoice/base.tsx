import { makeStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import AddIcon from '@material-ui/icons/Add'
import { useState } from 'react'
const Answer = require('./answer.tsx').default
const DragAnswer = require('./dragAnswer.tsx').default
const BaseQuestion = require('../baseQuestion').default

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

export default () => {
    const classes = useStyles()

    const [answers, setAnswers] = useState<typeof Answer[]>([
        new Answer(0),
        new Answer(1),
    ])

    const [title, setTitle] = useState<string>('')

    const onDragEnd = (event: any) => {
        if (!event.destination) {
            return
        }

        const items = reorder(
            [...answers],
            event.source.index,
            event.destination.index
        )

        setAnswers(items)
    }

    const reorder = (list: any[], startIndex: number, endIndex: number) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result
    }

    return (
        <article className={classes.root}>
            <BaseQuestion onTitleChange={setTitle}></BaseQuestion>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='characters'>
                    {(provided) => (
                        <article
                            className='characters'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {answers.map((r, index) => {
                                return (
                                    <Draggable
                                        key={r.position}
                                        draggableId={r.position.toString()}
                                        index={r.position}
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
                            <IconButton>
                                <AddIcon></AddIcon>
                            </IconButton>
                        </article>
                    )}
                </Droppable>
            </DragDropContext>
            <Button
                onClick={() => console.log({ title: title, answers: answers })}
            >
                Preview
            </Button>
        </article>
    )
}
