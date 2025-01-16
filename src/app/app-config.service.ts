import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Define la forma que tendrá tu config (puedes agregar más campos según necesites)
export interface AppConfig {
  logoUrl: string;
  appTitle: string;
  clientIdName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config!: AppConfig;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http
      .get<AppConfig>('assets/config.json')  // Ajusta la ruta si lo has puesto en otro lugar
      .toPromise()
      .then((data: AppConfig | undefined) => {
        this.config = data as AppConfig;
        console.log('config loaded', this.config)
      })
      .catch((error) => {
        console.error('Error cargando config.json', error);
        throw error;
      });
  }

  getConfig(): AppConfig {
    if (!this.config) {
      throw new Error('Config not loaded!');
    }
    return this.config;
  }

  isCocaCola(): boolean {
    return this.config.clientIdName === 'cocacola';
  }
  isFanta(): boolean {
    return this.config.clientIdName === 'fanta';
  }

  getBrandName() {
    return this.config.clientIdName;
  }
}
