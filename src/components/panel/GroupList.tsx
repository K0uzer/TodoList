import React, { useState } from 'react'

const GroupList = ({
    todoGroup,
    setTodoGroup,
}: {
    todoGroup: string[]
    setTodoGroup: React.Dispatch<React.SetStateAction<string[]>>
}) => {
    const [groups, setGroups] = useState(todoGroup)
    const filterGroup = (value: string) =>
        groups.filter((item) => item === value)

    return (
        <select onChange={(event) => filterGroup(event.target.value)}>
            <option key="all" value="Без фильтра групп">
                Без фильтра групп
            </option>
            {todoGroup.map((group) => (
                <option key={group} value={group}>
                    {group}
                </option>
            ))}
        </select>
    )
}

export default GroupList
