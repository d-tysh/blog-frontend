import { IFormField } from "../../interfaces/interfaces"

export const SelectField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, name, register, options } = props;
    return (
        <label className="flex items-center justify-between mb-5">
            <span className="font-bold w-1/5">{label}</span>
            <select {...register(name)} className='px-4 py-2 rounded-lg border w-4/5'>
                {
                    options?.map(option => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </label>
    )
}