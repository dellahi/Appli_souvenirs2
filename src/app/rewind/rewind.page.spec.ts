import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewindPage } from './rewind.page';

describe('RewindPage', () => {
  let component: RewindPage;
  let fixture: ComponentFixture<RewindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewindPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
