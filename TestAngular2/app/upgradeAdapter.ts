import { AppModule } from './app.module';
import { UpgradeAdapter } from '@angular/upgrade';
export const upgradeAdapter = new UpgradeAdapter(AppModule);