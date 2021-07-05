import { MatDialogConfig } from '@angular/material/dialog';

export interface IMatDialogConfig<T> {
  data: T | null;
  disableClose: boolean;
  autoFocus: boolean;
  hasBackdrop: boolean;
}

export function createMatDialogConfig<T>({
  data = null,
  disableClose = true,
  autoFocus = true,
  hasBackdrop = true,
}: Partial<IMatDialogConfig<T>>): MatDialogConfig<T> {
  const dialogConfig = new MatDialogConfig<T>();

  dialogConfig.disableClose = disableClose;
  dialogConfig.autoFocus = autoFocus;
  dialogConfig.hasBackdrop = hasBackdrop;
  dialogConfig.data = data;
  return dialogConfig;
}
