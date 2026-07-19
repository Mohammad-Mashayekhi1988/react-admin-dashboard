interface TextFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

function TextField({
  label,
  type,
  placeholder,
  value,
  onChange,
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
        onChange={(e) => onchange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
}

export default TextField;
