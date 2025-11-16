export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-12">
        
        <div className="flex-1 text-left md:pl-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[--color-lavender] mb-4 leading-tight font-pixelify">
            Hi, I’m Layan
          </h1>
          
          <p className="text-[--color-secondary] text-xl md:text-2xl leading-relaxed max-w-lg font-pixelify word-spacing-wide letter-spacing-wide ">
            a <span className="text-[--color-primary] font-semibold font-pixelify">Frontend Developer </span> 
            focused on building fast, modern web apps.  
            Passionate about modern UI, clean code, and creating user-friendly experiences.
          </p>
        </div>

        <div className="flex-shrink-0">
          <img
            src="stik1-.png"
            alt="Layan"
            className="w-64 md:w-96 object-cover"
          />
        </div>

      </div>
      
    </section>
  );
}
