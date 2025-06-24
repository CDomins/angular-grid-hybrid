import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUserService: Partial<UserService>;

  beforeEach(async () => {
    mockUserService = {
      getUsers: jest
        .fn()
        .mockReturnValue(
          of([{ id: 1, name: 'John', email: 'john@test.com', role: 'Admin' }])
        ),
    };

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.users.length).toBe(1);
      expect(component.users[0].name).toBe('John');
    });
  }));
});
