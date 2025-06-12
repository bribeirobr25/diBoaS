import { Header, Footer, Hero } from '@diboas/ui';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}