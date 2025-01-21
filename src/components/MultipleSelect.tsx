import MultipleSelector, { MultipleSelectorOption } from "@/components/ui/multiselect";
import { cn } from "src/helpers";

export interface MultipleSelectProps {
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
    unremovableOptions?: MultipleSelectorOption[];
}
export function MultipleSelect({
    options,
    onChange,
    selectedOptions,
    emptyOptionsLabel = "all options selected.",
    styles = {},
    unremovableOptions,
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
                unremovableOptions={unremovableOptions}
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
