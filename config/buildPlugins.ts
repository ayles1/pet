import webpack from "webpack";
import {BuildConfigOptions} from "./build/types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export const buildPlugins = ({paths}:BuildConfigOptions,moduleFederationConfig:any) => {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        })]

    if(paths.assets){
        plugins.push(new CopyPlugin({
            patterns: [
                {
                    from: paths.assets ,
                    to: paths.assetsBuild,
                },
            ],
        }))
    }
    if (moduleFederationConfig) {
        plugins.push(
            new webpack.container.ModuleFederationPlugin(moduleFederationConfig),
        )
    }
    return plugins
}
