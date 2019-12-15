import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: '#', field: 'order', type: 'number' },
      { title: 'Doctor Name', field: 'dname' },
      { title: 'Date', field: 'date', type: 'date' },
      { title: 'Status',field: 'status',lookup: { 1: 'Finished', 2: 'Sheduled' }
      },
      { title: 'Type', field: 'type', lookup: { 1: 'Scan Visit', 2: 'Consulting' } },
      { title: 'Description', field: 'description', type: 'text' },
     
   
    ],
    data: [
      { dname: 'Smith', date: 2019, status: 1,type: 2  },
      { dname: 'Jefferson',date: 2020, status: 2, type:1 },
    ],
  });
 
  return (
    <MaterialTable
      title="Appointment app"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}