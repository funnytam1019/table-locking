import './App.css';
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  ContextMenuItem,
  Edit,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  PageSettingsModel,
  Resize,
  Sort,
  SortSettingsModel,
} from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

const columnNames = [
  'OrderID',
  'CustomerID',
  'EmployeeID',
  'Freight',
  'ShipCountry',
];

const editing = { allowDeleting: true, allowEditing: true };

const App = () => {
  const pageSettings: PageSettingsModel = { pageSize: 6 };
  const sortSettings: SortSettingsModel = {
    columns: [
      { field: 'OrderID', direction: 'Ascending' },
      { field: 'CustomerID', direction: 'Ascending' },
      { field: 'EmployeeID', direction: 'Ascending' },
    ],
  };

  return (
    <div className="wrapper">
      <GridComponent
        dataSource={data}
        editSettings={editing}
        allowPaging={true}
        allowSorting={true}
        allowResizing={true}
        pageSettings={pageSettings}
        sortSettings={sortSettings}>
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
        <Inject services={[Page, Sort, Filter, Group, Resize]} />
      </GridComponent>
    </div>
  );
};
export default App;
