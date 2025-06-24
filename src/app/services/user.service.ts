import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    const users: User[] = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'User',
      },
      {
        id: 3,
        name: 'Peter Jones',
        email: 'peter.jones@example.com',
        role: 'Editor',
      },
      {
        id: 4,
        name: 'Mary Johnson',
        email: 'mary.j@example.com',
        role: 'User',
      },
    ];
    return of(users).pipe(delay(500));
  }
}
