import { ImageResponse } from 'next/og';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SITE_SETTINGS_QUERY } from '@/sanity/queries/siteSettings';
import { HERO_QUERY } from '@/sanity/queries/hero';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Fetch site settings and hero data from Sanity
    const [siteSettings, heroData] = await Promise.all([
      sanityFetch({
        query: SITE_SETTINGS_QUERY,
        tags: ['siteSettings'],
      }),
      sanityFetch({
        query: HERO_QUERY,
        tags: ['hero'],
      }),
    ]);

    // Allow override via URL params, fallback to Sanity data
    const title = searchParams.get('title') ||
      siteSettings?.siteTitle ||
      'Sam Shulman | Software Engineer & AI Developer';

    const subtitle = searchParams.get('subtitle') ||
      heroData?.tagline ||
      'Full Stack Developer & AI Enthusiast';

    const photoUrl = heroData?.professionalPhoto?.asset?.url;

    // Memphis colors
    const colors = {
      cyan: '#00C3D0',
      purple: '#8B5CF6',
      pink: '#FF006B',
      yellow: '#FFC700',
      orange: '#FF6B00',
      black: '#0A0A0A',
      white: '#FAFAFA',
      grid: 'rgba(139, 92, 246, 0.1)',
    };

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative',
          }}
        >
          {/* Grid background pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(to right, ${colors.grid} 1px, transparent 1px), linear-gradient(to bottom, ${colors.grid} 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              display: 'flex',
            }}
          />

          {/* Decorative dots */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '100px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: colors.cyan,
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              left: '120px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: colors.pink,
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '120px',
              left: '80px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: colors.yellow,
              display: 'flex',
            }}
          />

          {/* Main content container */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '60px',
              padding: '80px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Photo container - Memphis window style */}
            {photoUrl && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  border: `4px solid ${colors.black}`,
                  backgroundColor: colors.white,
                  boxShadow: `8px 8px 0px ${colors.black}`,
                  overflow: 'hidden',
                }}
              >
                {/* Window header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    backgroundColor: colors.yellow,
                    borderBottom: `4px solid ${colors.black}`,
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: colors.yellow,
                      border: `2px solid ${colors.black}`,
                      display: 'flex',
                    }}
                  />
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: colors.pink,
                      border: `2px solid ${colors.black}`,
                      display: 'flex',
                    }}
                  />
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: colors.orange,
                      border: `2px solid ${colors.black}`,
                      display: 'flex',
                    }}
                  />
                </div>

                {/* Photo */}
                <img
                  src={photoUrl}
                  alt="Professional photo"
                  width="360"
                  height="360"
                  style={{
                    objectFit: 'cover',
                    display: 'flex',
                  }}
                />
              </div>
            )}

            {/* Text content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                maxWidth: '600px',
              }}
            >
              {/* Name with gradient */}
              <div
                style={{
                  fontSize: '64px',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  background: `linear-gradient(135deg, ${colors.cyan} 0%, ${colors.purple} 50%, ${colors.pink} 100%)`,
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'flex',
                }}
              >
                {title}
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: colors.black,
                  lineHeight: 1.3,
                  display: 'flex',
                }}
              >
                {subtitle}
              </div>

              {/* Domain badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '16px',
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: colors.cyan,
                    display: 'flex',
                  }}
                />
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#52525b',
                    display: 'flex',
                  }}
                >
                  samshulman.com
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);

    // Fallback error image with Memphis style
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAFAFA',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div
            style={{
              fontSize: '48px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #00C3D0 0%, #8B5CF6 50%, #FF006B 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'flex',
            }}
          >
            Sam Shulman | Software Engineer & AI Developer
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
