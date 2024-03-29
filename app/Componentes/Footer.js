const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm">© 2024 Store.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-sm hover:text-gray-300">Términos y condiciones</a>
                        <a href="#" className="text-sm hover:text-gray-300">Política de privacidad</a>
                        <a href="#" className="text-sm hover:text-gray-300">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
