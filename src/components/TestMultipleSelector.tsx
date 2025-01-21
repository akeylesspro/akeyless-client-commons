import MultipleSelector, { MultipleSelectorOption } from "@/components/ui/multiselect";
import { cn } from "src/helpers";

interface MultipleSelectProps {
    emptyOptionsLabel?: string;
    options: MultipleSelectorOption[];
    onChange: (value: MultipleSelectorOption[]) => void;
    selectedOptions: MultipleSelectorOption[];
    styles?: {
        containerClassName?: string;
        badgeClassName?: string;
        className?: string;
        dropdownClassName?: string;
        dropdownOptionClassName?: string;
    };
}
export default function MultipleSelect({
    options,
    onChange,
    selectedOptions,
    emptyOptionsLabel = "all options selected.",
    styles = {},
}: MultipleSelectProps) {
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
                dropdownClassName={styles.dropdownClassName}
                emptyIndicator={<p className="text-center text-sm">{emptyOptionsLabel}</p>}
                dropdownOptionClassName={styles.dropdownOptionClassName}
            />
        </div>
    );
}
