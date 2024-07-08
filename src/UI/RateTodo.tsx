import { Rate } from 'antd'
import React from 'react'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

const RateTodo = ({
    rate,
    setRate,
}: {
    rate: number
    setRate: React.Dispatch<React.SetStateAction<number>>
}) => {
    return <Rate tooltips={desc} onChange={setRate} value={rate} />
}

export default RateTodo
