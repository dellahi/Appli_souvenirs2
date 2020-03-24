import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonProfilPage } from './mon-profil.page';

describe('MonProfilPage', () => {
  let component: MonProfilPage;
  let fixture: ComponentFixture<MonProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
