import React, {useState} from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: React.FC<TodoFormProps> = (props)=>{ // {onAdd(title: string): void} это параметр который возвращает void(ничего) и ждем в компоненте TodoForm
    // const [title, setTitle] = useState<string>(``)

    const ref = React.useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{ // <HTMLInputElement> указали что тип Input
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent)=>{
        if(event.key === `Enter`){
            console.log(ref.current!.value)
            props.onAdd(ref.current!.value) // ! означает мы уверены, что здесь будет все хорошо, а не null
            ref.current!.value = ``;
            // setTitle(``) // эта строчка зануляет input после enter нажатия
        }
    }

    return(
        <div className="input-field mt2">
            <input
                ref={ref}
                // onChange={changeHandler}
                onKeyPress={keyPressHandler}
                // value={title}
                type="text" id="title" placeholder="Введите название дела"></input>
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}
