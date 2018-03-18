export interface BsJSThemeOptions {
    name: string;
    base?: string;
    variables?: BsJSThemeVariable;
}
export interface BsJSThemeVariable {
    [key: string]: string | string[] | BsJSThemeVariable;
}
