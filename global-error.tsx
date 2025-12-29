'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          fontFamily: 'system-ui, sans-serif',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Something went wrong!</h2>
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#2A6B6B',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
