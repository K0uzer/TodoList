import { Flex, Rate } from 'antd'
import React from 'react'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

const RateTodo = ({
    rate,
    setRate,
}: {
    rate: number
    setRate: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <Flex gap="middle" vertical>
            <Rate tooltips={desc} onChange={setRate} value={rate} />
        </Flex>
    )
}

export default RateTodo
