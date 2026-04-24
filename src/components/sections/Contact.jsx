import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const envMissing = !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (envMissing) {
      setStatus({ type: "error", message: "Contact service not configured. Please contact the site owner." });
      console.error("EmailJS env vars missing: ", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setStatus({ type: "success", message: "Message sent — thank you!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS sendForm error:", err);
      setStatus({ type: "error", message: "Oops — something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {envMissing && (
            <div className="mb-4 rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-4 text-sm text-yellow-300">
              Contact form is not configured — emails will not be sent until the
              site owner sets up EmailJS environment variables.
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={loading}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={loading}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={loading || envMissing}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite">
              {status && (
                <p className={status.type === 'success' ? 'text-green-400 mt-2' : 'text-red-400 mt-2'}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};