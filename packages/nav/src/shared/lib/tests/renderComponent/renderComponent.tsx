import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@/app/styles/index.scss';

export interface componentRenderOptions {
    route?: string;
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;
    const {
        route = '/',
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <div className="app">{children}</div>
        </MemoryRouter>
    );
}

export function renderComponent(
    component: ReactNode,
    options: componentRenderOptions = {},
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
