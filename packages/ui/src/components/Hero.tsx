import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-primary text-white text-center py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Your Journey to Wealth Begins with diBoaS
        </h1>
        <p className="text-xl mb-6">
          Democratizing wealth-building with TradFi and DeFi.
        </p>
        <Link
          href="/app"
          className="bg-white text-primary px-6 py-3 rounded-lg font-semibold"
        >
          Join Waitlist
        </Link>
      </div>
    </section>
  );
}
