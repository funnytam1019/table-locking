import './App.css';
import {
  ColumnDirective,
  ColumnMenu,
  ColumnsDirective,
  ContextMenu,
  ContextMenuItemModel,
  Filter,
  FilterSettingsModel,
  GridComponent,
  Inject,
  Page,
  Resize,
  SelectionSettingsModel,
  Sort,
} from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import { ContextMenuItems, GridActionID } from './constants/ContextMenuItems';

const columnNames = [
  'OrderID',
  'CustomerID',
  'EmployeeID',
  'Freight',
  'ShipCountry',
];

const App = () => {
  let grid: GridComponent | null;
  // const selectionSettings: SelectionSettingsModel = { type: 'Multiple' };
  const filterSettings: FilterSettingsModel = { type: 'CheckBox' };

  /** Handle context menu */
  const contextMenuItems: ContextMenuItemModel[] = [...ContextMenuItems];
  const handleContextMenuClick = (args: any) => {
    if (!grid) {
      return;
    }
    switch (args.item.id) {
      case GridActionID.selectColumn:
        grid.columnSelecting;
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <GridComponent
        dataSource={data}
        /** Allowed group */
        allowPaging={true}
        allowSorting={true}
        allowFiltering={true}
        allowResizing={true}
        // selectionSettings={selectionSettings}
        filterSettings={filterSettings}
        /** Reference grid */
        ref={(g) => (grid = g)}
        /** Context Menu Items */
        contextMenuItems={contextMenuItems}
        contextMenuClick={handleContextMenuClick}>
        {data.length > 0 ? (
          <ColumnsDirective>
            {columnNames.map((dataField) => {
              return (
                <ColumnDirective
                  field={dataField}
                  width="100"
                  headerTextAlign={
                    dataField === 'OrderID' ? 'Right' : 'Justify'
                  }
                  textAlign={dataField === 'OrderID' ? 'Right' : 'Justify'}
                />
              );
            })}
          </ColumnsDirective>
        ) : (
          <p>No data field</p>
        )}
        <Inject services={[Page, Sort, Filter, Resize, ContextMenu]} />
      </GridComponent>
    </div>
  );
};
export default App;
