import { screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/tests';
import { RouterProvider } from './RouterProvider';

describe('/app/RouterProvider/RouterProvider', () => {
    test('Страница должна рендериться', async () => {
        renderComponent(<RouterProvider />);
        //
        const page = await screen.findByText('Hello');
        expect(page).toBeInTheDocument();
        expect(1 + 2).toBe(3);
    });
});
