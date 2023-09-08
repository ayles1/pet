import type { Configuration as DevServerConfiguration} from 'webpack-dev-server'
import {BuildConfigOptions} from "./build/types/config";

export function buildDevServer(options:BuildConfigOptions):DevServerConfiguration{
    return {
            port: options.port,
            open: true,
            hot: true,
            historyApiFallback: true
    }
}
