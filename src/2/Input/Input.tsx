import React, { FC } from "react"
import styles from "./styles.module.scss";

const Input: FC<IInput> = ({Title, Type, Name, MaxLength, MinLength, register, errorsTxt }) =>{
    return(
        <div className={styles.Input}>
            <label className={styles.title}>{Title}</label>
            <input 
                className={styles.inputItem} 
                type={Type} 
                {...register(Name, {
                    required: "required",
                    minLength: {
                        value: MinLength,
                        message: `MIN LENGTH IS ${MinLength}`
                    },
                    maxLength: {
                        value: MaxLength,
                        message: `MAX LENGTH IS ${MaxLength}`
                    }
                })
                }
            /> 
            {errorsTxt && <div className={styles.inputError}>{errorsTxt.message}</div>}
        </div>
    )
    
}

interface IInput {
    Title: string,
    Type:string,
    Name: string,
    MaxLength?: number,
    MinLength?: number,
    register: any,
    errorsTxt: any
}
export default Input