import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewSouvenirPage } from './new-souvenir.page';

describe('NewSouvenirPage', () => {
  let component: NewSouvenirPage;
  let fixture: ComponentFixture<NewSouvenirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSouvenirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewSouvenirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
