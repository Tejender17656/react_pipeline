function InputField({name, placeHolder, error, handleChange}) {
    return (
        <>
            <input type={name} name={name} id={name} onChange={(e) => handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={placeHolder} required="" />
            {error && (
                <label htmlFor={`${name}-error`} className="block mb-2 text-sm font-small text-[#ab3d31]">*Required field</label>
            )}
        </>
    );
};

export default InputField;