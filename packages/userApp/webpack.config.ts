import path from 'path'
import {buildWebpackConfig} from "../../config/buildWebpackConfig";
export default (env: any) => {

    const mode = env.mode || 'development';
    const port = env.port || 9000
    const isDev = mode === 'development'
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    const config = buildWebpackConfig({
        mode,
        port,
        isDev,
        paths
    },{
        name:'userApp',
        filename:'remoteEntry.js',
        remotes:{},
        exposes:{
            './Counter':path.resolve(__dirname,'src','Counter')
        },
        shared:{
            react: {
                "singleton": true,
                "requiredVersion": "18.2.0"
            },
            "react-dom":{
                "singleton":true,
                "requiredVersion": "18.2.0"
            }
    }})
    return config
}
