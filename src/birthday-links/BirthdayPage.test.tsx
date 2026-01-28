/**
 * BirthdayPage Component Tests
 * 
 * Unit tests for the BirthdayPage component to verify it renders
 * the correct content and integrates properly with SolidJS.
 */

import { render } from '@solidjs/testing-library';
import { describe, expect, test } from 'vitest';
import { BirthdayPage } from './BirthdayPage';
import { BIRTHDAY_CONTENT } from './constants';

describe('<BirthdayPage />', () => {
  test('renders the birthday message', () => {
    const { getByText } = render(() => <BirthdayPage />);
    expect(getByText(BIRTHDAY_CONTENT.message)).toBeInTheDocument();
  });

  test('renders without errors', () => {
    const { container } = render(() => <BirthdayPage />);
    expect(container).toBeInTheDocument();
  });

  test('has correct CSS class', () => {
    const { container } = render(() => <BirthdayPage />);
    const birthdayPageDiv = container.querySelector('.birthday-page');
    expect(birthdayPageDiv).toBeInTheDocument();
  });

  test('displays message in h1 element', () => {
    const { container } = render(() => <BirthdayPage />);
    const h1Element = container.querySelector('h1');
    expect(h1Element).toBeInTheDocument();
    expect(h1Element?.textContent).toBe(BIRTHDAY_CONTENT.message);
  });
});