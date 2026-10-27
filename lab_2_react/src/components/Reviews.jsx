import { useEffect, useState } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchComments() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts/3/comments',
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Помилка сервера: ${response.status}`);
        }

        const data = await response.json();
        setComments(data);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError('Не вдалося завантажити відгуки.');
          console.error(fetchError);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchComments();

    return () => controller.abort();
  }, []);

  return (
    <section className="mb-8 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-blue-900">
        Коментарі попередніх роботодавців
      </h2>

      <p className="mb-4 text-sm text-gray-500">
        Навчальні відгуки із JSONPlaceholder. Варіант 3.
      </p>

      <div aria-live="polite">
        {loading && (
          <p className="text-gray-600">Завантаження відгуків…</p>
        )}

        {error && (
          <p role="alert" className="text-red-700">
            {error}
          </p>
        )}

        {!loading && !error && comments.length === 0 && (
          <p className="text-gray-600">Відгуків поки немає.</p>
        )}

        <div className="flex flex-col gap-4">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-5"
            >
              <h3 className="text-lg font-semibold break-words text-gray-800">
                {comment.name}
              </h3>

              <p className="mt-1 text-sm break-all text-gray-500">
                Email: {comment.email}
              </p>

              <p className="mt-3 leading-7 whitespace-pre-line text-gray-700">
                {comment.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}