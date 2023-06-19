import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  EditSettingsModel,
  Inject,
  Page,
  PageSettingsModel,
  Resize,
  TreeGridComponent,
} from '@syncfusion/ej2-react-treegrid';

import { sortData } from './datasource';
import './App.css';
import { ContextMenuItemModel } from '@syncfusion/ej2-grids';
import {
  BeforeOpenCloseMenuEventArgs,
  MenuEventArgs,
} from '@syncfusion/ej2-navigations';

const fieldNames = ['Category', 'orderName', 'orderDate', 'price'];
const headerTextMapping: { [key: string]: string } = {
  Category: 'Category',
  orderName: 'Order Name',
  orderDate: 'Order Date',
  price: 'Price',
};

const App = () => {
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Row',
    newRowPosition: 'Below',
  };

  let treegrid: TreeGridComponent | null;
  const pageSettings: PageSettingsModel = { pageSize: 7 };
  const contextMenuItems: ContextMenuItemModel[] = [
    { text: 'Delete Row', target: '.e-content', id: 'deleterow' },
  ];

  const contextMenuClick = (args: MenuEventArgs): void => {
    if (treegrid) {
      treegrid.getColumnByField('taskID');
      switch (args.item.id) {
        case 'deleterow':
          treegrid.deleteRow(
            treegrid.getSelectedRows()[0] as HTMLTableRowElement
          );
          document
            .querySelectorAll('ul#_gridcontrol_cmenu')[0]
            .setAttribute('style', `display: none`);
          break;
      }
    }
    treegrid;
  };

  const contextMenuOpen = (args: BeforeOpenCloseMenuEventArgs): void => {
    const elem: HTMLElement = args.event.target as HTMLElement;
    const uid: string = (elem.closest('.e-row') as HTMLElement).getAttribute(
      'data-uid'
    ) as string;
  };

  return (
    <div className="wrapper">
      <TreeGridComponent
        /** Data Source */
        dataSource={sortData}
        treeColumnIndex={1}
        childMapping="subtasks"
        editSettings={editOptions}
        allowPaging={true}
        pageSettings={pageSettings}
        /** Context Menu */
        contextMenuItems={contextMenuItems}
        contextMenuOpen={contextMenuOpen}
        contextMenuClick={contextMenuClick}
        /** Settings */
        allowResizing={true}
        ref={(g) => (treegrid = g)}
        width="auto">
        <Inject services={[Edit, Resize, Page, ContextMenu]} />
        {sortData ? (
          <ColumnsDirective>
            {fieldNames.map((fieldName: string) => {
              return (
                <ColumnDirective
                  field={fieldName}
                  headerText={headerTextMapping[fieldName]}
                  width="150"
                  format={
                    fieldName === 'orderDate'
                      ? 'yMd'
                      : fieldName === 'price'
                      ? 'C0'
                      : ''
                  }
                  type={
                    fieldName === 'orderDate'
                      ? 'date'
                      : fieldName === 'price'
                      ? 'number'
                      : ''
                  }
                />
              );
            })}
          </ColumnsDirective>
        ) : (
          <p>Unble to get data</p>
        )}
      </TreeGridComponent>
    </div>
  );
};

export default App;
