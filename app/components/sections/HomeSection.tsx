export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden p-0 m-0 w-screen max-w-none">
      
      <div className="absolute inset-0 z-0 w-screen h-full">
        <iframe 
          src="https://player.vimeo.com/video/1138426682?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          className="w-screen h-full object-cover"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '100vh'
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-12 relative z-20 px-6 mx-auto">
        
        <div className="flex-1 text-left md:pl-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight font-pixelify drop-shadow-lg">
            Hi, I'm Layan
          </h1>
          
          <p className="text-white text-xl md:text-2xl leading-relaxed max-w-lg word-spacing-wide letter-spacing-wide font-Roboto Mono drop-shadow-lg">
            a <span className="text-[--color-primary] font-semibold">Frontend Developer</span> 
            focused on building fast, modern web apps.  
            Passionate about modern UI, clean code, and creating user-friendly experiences.
          </p>
        </div>
      </div>
      
    </section>
  );
}