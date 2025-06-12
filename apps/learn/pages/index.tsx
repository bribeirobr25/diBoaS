import { Header, Footer, VideoPlayer } from '@diboas/ui';

export default function LearnHome() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto py-8 flex-grow">
                <h1 className="text-3xl font-bold mb-4">diBoaS Learn Center</h1>
                <VideoPlayer videoId="placeholder" />
            </main>
            <Footer />
        </div>
    );
}