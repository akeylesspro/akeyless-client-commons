import * as react_jsx_runtime from 'react/jsx-runtime';

interface SvgProps {
    width?: string;
    height?: string;
    viewBox?: string;
}
declare const RedXSvg: ({ height, width, viewBox }: SvgProps) => react_jsx_runtime.JSX.Element;
declare const GreenVSvg: ({ height, width, viewBox }: SvgProps) => react_jsx_runtime.JSX.Element;

declare const sortSvg: (upside_down?: boolean) => react_jsx_runtime.JSX.Element;
declare const emptyFilterSvg: (solid?: boolean) => react_jsx_runtime.JSX.Element;
declare const slashFilterSvg: (solid?: boolean) => react_jsx_runtime.JSX.Element;
declare const exportToExcelSvg: () => react_jsx_runtime.JSX.Element;

export { GreenVSvg, RedXSvg, emptyFilterSvg, exportToExcelSvg, slashFilterSvg, sortSvg };
