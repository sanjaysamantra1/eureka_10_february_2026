import { CanDeactivateFn } from '@angular/router';

export const hasChangesGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  if(component.isDirty){
    alert('Please save before you leave the page')
    return false;
  }else{
    return true;
  }
};
