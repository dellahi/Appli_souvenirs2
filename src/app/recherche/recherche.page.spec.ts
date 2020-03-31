import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecherchePage } from './recherche.page';

describe('RecherchePage', () => {
  let component: RecherchePage;
  let fixture: ComponentFixture<RecherchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecherchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
