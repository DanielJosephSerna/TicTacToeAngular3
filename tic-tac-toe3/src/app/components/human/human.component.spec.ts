import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { 
  mockBestOf1, 
  mockBestOf2, 
  mockBestOf3, 
  mockBestOf4, 
  mockBestOf5,
  mockBestOf6, 
  mockBestOf8,
  mockBestOf9,
  mockBestOf10} from 'src/app/mocks/mockBestOf';
import { BestOf } from 'src/app/models/bestof';
import { MoveService } from 'src/app/services/move.service';
import { HumanComponent } from './human.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HumanComponent', () => {
  let component: HumanComponent;
  let fixture: ComponentFixture<HumanComponent>;
  let mockSetUpService: MockSetUpService;

  class MockSetUpService {
    setUpHumanCompGame(): Observable<BestOf> {
      return of();
    }

    setUpHumanHumanGame(): Observable<BestOf> {
      return of();
    }

    performMove(): Observable<BestOf> {
      return of();
    }

    performBestOf(): Observable<BestOf> {
      return of();
    }
  }

  beforeEach(async () => {

    mockSetUpService = new MockSetUpService();

    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [ HumanComponent ],
      providers: [
        { provide: MoveService, useValue: mockSetUpService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isRoundOver', () => {
    it('should return true if BestOf.isOver is FINAL', () => {
      component.bestOf = mockBestOf1;
      expect(component.isRoundOver).toBe(true);
    });

    it('should return false if BestOf.isOver is ONGOING', () => {
      component.bestOf = mockBestOf2;
      expect(component.isRoundOver).toBe(false);
    });
  });

  describe('isCurrentGameOver', () => {
    it('should return false if BestOf.SetUp.status is ONGOING', () => {
      component.bestOf = mockBestOf3;
      expect(component.isCurrentGameOver).toBe(false);
    });

    it('should return true if BestOf.SetUp.status is TIE', () => {
      component.bestOf = mockBestOf4;
      expect(component.isCurrentGameOver).toBe(true);
    });

    it('should return true if BestOf.SetUp.status is OVER', () => {
      component.bestOf = mockBestOf5;
      expect(component.isCurrentGameOver).toBe(true);
    });
  });

  
  describe('setUpHumanHumanGame', () => {
    it('should return a new BestOf object for human human game', () => {
      spyOn(mockSetUpService, 'setUpHumanHumanGame').and.returnValue(of(mockBestOf6));

      component.setUpHumanHumanGame(1);

      expect(component.bestOf).toEqual(mockBestOf6);
      expect(mockSetUpService.setUpHumanHumanGame).toHaveBeenCalled();
    });
  });

  describe('move', () => {
    it('should check if selectedRound IS null', () => {
      component.selectedRound = null;

      component.move(0);

      expect(component.selectedRound).toBeNull();
    });

    it('should check if selectedRound is NOT null and bestOf is NOT null', () => {
      component.selectedRound = 1;
      component.bestOf = mockBestOf8;

      component.move(0);

      expect(component.bestOf).toEqual(mockBestOf8);
    });

    it('should check if selectedRound is NOT null and bestOf isOver is NOT ONGOING', () => {
      component.selectedRound = 1;
      component.bestOf = mockBestOf9;

      component.move(0);

      expect(component.bestOf).toEqual(mockBestOf9);
    });

    it('should check if selectedRound is NOT null and bestOf.setUp status is NOT ONGOING', () => {
      component.selectedRound = 1;
      component.bestOf = mockBestOf10;

      component.move(0);

      expect(component.bestOf).toEqual(mockBestOf10);
    });
    
  });

});
