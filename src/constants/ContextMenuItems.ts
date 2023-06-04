import { ContextMenuItemModel } from '@syncfusion/ej2-react-grids';

export enum Target {
  HEADER_COLUMN = '.e-headercell',
  CONTENT = '.e-content',
}

export enum ContextMenuName {
  SELECT_COLUMN = 'Select Column',
  EDIT_COLUMN = 'Edit Column',
}

export const GridActionID = {
  selectColumn: 'selectcolumn',
  editColumn: 'editcolumn',
};

export const ContextMenuItems: ContextMenuItemModel[] = [
  /** For Heading Column Name */
  {
    target: Target.HEADER_COLUMN,
    text: ContextMenuName.SELECT_COLUMN,
    id: GridActionID.selectColumn,
  },
  {
    target: Target.HEADER_COLUMN,
    text: ContextMenuName.EDIT_COLUMN,
    id: GridActionID.editColumn,
  },
];
