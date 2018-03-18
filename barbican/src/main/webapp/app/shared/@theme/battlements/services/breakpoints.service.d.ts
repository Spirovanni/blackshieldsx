/**
 * Media breakpoint type
 *
 * Where `name` - breakpoint name alias (e.g. xs, sm, md, etc), and width - min breakpoint width
 */
export interface BsMediaBreakpoint {
    name: string;
    width: number;
}
export declare const DEFAULT_MEDIA_BREAKPOINTS: {
    name: string;
    width: number;
}[];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
export declare class BsMediaBreakpointsService {
    private breakpoints;
    private breakpointsMap;
    constructor(breakpoints: any);
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    getByWidth(width: number): BsMediaBreakpoint;
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    getByName(name: string): BsMediaBreakpoint;
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    getBreakpoints(): BsMediaBreakpoint[];
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    getBreakpointsMap(): {
        [breakpoint: string]: number;
    };
}
