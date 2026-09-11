interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  rows?: number
  className?: string
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  options,
  rows = 4,
  className = '',
}: FormFieldProps) {
  const baseInputClass = 'input-field'

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-accent-800 mb-2"
      >
        {label}
        {required && <span className="text-primary-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className="textarea-field"
        />
      ) : type === 'select' && options ? (
        <select
          id={name}
          name={name}
          required={required}
          className={baseInputClass}
        >
          <option value="">{placeholder || 'Оберіть варіант'}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          className={baseInputClass}
        />
      )}
    </div>
  )
}
