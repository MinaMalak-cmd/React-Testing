import { Example2, rows } from "./Example2";
import { fireEvent, render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { DataGrid } from "@material-ui/data-grid";
//13:40
//How to mock our component
jest.mock("@material-ui/data-grid", () => ({
  //if you need other features from data grid write
  //the following line
  ...jest.requireActual("@material-ui/data-grid"),
  DataGrid: jest.fn(() => <div>Table</div>),
}));
const mockedDataGrid = mocked(DataGrid);
/*then all you can do with myOnMoney like
 expect(myOnMoney).toHaveBeenCalledTimes(1);
expect(myOnMoney).toHaveBeenCalledWith(33);
is available now mockedDataGrid as well
*/
describe("MyComponent", () => {
  beforeEach(() => {
    mockedDataGrid.mockClear();
  });
  it("renders Material-UI grid with columnDefs and rowData", () => {
    const myOnMoney = jest.fn();
    render(<Example2 onMoney={myOnMoney} />);
    fireEvent.click(screen.getByRole("button", { name: "Give me 33 dollars" }));
    expect(myOnMoney).toHaveBeenCalledTimes(1);
    expect(myOnMoney).toHaveBeenCalledWith(33);
  });
  it("renders table passing the expected props", () => {
    render(<Example2 onMoney={jest.fn()} />);
    expect(mockedDataGrid).toHaveBeenCalledTimes(1);
  });
});
