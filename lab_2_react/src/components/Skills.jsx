export default function Skills() {
  return (
    <section className="mb-8 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-blue-900">
        Навички
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Мови та розмітка</h3>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>HTML</li>
            <li>JavaScript — основи</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Бібліотеки</h3>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>React — компонентний підхід</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Інструменти</h3>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Visual Studio Code</li>
            <li>Git і GitHub</li>
            <li>Node.js і npm</li>
            <li>Vite</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Стилізація</h3>
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Адаптивні макети на CSS Grid</li>
          </ul>
        </div>
      </div>
    </section>
  );
}