import { IFormField } from "../../interfaces/interfaces"

export const SelectField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, name, register, options } = props;
    return (
        <label className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-5">
            <span className="font-bold sm:w-1/5">{label}</span>
            <select {...register(name)} className='px-4 py-2 bg-white rounded-lg border sm:w-4/5'>
                {
                    options?.map(option => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </label>
    )
}