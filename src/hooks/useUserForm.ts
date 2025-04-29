import { useState, useCallback } from "react";

export const useUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const validate = useCallback(() => {
    const errs: string[] = [];
    if (!name.trim()) errs.push("Name is required");
    if (!email.trim()) errs.push("Email is required");
    return errs;
  }, [name, email]);

  const handleSubmit = useCallback(
    (onValid: (data: { name: string; email: string }) => void) => {
      const errs = validate();
      setErrors(errs);
      if (errs.length === 0) {
        onValid({ name: name.trim(), email: email.trim() });
        setName("");
        setEmail("");
      }
    },
    [validate, name, email]
  );

  return {
    name,
    setName,
    email,
    setEmail,
    errors,
    handleSubmit,
  };
};
