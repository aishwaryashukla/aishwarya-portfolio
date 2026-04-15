export default function Footer() {
    return (
        <footer className="footer section">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Aishwarya Shukla. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/aishwaryashukla/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
