import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  forceExit: true,
  preset: 'ts-jest',
  collectCoverage: true,
  testMatch: ['**/*.test.ts']
};

export default config;
