import { Button } from 'antd';
import { useContext } from 'react';
import { commonContext } from './commonContext';

const Layout = () => {
  const { mainCommonData, mainAction } = useContext(commonContext);
  return (
    <div>
      <div>react18-child: {mainCommonData.count}</div>
      <Button
        size="large"
        onClick={() =>
          mainAction.setGlobalState({
            count: mainCommonData.count + 30
          })
        }
      >
        count + 30
      </Button>
    </div>
  );
};

export default Layout;
