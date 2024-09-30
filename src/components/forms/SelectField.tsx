import { IFormField } from "../../interfaces/interfaces"

export const SelectField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, name, register, options } = props;
    return (
        <label className="form-label">
            <span className="font-bold sm:w-1/5">{label}</span>
            <select {...register(name)} className='form-field'>
                {
                    options?.map(option => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </label>
    )
}