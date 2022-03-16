import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input/Input";
import styles from "./styles.module.scss"

const SecondQ = () =>{

    const {handleSubmit, register, reset, formState: {errors, isValid}  } = useForm<IUseForm>({mode: "onBlur"})

    const onSubmit = (data:object) => {
        console.log(data)
        reset()
    }
        
    return(
        <form className={styles.Inputs} onSubmit={handleSubmit(onSubmit)}>
            <Input 
            Title="Your full given name:" 
            Type="text"  
            Name="fullName" 
            MinLength={1} 
            MaxLength={5} 
            register={register} 
            errorsTxt={errors.fullName}
            />
            <div className={styles.DateAndCountry}>
                <Input 
                Title="Date of Birth:" 
                Type="month"  
                Name="date" 
                register={register} 
                errorsTxt={errors.date}
                />
                <Input 
                Title="Country of residence or citizenship:" 
                Type="text"  
                Name="country" 
                MinLength={1} 
                MaxLength={10} 
                register={register} 
                errorsTxt={errors.country}
                />
            </div>
            <Input 
            Title="What school do you plan to attend?" 
            Type="text"  
            Name="school" 
            MinLength={1} 
            MaxLength={50} 
            register={register} 
            errorsTxt={errors.school}
            />
            <label className={styles.areaLabel}>Please take a moment to describe your intended area of study</label>
            <textarea 
            placeholder="Enter details here"
            {...register("textarea", {
                required: "required",
            })
            }
            />

            <input type="submit" value={"submit"} disabled={!isValid}/>
        </form>
    )
    
}
interface IUseForm {
    fullName:string,
    date: string,
    country: string,
    school:string,
    textarea: string
}
export default SecondQ
