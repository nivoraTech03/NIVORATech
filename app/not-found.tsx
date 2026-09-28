import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-28 text-center">
      <p className="font-display bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-8xl font-bold text-transparent">
        404
      </p>
      <h1 className="font-display mt-4 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-[var(--text-secondary)]">
        Oops! The page you are looking for does not exist. It might have been moved or
        deleted.
      </p>
      <Button href="/" className="mt-8" icon>
        Go back home
      </Button>
    </Container>
  );
}
