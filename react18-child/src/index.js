import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './public-path';

let root = null;
function render(props) {
  const { container, action, commonData } = props;
  if (!root) {
    root = ReactDOM.createRoot(
      container
        ? container.querySelector('#root')
        : document.querySelector('#root')
    );
  }

  root.render(<App mainAction={action} mainCommonData={commonData} />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  //
}

export async function mount(props) {
  props.onGlobalStateChange &&
    (await props.onGlobalStateChange(async (value) => {
      props = {
        ...props,
        commonData: value
      };
      render(props);
    }, true));
}

export async function unmount(props) {
  root.unmount();
  root = null;
}
