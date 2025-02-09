import React, { useEffect, useState } from 'react'; 
import { Toast } from 'flowbite-react';
import { HiCheck, HiX } from 'react-icons/hi';

const ToastComponent = ({ toasts, setToasts }) => {
  const [toastAnimation, setToastAnimation] = useState({});

  useEffect(() => {
    if (toasts.length > 0) {
      toasts.forEach((toast, index) => {
        setToastAnimation((prevState) => ({
          ...prevState,
          [toast.id]: 'translate-x-0 opacity-100', 
        }));
        setTimeout(() => {
          setToastAnimation((prevState) => ({
            ...prevState,
            [toast.id]: 'translate-x-72 opacity-0',
          }));
          setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
          }, 500); 
        }, 2000); 
      });
    }
  }, [toasts, setToasts]);

  return (
    <div className="fixed top-28 right-0 z-[1000] flex flex-col gap-4">
      {toasts?.map((toast) => (
        <Toast
          key={toast.id}
          className={`transition-all duration-500 ease-in-out transform ${toastAnimation[toast.id] || 'translate-x-72 opacity-0'}`}
        >
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            {toast.typeToast === "success" ? (
              <HiCheck className="h-5 w-5" />
            ) : (
              <HiX className="h-5 w-5" />
            )}
          </div>
          <div className="ml-3 text-sm font-normal">{toast.content}</div>
          <Toast.Toggle onClick={() => setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id))} />
        </Toast>
      ))}
    </div>
  );
};

export default ToastComponent;
