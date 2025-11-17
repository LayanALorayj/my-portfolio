import ContactForm from "./ContactForm";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubOutlined />,
      url: "https://github.com/LayanALorayj",
      description: "Explore my code and projects",
      color: "from-violet/20 to-violet/10",
      buttonColor: "bg-violet hover:bg-violet/80"
    },
    {
      name: "LinkedIn", 
      icon: <LinkedinOutlined />,
      url: "https://www.linkedin.com/in/layanalorayj/",
      description: "Professional network and connect",
      color: "from-rose/20 to-rose/10",
      buttonColor: "bg-rose hover:bg-rose/80"
    }
  ];

  return (
    <footer className="bg-blackdeep border-t border-graydeep/30">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 "> 
            
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-violet mb-4 font-pixelify">
                  Get In Touch
                </h2>
                <p className="text-lg text-rose font-pixelify">
                  Ready to start your next project? Let's talk!
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="flex flex-col justify-center h-full space-y-6"> 
              <h3 className="text-3xl font-bold text-rose mb-8 font-pixelify text-center lg:text-center">
                My Digital Spaces
              </h3>
              
              {socialLinks.map((social) => (
                <div 
                  key={social.name}
                  className={`p-6 rounded-2xl border-2 border-graydeep/30 bg-gradient-to-br ${social.color} backdrop-blur-sm hover:border-violet/50 transition-all duration-500 group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl p-3 rounded-xl bg-blackdeep/50 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-lavender font-pixelify mb-2">
                        {social.name}
                      </h4>
                      <p className="text-rose mb-4">
                        {social.description}
                      </p>
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block px-6 py-3 ${social.buttonColor} text-blackdeep font-bold rounded-lg transition-all duration-300 transform hover:scale-105 font-pixelify`}
                      >
                        Visit {social.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-gradient-to-br from-graydeep/30 to-transparent border border-graydeep/50">
                <h4 className="text-xl font-bold text-lavender font-pixelify mb-4">
                  Contact Info
                </h4>
                <div className="space-y-3">
                  <p className="text-rose flex items-center gap-3">
                    <MailOutlined className="text-violet" />
                    layan@email.com
                  </p>
                  <p className="text-rose flex items-center gap-3">
                    <span className="text-violet">📍</span>
                    Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-graydeep/30 py-8 text-center">
        <p className="text-rose font-pixelify">
          © {currentYear} Layan. Crafted with passion
        </p>
      </div>
    </footer>
  );
}