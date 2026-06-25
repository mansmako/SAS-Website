"use client";

import {
    useEffect,
    useRef,
    useState,
    type ElementType,
    type ComponentPropsWithoutRef,
} from "react";
import { cn } from "@/lib/utils";

type FadeInProps<T extends ElementType> = {
    /** Which HTML tag/component to render as (e.g., "h1", "div") */
    as?: T;
    className?: string;
    /** If true, fades again when scrolled out and back in */
    reappear?: boolean;
    children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function FadeInOnView<T extends ElementType = "div">({
    as,
    className,
    reappear = true,
    children,
    ...rest
}: FadeInProps<T>) {
    const Tag = (as ?? "div") as ElementType;
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) setVisible(true);
                    else if (reappear) setVisible(false);
                }
            },
            { threshold: 0.2 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [reappear]);

    return (
        <Tag
            ref={ref as React.Ref<HTMLElement>}
            className={cn(
                "opacity-0 translate-y-4 transition-all duration-500 ease-out will-change-transform will-change-opacity",
                "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
                visible && "opacity-100 translate-y-0",
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
}
