export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blackdeep border-t border-graydeep/30">
      <div className="border-t border-graydeep/30 py-8 text-center">
        <p className="text-rose font-pixelify">
          © {currentYear} Layan. Crafted with passion
        </p>
      </div>
    </footer>
  );
}