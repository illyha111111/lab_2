import { useEffect, useState } from 'react';

const fieldLabels = {
  userAgent: 'Інформація про браузер',
  platform: 'Платформа',
  language: 'Основна мова браузера',
  languages: 'Мови браузера',
  cookieEnabled: 'Cookies увімкнені',
  online: 'Браузер у мережі',
  hardwareConcurrency: 'Логічні процесори',
  deviceMemory: 'Орієнтовна пам’ять пристрою, ГБ',
  screenWidth: 'Ширина екрана',
  screenHeight: 'Висота екрана',
  colorDepth: 'Глибина кольору',
  timeZone: 'Часовий пояс',
};

function formatValue(value) {
  if (typeof value === 'boolean') {
    return value ? 'Так' : 'Ні';
  }

  if (Array.isArray(value)) {
    return value.join(', ');
  }

  return String(value);
}

export default function Footer() {
  const [systemInfo, setSystemInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      languages: navigator.languages,
      cookieEnabled: navigator.cookieEnabled,
      online: navigator.onLine,
      hardwareConcurrency: navigator.hardwareConcurrency ?? 'Недоступно',
      deviceMemory: navigator.deviceMemory ?? 'Недоступно',
      screenWidth: screen.width,
      screenHeight: screen.height,
      colorDepth: screen.colorDepth,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    try {
      localStorage.setItem('systemInfo', JSON.stringify(info));

      const savedInfo = JSON.parse(
        localStorage.getItem('systemInfo')
      );

      setSystemInfo(savedInfo);
    } catch (storageError) {
      setError('Не вдалося отримати доступ до localStorage.');
      console.error(storageError);
    }
  }, []);

  return (
    <footer className="rounded-2xl bg-gray-900 p-6 text-white shadow-md">
      <h2 className="mb-3 text-xl font-semibold">Контакти</h2>

      <a
        href="mailto:illia.bobu.kb.2023@lpnu.ua"
        className="break-all text-blue-200 hover:text-white hover:underline"
      >
        illia.bobu.kb.2023@lpnu.ua
      </a>

      <h3 className="mt-6 mb-4 text-lg font-semibold">
        Системна інформація із localStorage
      </h3>

      {error ? (
        <p role="alert" className="text-red-300">
          {error}
        </p>
      ) : systemInfo ? (
        <dl className="space-y-3 rounded-xl bg-gray-800 p-4">
          {Object.entries(systemInfo).map(([key, value]) => (
            <div key={key}>
              <dt className="text-sm font-semibold text-blue-200">
                {fieldLabels[key] ?? key}
              </dt>
              <dd className="mt-1 text-sm leading-6 break-words text-gray-200">
                {formatValue(value)}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="text-gray-300">Завантаження…</p>
      )}
    </footer>
  );
}