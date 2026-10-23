import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('credential directory', () => {
  it('combines case-insensitive name search with credential filters and clears both', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByRole('searchbox', { name: /search by name/i }), 'PATEL');
    await user.click(screen.getByRole('checkbox', { name: 'Cloud Architect' }));
    expect(screen.getByText('1 member found')).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Nirav Patel' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: 'Smit Patel' })).toBeNull();

    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(screen.getByText('6 members found')).toBeTruthy();
    expect(screen.getByRole('searchbox', { name: /search by name/i }).value).toBe('');
  });

  it('resets pagination when a filter changes and handles no results', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Page 2 of 2')).toBeTruthy();
    await user.click(screen.getByRole('checkbox', { name: 'Associate Cloud Engineer' }));
    expect(screen.getByText('Page 1 of 1')).toBeTruthy();
    expect(screen.getByText('3 members found')).toBeTruthy();

    await user.type(screen.getByRole('searchbox', { name: /search by name/i }), 'no such person');
    expect(screen.getByRole('heading', { name: 'No matching members' })).toBeTruthy();
    expect(screen.queryByRole('navigation', { name: 'Results pages' })).toBeNull();
  });

  it('sorts visible members in reverse name order', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.selectOptions(screen.getByRole('combobox', { name: /sort by/i }), 'za');
    const cards = within(screen.getByRole('list', { name: /member results/i })).getAllByRole('listitem');
    expect(within(cards[0]).getByRole('heading', { name: 'Vaibhav Patel' })).toBeTruthy();
  });
});
