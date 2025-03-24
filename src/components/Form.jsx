import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './FormStyles.css';

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus('loading');

    try {
      console.log("Submitting data:", data); // Debugging log

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', { 
        // This is a test API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);

      setStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: "Name is required" })}
          placeholder="Your Name"
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: "Email is required", 
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
          })}
          placeholder="Your Email"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          {...register('subject', { required: "Subject is required" })}
          placeholder="Subject"
        />
        {errors.subject && <span className="error">{errors.subject.message}</span>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="6"
          placeholder="Type your message here"
          {...register('message', { required: "Message is required" })}
        ></textarea>
        {errors.message && <span className="error">{errors.message.message}</span>}

        <button type="submit" className="btn" disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting...' : 'Submit'}
        </button>

        {status === 'success' && <p className="success">Message sent successfully!</p>}
        {status === 'error' && <p className="error">There was an error. Please try again.</p>}
      </form>
    </div>
  );
};

export default Form;
