interface CheckboxProps {
  id: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
  labelText?: string;
}
function Checkbox({ id, isChecked, onChange, children, labelText }: CheckboxProps) {
  return (
    <div
    className="relative flex items-center gap-2"
     >
      <input
        onChange={onChange}
        checked={isChecked}
        id={id}
    className="absolute top-0 left-0 opacity-0 focus:outline-black"

        type="checkbox"
        aria-label={labelText}
      />
      <label htmlFor={id} 
       className="w-6 h-6 rounded-sm bg-check transition-colors duration-200 cursor-pointer hover:bg-cta bg-center bg-no-repeat bg-contain" 
       style={{ backgroundImage: 'url("../images/desktop/icon-check.svg")' }}
      ></label>
      {labelText && <p className={`
      ml-8 text-very-dark-blue dark:text-[#fff] font-semibold text-sm
      `}>{labelText}</p>}
      {children}
    </div>
  );
}

export default Checkbox;