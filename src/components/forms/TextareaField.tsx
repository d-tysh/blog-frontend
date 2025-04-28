import { IFormField } from "../../interfaces/interfaces"

export const TextareaField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, name, required = false, height, register, errors } = props;

    return (
        <div className="relative">
            <label className="form-label">
                <span className="font-bold w-1/5">{label}</span>
                <textarea
                    {...register(name, {
                        required: required && `${label} is required`
                    })}
                    className="form-field"
                    style={{ minHeight: `${height || 300}px`, borderColor: errors && errors[name] && 'red' }}
                />
            </label>
            {
                errors && errors[name] &&
                <p className="form-field-error">
                    {String(errors[name].message)}
                </p>
            }
        </div>
    )
}