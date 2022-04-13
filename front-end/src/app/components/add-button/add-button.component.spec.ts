import { render, screen } from '@testing-library/angular';

import { AddButtonComponent } from './add-button.component';

describe('AddButtonComponent', () => {
  it('should call output event on click', async () => {
    const fnSpy = jasmine.createSpy('fnSpy');

    await render(AddButtonComponent, {
      componentProperties: {
        clickEvent: {
          emit: fnSpy,
        },
      } as any,
    });

    screen.getByTestId('gd-add-button').click();

    expect(fnSpy).toHaveBeenCalledTimes(1);
  });
});
