import { motion } from 'motion/react';
import { Users, BookOpen, MessageCircle, Building2, GraduationCap } from 'lucide-react';

const team = [
  {
    name: "Constanza",
    role: "Fundadora & Mediadora",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Apasionada por conectar personas a través de la literatura y el diálogo."
  },
  {
    name: "Felipe",
    role: "Coordinador de Experiencias",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Especialista en crear ambientes memorables para nuestros encuentros."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark font-sans selection:bg-brand-celeste selection:text-white">
      {/* Header */}
      <header className="px-6 md:px-24 py-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-celeste rounded-full flex items-center justify-center">
            <BookOpen className="text-white" size={20} />
          </div>
          <div className="font-bold tracking-widest text-lg uppercase text-brand-celeste">MATCHBOOK</div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
          <a href="#actividades" className="hover:text-brand-orange transition-colors">Actividades</a>
          <a href="#b2b" className="hover:text-brand-orange transition-colors">Empresas</a>
          <a href="#equipo" className="hover:text-brand-orange transition-colors">Equipo</a>
        </nav>
      </header>

      <main className="px-6 md:px-24 pb-24">
        {/* Hero Section */}
        <section className="max-w-4xl mb-32 mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-brand-dark"
          >
            Una comunidad para <span className="text-brand-celeste">leer</span>, conversar y encontrarse.
          </motion.h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
            Desde 2021 creando experiencias literarias. Tres clubes de lectura al mes y una fiesta de lectura inolvidable.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-celeste text-white px-8 py-4 font-bold rounded-full hover:bg-brand-orange transition-all shadow-lg shadow-brand-celeste/20">
              Ver actividades
            </button>
            <button className="border-2 border-brand-celeste text-brand-celeste px-8 py-4 font-bold rounded-full hover:bg-brand-light-blue transition-all">
              Contactar
            </button>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="actividades" className="mb-32">
          <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-sm mb-6">
            <MessageCircle size={18} />
            <span>Nuestra Esencia</span>
          </div>
          <h2 className="text-4xl font-bold mb-12 max-w-2xl">La lectura también puede ser una experiencia social.</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-light-blue p-12 rounded-3xl border border-brand-celeste/10 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <BookOpen className="text-brand-celeste" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-brand-dark">Clubes de lectura</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Tres encuentros al mes para leer, reflexionar y conversar en profundidad sobre obras que nos transforman.
              </p>
            </div>
            <div className="bg-orange-50 p-12 rounded-3xl border border-brand-orange/10 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Users className="text-brand-orange" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-brand-dark">Fiesta de lectura</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Una experiencia mensual única: lectura silenciosa, música en vivo y el placer de compartir un libro.
              </p>
            </div>
          </div>
        </section>

        {/* B2B Section */}
        <section id="b2b" className="mb-32 bg-brand-dark text-white p-12 md:p-24 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-celeste/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-sm mb-6">
              <Building2 size={18} />
              <span>B2B & Educación</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Llevamos la pasión literaria a tu organización.</h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Diseñamos experiencias a medida para empresas y colegios. Fomentamos la cultura, el bienestar y la conexión de equipos a través de la mediación lectora.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                <Building2 size={20} className="text-brand-celeste" />
                <span className="font-bold">Empresas</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                <GraduationCap size={20} className="text-brand-orange" />
                <span className="font-bold">Colegios</span>
              </div>
            </div>
            <button className="mt-12 bg-brand-orange text-white px-10 py-4 font-bold rounded-full hover:scale-105 transition-transform">
              Solicitar propuesta
            </button>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipo" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-celeste uppercase tracking-widest mb-4">El equipo</h2>
            <h3 className="text-4xl font-bold">Conoce a quienes hacen Matchbook</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-light-blue shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-2xl font-bold text-brand-dark mb-1">{member.name}</h4>
                <p className="text-brand-celeste font-bold mb-4 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-gray-500 max-w-xs mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Lo que dicen quienes participan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-brand-light-blue p-8 rounded-3xl italic text-gray-600 shadow-sm">
              "Volví a disfrutar la lectura gracias a <span className="text-brand-celeste font-bold">Matchbook</span>."
            </div>
            <div className="bg-white border-2 border-brand-light-blue p-8 rounded-3xl italic text-gray-600 shadow-sm">
              "La fiesta de lectura es una experiencia única que no te puedes perder."
            </div>
            <div className="bg-white border-2 border-brand-light-blue p-8 rounded-3xl italic text-gray-600 shadow-sm">
              "Conocí personas increíbles y libros que me cambiaron la vida."
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-brand-celeste text-white p-16 md:p-24 text-center rounded-[3rem] shadow-2xl shadow-brand-celeste/30">
          <h2 className="text-4xl font-bold mb-6">Enciende tu pasión literaria</h2>
          <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto">Únete a nuestros próximos encuentros y descubre una nueva forma de vivir los libros.</p>
          <button className="bg-white text-brand-celeste px-12 py-5 font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all uppercase tracking-widest text-sm shadow-xl">
            Quiero participar
          </button>
        </section>
      </main>

      <footer className="px-6 md:px-24 py-12 border-t border-gray-100 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-brand-celeste">
          <BookOpen size={16} />
          <span>MATCHBOOK.CL</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-celeste transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-celeste transition-colors">Newsletter</a>
          <a href="#" className="hover:text-brand-celeste transition-colors">LinkedIn</a>
        </div>
        <div>© 2026 Experiencias Literarias</div>
      </footer>
    </div>
  );
}
