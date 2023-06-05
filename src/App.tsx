import {
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Resize,
  TreeGridComponent,
} from '@syncfusion/ej2-react-treegrid';

import { sortData } from './datasource';
import './App.css';

const fieldNames = ['Category', 'orderName', 'orderDate', 'price'];

const headerTextMapping: { [key: string]: string } = {
  Category: 'Category',
  orderName: 'Order Name',
  orderDate: 'Order Date',
  price: 'Price',
};

const App = () => {
  return (
    <div className="wrapper">
      <TreeGridComponent
        dataSource={sortData}
        treeColumnIndex={1}
        childMapping="subtasks"
        /** Settings */
        allowResizing={true}
        width="auto">
        <Inject services={[Resize]} />
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
