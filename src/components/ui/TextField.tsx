interface TextFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

function TextField({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}: TextFieldProps) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium dark:text-white">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default TextField;
