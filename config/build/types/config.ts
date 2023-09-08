export type BuildMode = 'production' | 'development'

export type BuildConfigPaths = {
    entry: string,
    build: string,
    html: string;
    src: string;
    assets?:string;
    assetsBuild?:string;
}

export type BuildConfigOptions = {
    mode: BuildMode,
    isDev: boolean,
    port: number,
    paths: BuildConfigPaths
}
