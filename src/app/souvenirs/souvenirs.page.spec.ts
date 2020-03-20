import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SouvenirsPage } from './souvenirs.page';

describe('SouvenirsPage', () => {
  let component: SouvenirsPage;
  let fixture: ComponentFixture<SouvenirsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouvenirsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SouvenirsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
