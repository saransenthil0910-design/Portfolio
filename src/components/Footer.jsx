export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Sarankumar. All rights reserved.</p>
        <p>Built with React</p>
      </div>
    </footer>
  );
}
