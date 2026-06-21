import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^../data/sermons.json$': '<rootDir>/__tests__/__mocks__/sermons.json',
  },
};

export default config;
