export default function Education() {
  return (
    <section className="mb-8 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-blue-900">
        Освіта
      </h2>

      <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold">
          Національний університет «Львівська політехніка»
        </h3>
        <p className="mt-2 text-gray-700">Студент групи КБ-402.</p>
        <a
          href="https://lpnu.ua/"
          className="mt-3 inline-block rounded text-blue-700 underline hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          Офіційний сайт університету
        </a>
      </div>
    </section>
  );
}