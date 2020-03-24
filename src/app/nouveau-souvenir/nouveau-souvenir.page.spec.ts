import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveauSouvenirPage } from './nouveau-souvenir.page';

describe('NouveauSouvenirPage', () => {
  let component: NouveauSouvenirPage;
  let fixture: ComponentFixture<NouveauSouvenirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauSouvenirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauSouvenirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
