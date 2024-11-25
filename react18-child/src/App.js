import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';
import { commonContext } from './commonContext';

const App = (props) => {
  const { mainCommonData, mainAction } = props;

  return (
    <commonContext.Provider
      value={{
        mainCommonData,
        mainAction
      }}
    >
      <RouterProvider router={routerConfig} />
    </commonContext.Provider>
  );
};

export default App;
