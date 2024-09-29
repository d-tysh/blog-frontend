import { IFormField } from "../../interfaces/interfaces"

export const TextareaField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, name, required = false, register } = props;
    
    return (
        <label className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-5">
            <span className="font-bold w-1/5">{label}</span>
            <textarea 
                {...register(name)}
                required={required} 
                className="px-4 py-2 bg-white rounded-lg sm:w-4/5 border min-h-[300px]" 
            />
        </label>
    )
}