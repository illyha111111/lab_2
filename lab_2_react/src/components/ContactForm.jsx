import { useEffect, useRef, useState } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem('reactContactModalClosed') === 'true') {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }
  }, [isOpen]);

  function closeModal() {
    dialogRef.current.close();
    setIsOpen(false);
    sessionStorage.setItem('reactContactModalClosed', 'true');
  }

  const inputClasses =
    'w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600';

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="reactContactTitle"
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
      }}
      className="fixed inset-0 m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl border-0 bg-white p-6 text-slate-900 shadow-xl backdrop:bg-black/60"
    >
      <button
        type="button"
        onClick={closeModal}
        aria-label="Закрити форму"
        className="absolute top-3 right-4 rounded px-2 text-3xl text-slate-500 hover:text-slate-900"
      >
        ×
      </button>

      <h2
        id="reactContactTitle"
        className="mb-5 pr-8 text-2xl font-bold text-blue-900"
      >
        Форма зворотного зв’язку
      </h2>

      <form
        action="https://formspree.io/f/xzeeeyap"
        method="POST"
        className="flex flex-col gap-3"
      >
        <label htmlFor="reactContactName" className="font-semibold">
          Ім’я
        </label>
        <input
          id="reactContactName"
          type="text"
          name="name"
          autoComplete="name"
          required
          className={inputClasses}
        />

        <label htmlFor="reactContactEmail" className="font-semibold">
          Email
        </label>
        <input
          id="reactContactEmail"
          type="email"
          name="email"
          autoComplete="email"
          required
          className={inputClasses}
        />

        <label htmlFor="reactContactPhone" className="font-semibold">
          Номер телефону
        </label>
        <input
          id="reactContactPhone"
          type="tel"
          name="phone"
          autoComplete="tel"
          required
          className={inputClasses}
        />

        <label htmlFor="reactContactMessage" className="font-semibold">
          Повідомлення
        </label>
        <textarea
          id="reactContactMessage"
          name="message"
          rows={4}
          required
          className={inputClasses}
        />

        <button
          type="submit"
          className="mt-2 rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
        >
          Надіслати
        </button>
      </form>
    </dialog>
  );
}