import classNames from "classnames"
import { IFormField } from "../../interfaces/interfaces";

export const InputField = <TFormValues extends Record<string, unknown>>(props: IFormField<TFormValues>) => {
    const { label, type, name, required = false, height, register, errors, readonly } = props;
    
    return (
        <div>
            <label className="flex items-center justify-between">
                <span className="font-bold w-1/5">{label}</span>
                <input
                    type={type} 
                    placeholder={`Enter ${name}`}
                    {...register(name, {
                        required: required && `${label} is required`
                    })}
                    className={classNames(
                        `px-4 py-2 rounded-lg border w-4/5 h-[${height}px]`,
                    )}
                    readOnly={readonly}
                />
            </label>
            {errors && errors[name] && <p className="text-sm text-red-400 text-center mt-1">{String(errors[name].message)}</p>}
        </div>
    )
}