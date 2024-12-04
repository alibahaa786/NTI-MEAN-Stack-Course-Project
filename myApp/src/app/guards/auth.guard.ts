import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  const _user = inject(UserDataService)
  const currentUser = _user.getUser();
  if (!currentUser) {
    _router.navigate(['/login']);
    return false;
  } else if (currentUser.role !== "role") {
    console.log("Not authorized");
    _router.navigate(['/']);
    return false;
  } else {
    return true;
  }
};
