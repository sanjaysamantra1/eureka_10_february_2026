import { CanActivateFn } from '@angular/router';
import { UserRoleService } from '../services/user-role';
import { inject } from '@angular/core';

export const trainerGuard: CanActivateFn = (route, state) => {
  const userRoleService = inject(UserRoleService);

  if (userRoleService.getUserRole() === 'trainer') {
    return true;
  } else {
    alert('Sorry, You cannt open this page!!!')
    return false;
  }
};
