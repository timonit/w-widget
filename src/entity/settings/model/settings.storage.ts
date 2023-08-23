import { BaseStorage } from '@/shared/model/storage';
import type { SettingsState } from './types';

export class SettingsStorage extends BaseStorage<SettingsState> {
  key = 'weather-settings';
}
