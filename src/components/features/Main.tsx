import { useState } from "react";

export function Main() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name: string | null; email: string | null }>({
    name: null,
    email: null,
  });

  const validateName = (value: string) => {
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, name: "O nome é obrigatório." }));
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, email: "O email é obrigatório." }));
    } else if (!emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Formato de email inválido." }));
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);

    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors && name && email) {
      console.log("Form válido:", { name, email });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-lg">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-300 rounded p-2 text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => validateName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <label htmlFor="email" className="text-lg">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 rounded p-2 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}