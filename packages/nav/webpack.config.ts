import path from 'path';
import { buildWebpackConfig } from '../../config/buildWebpackConfig';

export default (env: any) => {
    const mode = env.mode || 'development';
    const port = env.port || 9001;
    const isDev = mode === 'development';
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src', 'shared', 'assets'),
        assetsBuild: path.resolve(__dirname, 'build', 'shared', 'assets'),
    };

    const config = buildWebpackConfig({
        mode,
        port,
        isDev,
        paths,
    }, {
        name: 'nav',
        filename: 'remoteEntry.js',
        remotes: { userApp: 'userApp@http://localhost:9000/remoteEntry.js' },
        shared: {
            react: {
                singleton: true,
                requiredVersion: '18.2.0',
            },
            'react-dom': {
                singleton: true,
                requiredVersion: '18.2.0',

            },
        },
    });
    return config;
};
