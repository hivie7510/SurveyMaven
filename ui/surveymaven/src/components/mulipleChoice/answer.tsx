class Answer {
    _title: string
    value: number
    position: number

    constructor(position: number) {
        this._title = ''
        this.value = 0
        this.position = position
    }

    set title(value: string) {
        this._title = value
    }

    get title() {
        return this._title
    }
}

export default Answer
