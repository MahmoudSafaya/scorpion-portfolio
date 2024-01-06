import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosSend } from "react-icons/io";


const Contact = ({ isHome }) => {
  const [alert, setAlert] = useState(false);

  const form = useRef();
  const mailInput = useRef();
  const messageInput = useRef();

  const showAlert = () => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (mailInput.current.value === '' && messageInput.current.value === '') {
      return false;
    } else {

      emailjs.sendForm('service_rbkqd83', 'template_t8ph4pw', form.current, 'c0RG-hnM945CswC7e')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      e.target.reset();

      setTimeout(() => {
        showAlert();
      }, 1000);

    }
  }

  return (
    <div className={`${isHome ? 'w-full' : 'w-[85%] md:w-3/4 lg:w-3/5'} mx-auto mt-12 bg-dark-400 relative z-20 p-10 rounded-xl`}>
      <h1 className='h-heading'>Send me a message!</h1>
      <form ref={form} onSubmit={sendEmail} id='a-form'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4'>
          <div className='flex flex-col justify-center items-start h-max'>
            <label className='font-semibold' htmlFor='user_name'>Name</label>
            <input
              type='text'
              name='user_name'
              id='user_name'
              placeholder='your name'
              className='mt-4 p-2 w-full rounded-lg bg-dark-200 shadow-lg border border-dark-100 hover:bg-dark-100 ease-linear duration-300 focus:border-gray-700 outline-none' />
          </div>
          <div className='flex flex-col justify-center items-start h-max'>
            <label className='font-semibold' htmlFor='user_email'>Email</label>
            <input
              type='email'
              name='user_email'
              id='user_email'
              ref={mailInput}
              placeholder='john@example.com'
              className='mt-4 p-2 w-full rounded-lg bg-dark-200 shadow-lg border border-dark-100 hover:bg-dark-100 ease-linear duration-300 focus:border-gray-700 outline-none' />
          </div>
        </div>
        <div className='flex flex-col justify-center items-start mt-7 mb-4'>
          <label className='font-semibold' htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            ref={messageInput}
            placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
            className='w-full min-h-32 mt-4 p-2 rounded-lg bg-dark-200 shadow-lg resize-none border border-dark-100 hover:bg-dark-100 ease-linear duration-300 focus:border-gray-700 outline-none'
          />
        </div>
      </form>

      <button type="submit" form='a-form' className='btn-btn'>
        <IoIosSend /> 
        <span className='ml-2'>Send Message</span>
        </button>

      <div className={`${alert ? 'w-full fixed top-8 left-0 py-5 z-50 flex justify-center items-center' : 'hidden'}`}>
        <p className='bg-dark-300 py-3 px-10 rounded-xl shadow-lg'>Thank you for your Message 🙏</p>
      </div>
    </div>
  );
};


export default Contact;