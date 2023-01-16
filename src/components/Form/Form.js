import { memo, useEffect, useState } from "react";

const INITIAL_STATE = {
  name: "",
  comment: "",
};

const Form = ({ setComments }) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    const getValues = Object.values(values);

    const isEmpty = getValues.some((item) => item === "");

    if (isEmpty) setButtonDisabled(true);
    else setButtonDisabled(false);
  }, [values]);

  const onSubmit = () => {
    setComments((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 999999),
        name: values.name,
        comment: values.comment,
      },
    ]);
    // reset values
    setValues(INITIAL_STATE);
  };

  return (
    <div id="form">
      <input
        type="text"
        placeholder="Adınız"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <textarea
        rows={2}
        placeholder="Mesajınız"
        name="comment"
        value={values.comment}
        onChange={handleChange}
      ></textarea>
      <button onClick={onSubmit} disabled={buttonDisabled}>
        Gönder
      </button>
    </div>
  );
};

export default memo(Form);
