export default function Testimonials() {

  const users = [
    {name:"Sarah Chen",role:"Product Designer"},
    {name:"Marcus Rivera",role:"Startup Founder"},
    {name:"Emma Watson",role:"Engineering Lead"}
  ];

  return (
    <section className="py-32 px-6">

      <h2 className="text-5xl font-bold text-center mb-16">
        Loved by Creators
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {users.map((u,i)=>(
          <div key={i} className="bg-zinc-900 border border-white/10 rounded-2xl p-8">

            <p className="text-gray-300 mb-6">
              "This platform changed how I build projects."
            </p>

            <div>
              <div className="font-semibold">{u.name}</div>
              <div className="text-sm text-gray-500">{u.role}</div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}