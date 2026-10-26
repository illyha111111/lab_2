export default function Experience() {
  return (
    <section className="mb-8 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-blue-900">
        Досвід роботи
      </h2>

      <p className="mb-4 leading-7 text-gray-700">
        Здобуваю практичні навички веброзробки під час
        виконання лабораторних робіт.
      </p>

      <article className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold">Навчальні проєкти</h3>
        <p className="mt-1 mb-3 text-sm text-gray-500">
          Практичні завдання з вебпрограмування
        </p>

        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Створення HTML-сторінки резюме</li>
          <li>Використання семантичних тегів</li>
          <li>Робота із системою контролю версій Git</li>
          <li>Створення React-компонентів</li>
          <li>Оформлення сторінок за допомогою CSS і Tailwind CSS</li>
        </ul>
      </article>
    </section>
  );
}