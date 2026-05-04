import { memo, useRef, useState } from "react";

interface Props {
    children: string;
    id: number;
    remove: (id: number) => void;
    edit: (id: number, text: string) => void;
}

const Task = ({children, id, remove, edit}: Props) => {
    const [isEditing, setIsEditing] = useState(false);

    const textId = useRef<HTMLTextAreaElement>(null);

    console.log(`Task rendered: ${children}, id: ${id}`);

    const handleClickEdit = () => {
        setIsEditing(true);
    }

    const handleClickRemove = () => {
        remove(id);
    }

    const handleClickSave = () => {
        edit(id, textId.current!.value);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div className={'box'}>
                <textarea ref={textId} defaultValue={children}></textarea>
                <button onClick={handleClickSave} className={'btn success'}>Save</button>
            </div>
        )
    }

    return (
        <div className={'box'}>
            <div>{children}</div>
            <button onClick={handleClickEdit} className={'btn light'}>Edit</button>
            <button onClick={handleClickRemove} className={'btn red'}>Remove</button>
        </div>
    )
}

export default memo(Task);