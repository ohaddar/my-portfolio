export default function Contact() {
  return (
    <section className="p-10 text-center bg-blue-600 text-white">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-4">Tu peux me contacter via :</p>
      <ul className="mt-4">
        <li>
          Email:{" "}
          <a href="mailto:email@example.com" className="underline">
            email@example.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://linkedin.com" className="underline">
            Mon LinkedIn
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com" className="underline">
            Mon GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
