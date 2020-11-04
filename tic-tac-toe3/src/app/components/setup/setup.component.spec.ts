// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Observable, of } from 'rxjs';
// import { MaterialModule } from 'src/app/material/material.module';
// import { mockBestOf1, mockBestOf2, mockBestOf3, mockBestOf4, mockBestOf5 } from 'src/app/mocks/mockBestOf';
// import { BestOf } from 'src/app/models/bestof';
// import { MoveService } from 'src/app/services/move.service';
// import { SetupComponent } from './setup.component';

// describe('SetupComponent', () => {
//   let component: SetupComponent;
//   let fixture: ComponentFixture<SetupComponent>;
//   let mockSetUpService: MockSetUpService;

//   class MockSetUpService {
//     setUpHumanCompGame() :Observable<BestOf> {
//       return of();
//     }

//     setUpHumanHumanGame() :Observable<BestOf> {
//       return of();
//     }

//     performMove() :Observable<BestOf> {
//       return of();
//     }

//     performBestOf() :Observable<BestOf> {
//       return of();
//     }
//   }

//   beforeEach(async () => {

//     mockSetUpService = new MockSetUpService();

//     await TestBed.configureTestingModule({
//       imports: [
//         MaterialModule
//       ],
//       declarations: [ SetupComponent ],
//       providers: [
//         { provide: MoveService, useValue: mockSetUpService }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SetupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('isRoundOver', () => {
//     it('should return true if BestOf.isOver is FINAL', () => {
//       component.bestOf = mockBestOf1;
//       expect(component.isRoundOver).toBe(true);
//     });

//     it('should return false if BestOf.isOver is ONGOING', () => {
//       component.bestOf = mockBestOf2;
//       expect(component.isRoundOver).toBe(false);
//     });
//   });

//   describe('isCurrentGameOver', () => {
//     it('should return false if BestOf.SetUp.status is ONGOING', () => {
//       component.bestOf = mockBestOf3;
//       expect(component.isCurrentGameOver).toBe(false);
//     });

//     it('should return true if BestOf.SetUp.status is TIE', () => {
//       component.bestOf = mockBestOf4;
//       expect(component.isCurrentGameOver).toBe(true);
//     });

//     it('should return true if BestOf.SetUp.status is OVER', () => {
//       component.bestOf = mockBestOf5;
//       expect(component.isCurrentGameOver).toBe(true);
//     });
//   });

// });
