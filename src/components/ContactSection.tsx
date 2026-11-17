import { FormEvent, useState } from 'react';
import { CheckCircle2, Mail, MapPin, Clock, Send } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface FormState {
  senderName: string;
  organization: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  senderName: '',
  organization: '',
  subject: 'Evaluasi Portofolio / Akademik',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRecord, setSubmittedRecord] = useState<FormState | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.senderName.trim() || !form.message.trim()) {
      setErrorMsg('Mohon lengkapi nama pengirim dan isi pesan sebelum mengirim.');
      return;
    }
    setErrorMsg('');
    setSubmittedRecord({ ...form });
    setForm(INITIAL_FORM);
  };

  return (
    <section id="kontak" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-blue-700 mb-2">
              05. Kontak &amp; Korespondensi Resmi
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Informasi Akademik &amp; Hubungi Siswa
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Terbuka untuk komunikasi resmi terkait penilaian tugas kejuruan oleh Bapak/Ibu
              Guru SMKN 1 Sidayu, pembimbingan proyek, maupun informasi kesiapan industri.
            </p>

            <div className="space-y-5 border-t border-slate-200 pt-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-slate-500">Satuan Pendidikan</p>
                  <p className="text-sm font-semibold text-slate-900">
                    {STUDENT_PROFILE.school} — Jurusan {STUDENT_PROFILE.majorShort}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">{STUDENT_PROFILE.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-slate-500">Surel Akademik</p>
                  <a
                    href={`mailto:${STUDENT_PROFILE.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-700 transition-colors break-all"
                  >
                    {STUDENT_PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-slate-500">Jam Aktif Sekolah</p>
                  <p className="text-sm font-medium text-slate-900 tabular-nums">
                    {STUDENT_PROFILE.consultationHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="no-print lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            {submittedRecord ? (
              <div className="py-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-blue-700">
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  <span className="text-sm font-semibold">Catatan Pesan Tercatat</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Terima kasih, {submittedRecord.senderName}.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pesan dengan perihal{' '}
                  <span className="font-medium text-slate-900">{submittedRecord.subject}</span>{' '}
                  telah disiapkan untuk {STUDENT_PROFILE.fullName} ({STUDENT_PROFILE.classRoom}).
                  Untuk korespondensi langsung via klien surel, Anda juga dapat mengirim melalui
                  tautan surel resmi di samping.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmittedRecord(null)}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer min-h-[40px]"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Kirim Pesan atau Catatan Bimbingan
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Ditujukan kepada {STUDENT_PROFILE.fullName} · {STUDENT_PROFILE.classRoom}
                  </p>
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="senderName"
                      className="block text-xs font-medium text-slate-700 mb-1.5"
                    >
                      Nama Pengirim
                    </label>
                    <input
                      id="senderName"
                      type="text"
                      value={form.senderName}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, senderName: e.target.value }))
                      }
                      placeholder="Contoh: Bapak/Ibu Guru Pengampu"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-medium text-slate-700 mb-1.5"
                    >
                      Instansi / Jabatan
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={form.organization}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, organization: e.target.value }))
                      }
                      placeholder="Contoh: SMKN 1 Sidayu / Mitra Industri"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Perihal
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, subject: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15"
                  >
                    <option value="Evaluasi Portofolio / Akademik">
                      Evaluasi Portofolio / Akademik
                    </option>
                    <option value="Umpan Balik Praktikum Bengkel">
                      Umpan Balik Praktikum Bengkel
                    </option>
                    <option value="Informasi Program Keahlian & PKL">
                      Informasi Program Keahlian &amp; PKL
                    </option>
                    <option value="Korespondensi Umum">Korespondensi Umum</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Isi Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Tuliskan pesan, masukan praktikum, atau informasi akademik..."
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 resize-y"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-slate-500">
                    Formulir korespondensi resmi portofolio siswa.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Kirim Pesan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
