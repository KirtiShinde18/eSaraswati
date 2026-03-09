export default function HowItWorks() {

  const steps = [
    {title:"Describe",desc:"Tell us what you want"},
    {title:"Generate",desc:"AI builds it instantly"},
    {title:"Deploy",desc:"Launch in one click"}
  ];

  return (
    <section id="how" className="py-32 px-6 text-center">

      <h2 className="text-5xl font-bold mb-16">How it Works</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

        {steps.map((s,i)=>(
          <div key={i}>

            <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-6">
              {i+1}
            </div>

            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}