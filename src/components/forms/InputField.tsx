import { IFormField } from "../../interfaces/interfaces";

export const InputField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, type, name, required = false, height, register, errors, readonly, pattern} = props;
    
    return (
        <div className="relative">
            <label className="form-label">
                <span className="font-bold sm:w-1/5">{label}</span>
                <input
                    type={type} 
                    placeholder={`Enter ${name}`}
                    {...register(name, {
                        required: required && `${label} is required`,
                        ...(pattern && {
                            pattern: {
                                value: pattern,
                                message: "Email format: user@mail.com"
                            }
                        })
                    })}
                    className="form-field"
                    style={{ height }}
                    readOnly={readonly}
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