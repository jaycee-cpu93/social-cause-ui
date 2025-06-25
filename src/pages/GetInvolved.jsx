import { useState } from 'react';

const GetInvolved = () => {
  const [form, setForm] = useState({ name: '', email: '', cause: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!form.cause) newErrors.cause = 'Please select a cause.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert('Thank you for getting involved! We will contact you soon.');
    setForm({ name: '', email: '', cause: '' });
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <select
            name="cause"
            value={form.cause}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Cause</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Environment">Environment</option>
            <option value="Hunger Relief">Hunger Relief</option>
          </select>
          {errors.cause && <p className="text-red-600 text-sm mt-1">{errors.cause}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default GetInvolved;