import MultipleSelector, { MultipleSelectorOption } from "@/components/ui/multiselect";
import { cn } from "src/helpers";

interface TeatMultipleSelectorProps {
    emptyOptionsLabel?: string;
    options: MultipleSelectorOption[];
    onChange: (value: MultipleSelectorOption[]) => void;
    selectedOptions: MultipleSelectorOption[];
    styles?: {
        containerClassName?: string;
        badgeClassName?: string;
        className?: string;
    };
}
export default function TeatMultipleSelector({
    options,
    onChange,
    selectedOptions,
    emptyOptionsLabel = "all options selected.",
    styles = {},
}: TeatMultipleSelectorProps) {
    return (
        <div className={cn("", styles.containerClassName)}>
            <MultipleSelector
                commandProps={{
                    label: "Select frameworks",
                }}
                value={selectedOptions}
                onChange={onChange}
                defaultOptions={options}
                placeholder="Select frameworks"
                hideClearAllButton
                hidePlaceholderWhenSelected
                badgeClassName={styles.badgeClassName}
                className={styles.className}
                emptyIndicator={<p className="text-center text-sm">{emptyOptionsLabel}</p>}
            />
        </div>
    );
}

// const frameworks: MultipleSelectorOption[] = [
//   {
//       value: "next.js",
//       label: "Next.js",
//   },
//   {
//       value: "sveltekit",
//       label: "SvelteKit",
//   },
//   {
//       value: "nuxt.js",
//       label: "Nuxt.js",
//       disable: true,
//   },
//   {
//       value: "remix",
//       label: "Remix",
//   },
//   {
//       value: "astro",
//       label: "Astro",
//   },
//   {
//       value: "angular",
//       label: "Angular",
//   },
//   {
//       value: "vue",
//       label: "Vue.js",
//   },
//   {
//       value: "react",
//       label: "React",
//   },
//   {
//       value: "ember",
//       label: "Ember.js",
//   },
//   {
//       value: "gatsby",
//       label: "Gatsby",
//   },
//   {
//       value: "eleventy",
//       label: "Eleventy",
//       disable: true,
//   },
//   {
//       value: "solid",
//       label: "SolidJS",
//   },
//   {
//       value: "preact",
//       label: "Preact",
//   },
//   {
//       value: "qwik",
//       label: "Qwik",
//   },
//   {
//       value: "alpine",
//       label: "Alpine.js",
//   },
//   {
//       value: "lit",
//       label: "Lit",
//   },
// ];
