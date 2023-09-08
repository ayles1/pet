import {buildDevServer} from "./buildDevServer";
import {BuildConfigOptions} from "./build/types/config";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildConfigOptions, moduleFederationConfig: any) {
    const {entry, build} = options.paths
    const {isDev,mode} = options


    return {
        mode,
        entry,

        output: {
            path: build,
            publicPath: `http://localhost:${options.port}/`,
            clean: true
        },

        plugins: buildPlugins(options,moduleFederationConfig),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
