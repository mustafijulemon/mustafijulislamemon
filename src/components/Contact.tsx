import { useState, type FormEvent } from "react";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { brandIcons } from "./BrandIcons";
import { siteConfig } from "../data/siteConfig";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    if (siteConfig.formEndpoint) {
      try {
        const response = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(event.currentTarget),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        return;
      } catch {
        setError("Unable to send the message. Please contact me by email.");
        setStatus("error");
        return;
      }
    }

    const subject = `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };

  const contacts = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: Phone },
    { label: "Location", value: siteConfig.location, href: undefined, icon: MapPin },
  ];

  return (
    <section id="contact" className="section section-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get in touch"
          title="Contact"
          accent="& Collaboration"
          subtitle="For projects, professional opportunities, collaboration, debate, or general enquiries, please feel free to get in touch."
        />

        <Reveal className="contact-reveal">
        <div className="contact-layout">
          <div className="contact-information">
            <h3>Contact Information</h3>
            <div className="contact-list">
              {contacts.map((item) => {
                const Icon = item.icon;
                const content = <><Icon size={18} /><span><small>{item.label}</small><strong>{item.value}</strong></span></>;
                return item.href ? (
                  <a className="contact-item" href={item.href} key={item.label}>{content}</a>
                ) : (
                  <div className="contact-item" key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="contact-socials">
              <h4>Online Profiles</h4>
              <div className="social-profile-list">
                {siteConfig.socials.map((social) => {
                  const Icon = brandIcons[social.icon];
                  return (
                    <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {Icon && <Icon size={16} />} {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <p className="availability-note">{siteConfig.availability}</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3>Send a Message</h3>
            <div className="form-row">
              <label>
                <span>Your Name</span>
                <input type="text" name="name" value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Enter your name" />
              </label>
              <label>
                <span>Email Address</span>
                <input type="email" name="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="Enter your email" />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea name="message" rows={6} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="How can we work together?" />
            </label>
            {error && <p className="form-error" role="alert">{error}</p>}
            <div className="form-submit-row">
              <button className="button button-primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"}
                {status === "sent" ? <Check size={16} /> : <Send size={16} />}
              </button>
              {status === "sent" && <span className="form-success">Your email application has been opened.</span>}
            </div>
            <p className="form-hint">{siteConfig.formEndpoint ? "Your message will be sent securely." : "Submitting opens your default email application with the message prepared."}</p>
          </form>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
