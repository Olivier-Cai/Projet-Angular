import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateauDetailPage } from './bateau-detail.page';

describe('BateauDetailPage', () => {
  let component: BateauDetailPage;
  let fixture: ComponentFixture<BateauDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateauDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateauDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
