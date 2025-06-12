import { Header, Footer } from '@diboas/ui';

export function DocLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto py-8 flex-grow">{children}</main>
            <Footer />
        </div>
    );
}