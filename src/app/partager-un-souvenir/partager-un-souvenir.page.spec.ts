import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartagerUnSouvenirPage } from './partager-un-souvenir.page';

describe('PartagerUnSouvenirPage', () => {
  let component: PartagerUnSouvenirPage;
  let fixture: ComponentFixture<PartagerUnSouvenirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartagerUnSouvenirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartagerUnSouvenirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
