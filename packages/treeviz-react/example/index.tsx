import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreevizReact } from '../.';

const data_1 = [
  { id: 1, text_1: 'Chaos', text_2: 'Void', father: null, color: '#FF5722' },
  { id: 2, text_1: 'Tartarus', text_2: 'Abyss', father: 1, color: '#FFC107' },
  { id: 3, text_1: 'Gaia', text_2: 'Earth', father: 1, color: '#8BC34A' },
  { id: 4, text_1: 'Eros', text_2: 'Desire', father: 1, color: '#00BCD4' },
];

const data_2 = [
  { id: 1, text_1: 'Chaos', text_2: 'Void', father: null, color: '#2196F3' },
  { id: 2, text_1: 'Tartarus', text_2: 'Abyss', father: 1, color: '#F44336' },
  { id: 3, text_1: 'Gaia', text_2: 'Earth', father: 1, color: '#673AB7' },
  { id: 4, text_1: 'Eros', text_2: 'Desire', father: 1, color: '#009688' },
  { id: 5, text_1: 'Uranus', text_2: 'Sky', father: 3, color: '#4CAF50' },
  { id: 6, text_1: 'Ourea', text_2: 'Mountains', father: 3, color: '#FF9800' },
  { id: 7, text_1: 'Hermes', text_2: ' Sky', father: 4, color: '#2196F3' },
  { id: 8, text_1: 'Aphrodite', text_2: 'Love', father: 4, color: '#8BC34A' },
];

const linkShapeOptions = {
  quadraticBeziers: 'quadraticBeziers',
  orthogonal: 'orthogonal',
  curve: 'curve',
};

export const App = () => {
  const [isToggled, setToggled] = React.useState(true);
  const [hoveredInfo, setHoveredInfo] = React.useState('');

  return (
    <div style={{ marginLeft: 10 }}>
      <button onClick={() => setToggled(isToggled ? false : true)}>
        Toggle data
      </button>
      <div style={{ display: 'flex' }}>
        <TreevizReact
          data={isToggled ? data_1 : data_2}
          relationnalField={'father'}
          nodeWidth={120}
          nodeHeight={80}
          areaHeight={300}
          areaWidth={300}
          mainAxisNodeSpacing={2}
          secondaryAxisNodeSpacing={2}
          linkShape={'quadraticBeziers'}
          renderNode={data => {
            const nodeData = data.data;
            const settings = data.settings;
            let result = '';
            if (data.depth !== 2) {
              result = `<div class="box" style='cursor:pointer;height:${settings.nodeHeight}px; width:${settings.nodeWidth}px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:${nodeData.color};border-radius:5px;'><div><strong>
          ${nodeData.text_1}
          </strong></div><div>is</div><div><i>
          ${nodeData.text_2}
          </i></div></div>`;
            } else {
              result = `<div class="box" style='cursor:pointer;height:${
                settings.nodeHeight
              }px; width:${
                settings.nodeHeight
              }px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:${
                nodeData.color
              };border-radius:${settings.nodeHeight / 2}px;'><div><strong>
          ${nodeData.text_1}
          </strong></div></div>`;
            }
            return result;
          }}
          onNodeMouseEnter={node => setHoveredInfo(node.data.text_1)}
          onNodeClick={() => setToggled(isToggled ? false : true)}
          duration={600}
          isHorizontal
          linkWidth={node => 10}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 10,
          }}
        >
          <p> Last node hovered:</p>
          <strong>{hoveredInfo}</strong>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
