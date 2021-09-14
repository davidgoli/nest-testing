import { MockConfigService } from './config-service/config.testutils';
import { ServeAppInterceptor } from './serve-app.interceptor';

describe('ServeAppInterceptor', () => {
  it('should be defined', () => {
    expect(new ServeAppInterceptor(new MockConfigService())).toBeDefined();
  });
});
