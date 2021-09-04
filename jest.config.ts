import { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  verbose: true,
  roots: ['<rootDir>/src/'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/device-upgrade',
}

export default jestConfig;
