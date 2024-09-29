import classNames from "classnames"
import { IFormField } from "../../interfaces/interfaces";

export const InputField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, type, name, required = false, height, register, errors, readonly, pattern} = props;
    
    return (
        <div className="relative">
            <label className="flex items-center justify-between mb-5">
                <span className="font-bold w-1/5">{label}</span>
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
                    className={classNames(
                        `px-4 py-2 rounded-lg border w-4/5 h-[${height}px]`,
                    )}
                    readOnly={readonly}
                />
            </label>
            {
                errors && errors[name] && 
                <p className="text-sm text-red-400 text-center mt-1 absolute bottom-0 w-full">
                    {String(errors[name].message)}
                </p>
            }
        </div>
    )
}