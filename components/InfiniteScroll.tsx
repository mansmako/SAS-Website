'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

type Item = { content: React.ReactNode };

type Props = {
    width?: string;
    maxHeight?: string;
    negativeMargin?: string;
    items: Item[];
    itemMinHeight?: number;
    isTilted?: boolean;
    tiltDirection?: 'left' | 'right';
    autoplay?: boolean;
    autoplaySpeed?: number;            // px per frame
    autoplayDirection?: 'down' | 'up';
    pauseOnHover?: boolean;
};

export default function InfiniteScroll({
    // Wider & responsive by default
    width = 'clamp(22rem, 92vw, 56rem)',
    // Taller section so text breathes
    maxHeight = '78vh',
    // Positive = more space between cards
    negativeMargin = '0.75rem',
    // Larger cards for readability
    itemMinHeight = 220,
    isTilted = false,
    tiltDirection = 'left',
    autoplay = true,
    // Slower default autoplay
    autoplaySpeed = 0.18,
    autoplayDirection = 'down',
    pauseOnHover = true,
    items = [],
}: Props) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const getTiltTransform = () => {
        if (!isTilted) return 'none';
        return tiltDirection === 'left'
            ? 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)'
            : 'rotateX(20deg) rotateZ(20deg) skewX(-20deg)';
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container || items.length === 0) return;

        const divItems = gsap.utils.toArray<HTMLElement>(Array.from(container.children) as HTMLElement[]);
        if (!divItems.length) return;

        // equal heights keep wrap math stable
        const firstItem = divItems[0];
        const itemStyle = getComputedStyle(firstItem);
        const itemHeight = firstItem.offsetHeight;
        const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
        const totalItemHeight = itemHeight + itemMarginTop;
        const totalHeight = itemHeight * items.length + itemMarginTop * (items.length - 1);

        const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

        // initial positions
        divItems.forEach((child, i) => {
            const y = i * totalItemHeight;
            gsap.set(child, { y, willChange: 'transform' });
        });

        // smoother manual wheel/drag (reduced sensitivity)
        const observer = Observer.create({
            target: container,
            type: 'wheel,touch,pointer',
            preventDefault: true,
            onPress: ({ target }) => {
                (target as HTMLElement).style.cursor = 'grabbing';
            },
            onRelease: ({ target }) => {
                (target as HTMLElement).style.cursor = 'grab';
            },
            onChange: ({ deltaY, isDragging, event }) => {
                const isWheel = (event as WheelEvent).type === 'wheel';
                const d = isWheel ? -deltaY : deltaY; // wheel direction feels natural
                const distance = isDragging ? d * 3 : d * 6; // was 5/10 → smoother
                divItems.forEach((child) => {
                    gsap.to(child, {
                        duration: 0.45,
                        ease: 'expo.out',
                        y: `+=${distance}`,
                        modifiers: { y: gsap.utils.unitize(wrapFn) },
                    });
                });
            },
        });

        // autoplay (respects prefers-reduced-motion)
        let rafId = 0;
        const prefersReduced =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (autoplay && !prefersReduced) {
            // Positive translateY moves downwards
            const directionFactor = autoplayDirection === 'up' ? 1 : -1;
            const speedPerFrame = autoplaySpeed * directionFactor;

            const tick = () => {
                divItems.forEach((child) => {
                    gsap.set(child, {
                        y: `+=${speedPerFrame}`,
                        modifiers: { y: gsap.utils.unitize(wrapFn) },
                    });
                });
                rafId = requestAnimationFrame(tick);
            };

            rafId = requestAnimationFrame(tick);

            if (pauseOnHover) {
                const stopTicker = () => rafId && cancelAnimationFrame(rafId);
                const startTicker = () => (rafId = requestAnimationFrame(tick));

                container.addEventListener('mouseenter', stopTicker);
                container.addEventListener('mouseleave', startTicker);

                return () => {
                    observer.kill();
                    stopTicker();
                    container.removeEventListener('mouseenter', stopTicker);
                    container.removeEventListener('mouseleave', startTicker);
                };
            }

            return () => {
                observer.kill();
                if (rafId) cancelAnimationFrame(rafId);
            };
        }

        return () => {
            observer.kill();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [
        items,
        autoplay,
        autoplaySpeed,
        autoplayDirection,
        pauseOnHover,
        isTilted,
        tiltDirection,
        negativeMargin,
    ]);

    return (
        <>
            {/* dynamic sizing from props */}
            <style jsx>{`
        .infinite-scroll-wrapper {
          max-height: ${maxHeight};
        }
        .infinite-scroll-container {
          width: ${width};
          max-width: 95vw; /* safety: never overflow screen */
        }
        .infinite-scroll-item {
          height: ${itemMinHeight}px; /* fixed for stable wrap math */
          margin-top: ${negativeMargin};
        }
      `}</style>

            {/* base styles (scoped) */}
            <style jsx>{`
        .infinite-scroll-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          overflow: hidden;
          overscroll-behavior: none;
        }

        /* Softer gradient so text isn't obscured */
        .infinite-scroll-wrapper::before,
        .infinite-scroll-wrapper::after {
          content: '';
          position: absolute;
          background: linear-gradient(var(--dir, to bottom), #060010, transparent);
          height: 18%;
          width: 100%;
          z-index: 1;
          pointer-events: none;
        }
        .infinite-scroll-wrapper::before { top: 0; }
        .infinite-scroll-wrapper::after { --dir: to top; bottom: 0; }

        .infinite-scroll-container {
          display: flex;
          flex-direction: column;
          overscroll-behavior: contain;
          padding-inline: 1rem;
          cursor: grab;
          transform-origin: center center;
          touch-action: none; /* smoother dragging on touch */
        }

        .infinite-scroll-item {
          --accent-color: color-mix(in oklab, white 80%, transparent);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem; /* more inner space */
          font-size: 1.1rem;
          font-weight: 600;
          text-align: left; /* better for paragraphs */
          border: 2px solid var(--accent-color);
          user-select: none;
          box-sizing: border-box;
          position: relative;
          background: rgba(255, 255, 255, 0.04);
          color: inherit;
          line-height: 1.5;
          will-change: transform;
        }

        @media (min-width: 768px) {
          .infinite-scroll-item {
            padding: 1.5rem;
            font-size: 1.125rem;
          }
        }
      `}</style>

            <div className="infinite-scroll-wrapper" ref={wrapperRef}>
                <div
                    className="infinite-scroll-container"
                    ref={containerRef}
                    style={{ transform: getTiltTransform() }}
                >
                    {items.map((item, i) => (
                        <div className="infinite-scroll-item" key={i}>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
