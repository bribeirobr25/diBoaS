export function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <div>
                    <p>&copy; 2025 diBoaS. All rights reserved.</p>
                </div>
                <div className="space-x-4">
                    <a href="/terms">Terms & Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="https://x.com/diboas">X</a>
                </div>
            </div>
        </footer>
    );
}