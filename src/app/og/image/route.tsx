import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0f141e',
          padding: '72px 80px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              fontWeight: 500,
              color: '#7a808c',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            SOFTWARE DEVELOPER
          </div>
          <div
            style={{
              fontSize: '80px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Guilherme FT
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 400,
              color: '#878a8f',
              lineHeight: 1.4,
              maxWidth: '680px',
            }}
          >
            Engenheiro de Software &amp; Desenvolvimento Sob Medida
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '2px',
              backgroundColor: '#007aff',
            }}
          />
          <div
            style={{
              fontSize: '20px',
              fontWeight: 500,
              color: '#7a808c',
              letterSpacing: '0.05em',
            }}
          >
            guilhermeft.dev
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
