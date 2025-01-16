// import { render, screen } from '@testing-library/angular';
// import { PromoByCustomerComponent } from './promo-by-customer.component';
// import { AppConfigService } from '../../../../app-config.service';
// import { MockProvider } from 'ng-mocks';
//
// describe('PromoByCustomerComponent', () => {
//   it('debe mostrar "PROMO visible solo COCACOLA" si isCocaCola devuelve true', async () => {
//     // Mock del servicio AppConfigService
//     const mockAppConfigService = {
//       isCocaCola: jest.fn().mockReturnValue(true),
//       isFanta: jest.fn().mockReturnValue(false),
//     };
//
//     await render(PromoByCustomerComponent, {
//       providers: [
//         { provide: AppConfigService, useValue: mockAppConfigService },
//       ],
//     });
//
//     // Verifica que el texto para CocaCola esté presente
//     expect(screen.getByText('PROMO visible solo COCACOLA')).toBeInTheDocument();
//
//     // Verifica que el texto para Fanta no esté presente
//     expect(screen.queryByText('PROMO visible solo FANTA')).toBeNull();
//   });
//
//   it('debe mostrar "PROMO visible solo FANTA" si isFanta devuelve true', async () => {
//     // Mock del servicio AppConfigService
//     const mockAppConfigService = {
//       isCocaCola: jest.fn().mockReturnValue(false),
//       isFanta: jest.fn().mockReturnValue(true),
//     };
//
//     await render(PromoByCustomerComponent, {
//       providers: [
//         { provide: AppConfigService, useValue: mockAppConfigService },
//       ],
//     });
//
//     // Verifica que el texto para Fanta esté presente
//     expect(screen.getByText('PROMO visible solo FANTA')).toBeInTheDocument();
//
//     // Verifica que el texto para CocaCola no esté presente
//     expect(screen.queryByText('PROMO visible solo COCACOLA')).toBeNull();
//   });
//
//   it('no debe mostrar ninguna promo si ambos métodos devuelven false', async () => {
//     // Mock del servicio AppConfigService
//     const mockAppConfigService = {
//       isCocaCola: jest.fn().mockReturnValue(false),
//       isFanta: jest.fn().mockReturnValue(false),
//     };
//
//     await render(PromoByCustomerComponent, {
//       providers: [
//         { provide: AppConfigService, useValue: mockAppConfigService },
//       ],
//     });
//
//     // Verifica que no se muestra ninguna promo
//     expect(screen.queryByText('PROMO visible solo COCACOLA')).toBeNull();
//     expect(screen.queryByText('PROMO visible solo FANTA')).toBeNull();
//   });
// });
