import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup();
})

class MockIntersectionObserver {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(_callback?: IntersectionObserverCallback, _options?: IntersectionObserverInit) {
  }
  observe() { /* do nothing */ }
  disconnect() { /* do nothing */ }
  unobserve() { /* do nothing */ }
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
