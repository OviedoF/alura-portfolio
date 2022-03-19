import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({
        ...form,
        [name]: value
    });
  };
  
  const handleBlur = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        });

      setErrors(validateForm(form));
  };

  return {
    form: form,
    errors: errors,
    handleBlur: handleBlur,
    handleChange: handleChange
  };
};
