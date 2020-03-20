import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilSouvenirPage } from './fil-souvenir.page';

describe('FilSouvenirPage', () => {
  let component: FilSouvenirPage;
  let fixture: ComponentFixture<FilSouvenirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilSouvenirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilSouvenirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
