declare module 'userApp/*'{
    import { FC } from 'react';

    const Component: FC<any>;
    export default Component;
}
declare module '*.scss'{
    const content: Record<string, string>;
    export default content;
}
declare module '*png'{
    const content: string;
    export default content;
}
