import {BuildConfigOptions} from "./build/types/config";

export const buildResolvers = ( options:BuildConfigOptions ) => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    }
}
