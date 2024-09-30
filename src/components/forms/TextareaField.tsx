import { IFormField } from "../../interfaces/interfaces"

export const TextareaField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, name, required = false, register } = props;
    
    return (
        <label className="form-label">
            <span className="font-bold w-1/5">{label}</span>
            <textarea 
                {...register(name)}
                required={required} 
                className="form-field min-h-[300px]" 
            />
        </label>
    )
}