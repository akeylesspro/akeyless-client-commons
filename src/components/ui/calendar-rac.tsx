"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type { ComponentProps } from "react";
import {
  Button,
  CalendarCell as CalendarCellRac,
  CalendarGridBody as CalendarGridBodyRac,
  CalendarGridHeader as CalendarGridHeaderRac,
  CalendarGrid as CalendarGridRac,
  CalendarHeaderCell as CalendarHeaderCellRac,
  Calendar as CalendarRac,
  composeRenderProps,
  Heading as HeadingRac,
  RangeCalendar as RangeCalendarRac,
} from "react-aria-components";

import { cn } from "@/lib/utils";

interface BaseCalendarProps {
  className?: string;
  /**
   * Tailwind classes applied on a selected day cell (single date calendar).
   * Default: blue full cell.
   */
  selectedDayClassName?: string;
  /**
   * Tailwind classes applied on today's cell when it's NOT selected.
   * Default: light blue full cell.
   */
  todayDayClassName?: string;
}

type CalendarProps = ComponentProps<typeof CalendarRac> & BaseCalendarProps;
type RangeCalendarProps = ComponentProps<typeof RangeCalendarRac> &
  BaseCalendarProps;

function CalendarHeader() {
  return (
    <header className="flex w-full items-center gap-1 pb-1">
      <Button
        className="flex size-9 items-center justify-center rounded-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
        slot="previous"
      >
        <ChevronLeftIcon size={16} />
      </Button>
      <HeadingRac className="grow text-center font-medium text-sm" />
      <Button
        className="flex size-9 items-center justify-center rounded-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
        slot="next"
      >
        <ChevronRightIcon size={16} />
      </Button>
    </header>
  );
}

function CalendarGridComponent({
  isRange = false,
  selectedDayClassName,
  todayDayClassName,
}: {
  isRange?: boolean;
  selectedDayClassName?: string;
  todayDayClassName?: string;
}) {
  const now = today(getLocalTimeZone());
  const resolvedSelectedDayClassName = selectedDayClassName?.trim()
    ? selectedDayClassName
    : "bg-blue-600 text-white";
  const resolvedTodayDayClassName = todayDayClassName?.trim()
    ? todayDayClassName
    : "bg-sky-200 text-sky-950";

  return (
    <CalendarGridRac>
      <CalendarGridHeaderRac>
        {(day) => (
          <CalendarHeaderCellRac className="size-9 rounded-md p-0 font-medium text-muted-foreground/80 text-xs">
            {day}
          </CalendarHeaderCellRac>
        )}
      </CalendarGridHeaderRac>
      <CalendarGridBodyRac className="[&_td]:px-0 [&_td]:py-px">
        {(date) => (
          <CalendarCellRac
            className={composeRenderProps(undefined, (_className, renderProps) =>
              cn(
                "relative flex size-9 items-center justify-center whitespace-nowrap rounded-md p-0 font-normal text-foreground text-sm outline-none duration-150 [transition-property:color,background-color,border-radius,box-shadow]",
                "data-[disabled]:pointer-events-none data-[unavailable]:pointer-events-none data-[focus-visible]:z-10 data-[hovered]:bg-accent data-[hovered]:text-foreground data-[unavailable]:line-through data-[disabled]:opacity-30 data-[unavailable]:opacity-30 data-[focus-visible]:ring-[3px] data-[focus-visible]:ring-ring/50",
                // Single date calendar selected/today styles (props-driven)
                !isRange &&
                  renderProps?.isSelected &&
                  !renderProps?.isDisabled &&
                  resolvedSelectedDayClassName,
                !isRange &&
                  date.compare(now) === 0 &&
                  !renderProps?.isSelected &&
                  !renderProps?.isDisabled &&
                  resolvedTodayDayClassName,
                // Range-specific styles (fixed Tailwind data-* variant syntax)
                isRange &&
                  "data-[invalid]:data-[selection-end]:bg-destructive data-[invalid]:data-[selection-start]:bg-destructive data-[invalid]:data-[selection-end]:text-white data-[invalid]:data-[selection-start]:text-white data-[selected]:rounded-none data-[selection-start]:rounded-s-md data-[selection-end]:rounded-e-md data-[invalid]:bg-red-100 data-[selected]:bg-accent data-[selection-end]:bg-primary data-[selection-start]:bg-primary data-[selected]:text-foreground data-[selection-end]:text-primary-foreground data-[selection-start]:text-primary-foreground",
              ),
            )}
            date={date}
          />
        )}
      </CalendarGridBodyRac>
    </CalendarGridRac>
  );
}

function Calendar({
  className,
  selectedDayClassName,
  todayDayClassName,
  ...props
}: CalendarProps) {
  return (
    <CalendarRac
      {...props}
      className={composeRenderProps(className, (className) =>
        cn("w-fit", className),
      )}
    >
      <CalendarHeader />
      <CalendarGridComponent
        selectedDayClassName={selectedDayClassName}
        todayDayClassName={todayDayClassName}
      />
    </CalendarRac>
  );
}

function RangeCalendar({ className, ...props }: RangeCalendarProps) {
  return (
    <RangeCalendarRac
      {...props}
      className={composeRenderProps(className, (className) =>
        cn("w-fit", className),
      )}
    >
      <CalendarHeader />
      <CalendarGridComponent isRange />
    </RangeCalendarRac>
  );
}

export { Calendar, RangeCalendar };
