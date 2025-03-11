export default function Projects() {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-3xl font-semibold">Mes Projets</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-gray-200 rounded-lg shadow">
          <h3 className="text-xl font-bold">Projet 1</h3>
          <p className="mt-2">Description du projet 1...</p>
        </div>
        <div className="p-6 bg-gray-200 rounded-lg shadow">
          <h3 className="text-xl font-bold">Projet 2</h3>
          <p className="mt-2">Description du projet 2...</p>
        </div>
        <div className="p-6 bg-gray-200 rounded-lg shadow">
          <h3 className="text-xl font-bold">Projet 3</h3>
          <p className="mt-2">Description du projet 3...</p>
        </div>
      </div>
    </section>
  );
}
