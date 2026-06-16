import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useContent } from '../i18n.jsx';
import { WEB3FORMS_ACCESS_KEY } from '../data/config.js';

const fieldClass =
  'w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:bg-lilac';
const labelClass = 'mb-1.5 block font-mono text-xs font-medium uppercase tracking-wider text-ink/60';

export default function ContactForm() {
  const { contact, contactInfo } = useContent();
  const f = contact.form;

  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: f.projectTypes[0],
    budget: f.budgets[0],
    message: '',
  });
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | error

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const mailtoFallback = () => {
    const subject = `${f.mailSubject} ${form.name || f.mailVisitor}`;
    const body = [
      `${f.mailLabels.name}: ${form.name}`,
      `${f.mailLabels.email}: ${form.email}`,
      `${f.mailLabels.projectType}: ${form.projectType}`,
      `${f.mailLabels.budget}: ${form.budget}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (botField) return; // honeypot tripped

    // No delivery key configured yet: open the visitor's email app instead.
    if (!WEB3FORMS_ACCESS_KEY) {
      mailtoFallback();
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${f.mailSubject} ${form.name || f.mailVisitor}`,
          from_name: 'Sidequest Weblabs',
          [f.mailLabels.name]: form.name,
          [f.mailLabels.email]: form.email,
          [f.mailLabels.projectType]: form.projectType,
          [f.mailLabels.budget]: form.budget,
          message: form.message,
        }),
      });
      const data = await response.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="reveal is-visible flex items-start gap-4 border-2 border-ink bg-lime p-6">
        <CheckCircle2 className="mt-0.5 h-7 w-7 flex-none text-ink" aria-hidden="true" />
        <p className="text-base font-bold leading-7 text-ink">{f.success}</p>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        name="botcheck"
        value={botField}
        onChange={(event) => setBotField(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            {f.name}
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder={f.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            {f.email}
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder={f.emailPlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-type" className={labelClass}>
            {f.projectType}
          </label>
          <select id="cf-type" value={form.projectType} onChange={update('projectType')} className={fieldClass}>
            {f.projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className={labelClass}>
            {f.budget}
          </label>
          <select id="cf-budget" value={form.budget} onChange={update('budget')} className={fieldClass}>
            {f.budgets.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          {f.message}
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder={f.messagePlaceholder}
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === 'error' ? (
        <p className="border-2 border-flare bg-flare/10 px-4 py-2.5 text-sm font-semibold text-ink">
          {f.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-cobalt px-7 py-3.5 text-sm font-bold text-white shadow-[4px_4px_0_0_#16150f] transition duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#16150f] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitting ? f.sending : f.submit}
        {submitting ? null : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </button>
      <p className="font-mono text-xs leading-5 text-ink/55">
        {f.notePre}{' '}
        <a href={`mailto:${contactInfo.email}`} className="font-bold text-cobalt underline-offset-2 hover:underline">
          {contactInfo.email}
        </a>
        {f.notePost}
      </p>
    </form>
  );
}
