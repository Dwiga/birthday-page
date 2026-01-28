import { render } from 'solid-js/web';

import { BirthdayCard } from './birthday-card';
import { BirthdayRouter } from './birthday-links';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

// Render the application with birthday router integration
// Requirements: 4.3, 4.4 - Integrate with existing application structure
render(() => (
  <BirthdayRouter>
    <BirthdayCard />
  </BirthdayRouter>
), root!);
