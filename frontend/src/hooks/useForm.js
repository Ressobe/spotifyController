import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (name, value) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
  ];
}

export default useForm;
