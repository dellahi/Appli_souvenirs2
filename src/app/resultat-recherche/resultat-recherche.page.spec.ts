import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultatRecherchePage } from './resultat-recherche.page';

describe('ResultatRecherchePage', () => {
  let component: ResultatRecherchePage;
  let fixture: ComponentFixture<ResultatRecherchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatRecherchePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultatRecherchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
