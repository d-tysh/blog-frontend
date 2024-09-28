import { IFormField } from "../../interfaces/interfaces"

export const TextareaField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, name, required = false, register } = props;
    
    return (
        <label className="flex items-center justify-between">
            <span className="font-bold w-1/5">{label}</span>
            <textarea 
                {...register(name)}
                required={required} 
                className="px-4 py-2 rounded-lg w-4/5 border min-h-[300px]" 
            />
        </label>
    )
}